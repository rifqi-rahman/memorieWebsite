"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

type CorridorCanvasProps = {
  frameImages: string[];
};

export default function CorridorCanvas({ frameImages }: CorridorCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x120d0a);
    scene.fog = new THREE.Fog(0x050403, 10, 62);

    const seeded = (seed: number) => {
      const n = Math.sin(seed * 127.1 + seed * 311.7) * 43758.5453;
      return n - Math.floor(n);
    };

    const camera = new THREE.PerspectiveCamera(56, 1, 0.1, 240);
    camera.position.set(0, 1.95, 7.5);
    camera.lookAt(0, 2, -26);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.94;
    mount.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.62, 0.55, 0.3);
    composer.addPass(bloomPass);

    const segmentCount = 14;
    const segmentLength = 12;
    const corridorWidth = 14;
    const corridorHeight = 8.4;
    const conveyorSpeed = 7;

    const ambient = new THREE.AmbientLight(0x2a1d12, 0.26);
    scene.add(ambient);

    const hemi = new THREE.HemisphereLight(0x8a6132, 0x0a0806, 0.24);
    hemi.position.set(0, corridorHeight + 3, -42);
    scene.add(hemi);

    const portalPoint = new THREE.PointLight(0xffd99a, 9800, 220, 1.15);
    portalPoint.position.set(0, 3.3, -144);
    scene.add(portalPoint);

    const portalBeam = new THREE.SpotLight(0xffcf86, 960, 235, 0.72, 0.62, 1.05);
    portalBeam.position.set(0, 4.8, -142.4);
    portalBeam.target.position.set(0, 2.2, -35);
    scene.add(portalBeam, portalBeam.target);

    const sideFill = new THREE.PointLight(0x8f6d3f, 170, 100, 1.5);
    sideFill.position.set(0, 3.2, -98);
    scene.add(sideFill);

    const corridorGroup = new THREE.Group();
    scene.add(corridorGroup);

    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x17110d,
      roughness: 0.98,
      metalness: 0.02,
    });

    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x1a130d,
      roughness: 1,
      metalness: 0,
    });

    const frameBorderMat = new THREE.MeshStandardMaterial({
      color: 0x2b2318,
      roughness: 0.88,
      metalness: 0.08,
      emissive: 0x1d150c,
      emissiveIntensity: 0.35,
    });

    const framePanelMaterials = frameImages.map(() =>
      new THREE.MeshStandardMaterial({
        color: 0x2a2014,
        roughness: 0.78,
        metalness: 0.06,
        emissive: 0x1a130a,
        emissiveIntensity: 0.22,
      })
    );

    if (framePanelMaterials.length === 0) {
      framePanelMaterials.push(
        new THREE.MeshStandardMaterial({
          color: 0x2a2014,
          roughness: 0.78,
          metalness: 0.06,
          emissive: 0x1a130a,
          emissiveIntensity: 0.22,
        })
      );
    }

    const loader = new THREE.TextureLoader();
    frameImages.forEach((path, i) => {
      // Placeholder screenshot path: replace these files manually in /public/images/hero/.
      loader.load(
        path,
        (texture: THREE.Texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.wrapS = THREE.ClampToEdgeWrapping;
          texture.wrapT = THREE.ClampToEdgeWrapping;
          framePanelMaterials[i].map = texture;
          framePanelMaterials[i].emissiveIntensity = 0.08;
          framePanelMaterials[i].needsUpdate = true;
        },
        undefined,
        () => {
          // Keep fallback material if image is not present yet.
        }
      );
    });

    const wallGeo = new THREE.BoxGeometry(0.2, corridorHeight, segmentLength);
    const floorGeo = new THREE.BoxGeometry(corridorWidth, 0.22, segmentLength);
    const ceilingGeo = new THREE.BoxGeometry(corridorWidth, 0.2, segmentLength);
    const framePlaneGeo = new THREE.PlaneGeometry(2.6, 1.8);
    const frameBorderGeo = new THREE.PlaneGeometry(2.95, 2.15);
    const sconceGeo = new THREE.BoxGeometry(0.2, 0.62, 0.2);
    const sconceMat = new THREE.MeshStandardMaterial({
      color: 0x6b4d2a,
      emissive: 0x9a6f38,
      emissiveIntensity: 0.9,
      roughness: 0.7,
      metalness: 0.1,
    });

    const segments: THREE.Group[] = [];

    const createFrame = (
      x: number,
      y: number,
      z: number,
      rotY: number,
      materialIndex: number,
      scale: number,
      roll: number
    ) => {
      const border = new THREE.Mesh(frameBorderGeo, frameBorderMat);
      border.position.set(x, y, z);
      border.rotation.set(0, rotY, roll);
      border.scale.setScalar(scale);

      const panel = new THREE.Mesh(framePlaneGeo, framePanelMaterials[materialIndex % framePanelMaterials.length]);
      panel.position.set(x + (rotY > 0 ? 0.03 : -0.03), y, z);
      panel.rotation.set(0, rotY, roll);
      panel.scale.setScalar(scale * 0.94);

      return [border, panel];
    };

    for (let i = 0; i < segmentCount; i += 1) {
      const segment = new THREE.Group();
      segment.position.z = -i * segmentLength;

      const leftWall = new THREE.Mesh(wallGeo, wallMat);
      leftWall.position.set(-corridorWidth / 2, corridorHeight / 2, 0);

      const rightWall = new THREE.Mesh(wallGeo, wallMat);
      rightWall.position.set(corridorWidth / 2, corridorHeight / 2, 0);

      const floor = new THREE.Mesh(floorGeo, floorMat);
      floor.position.set(0, 0, 0);

      const ceiling = new THREE.Mesh(ceilingGeo, wallMat);
      ceiling.position.set(0, corridorHeight, 0);

      segment.add(leftWall, rightWall, floor, ceiling);

      const leftSconce = new THREE.Mesh(sconceGeo, sconceMat);
      leftSconce.position.set(-corridorWidth / 2 + 0.16, 4.95, 0);
      const rightSconce = new THREE.Mesh(sconceGeo, sconceMat);
      rightSconce.position.set(corridorWidth / 2 - 0.16, 4.95, 0);
      segment.add(leftSconce, rightSconce);

      const frameCount = 2 + Math.floor(seeded(i * 17.7 + 3.1) * 3);
      for (let slot = 0; slot < frameCount; slot += 1) {
        const baseSeed = i * 41.13 + slot * 7.71;
        const zStride = segmentLength / (frameCount + 1);
        const frameZ = -segmentLength / 2 + zStride * (slot + 1) + (seeded(baseSeed + 5.3) - 0.5) * 1.15;
        const leftY = 1.75 + seeded(baseSeed + 9.4) * 3.25;
        const rightY = 1.75 + seeded(baseSeed + 13.6) * 3.25;
        const leftScale = 0.66 + seeded(baseSeed + 17.5) * 0.92;
        const rightScale = 0.66 + seeded(baseSeed + 21.7) * 0.92;
        const leftRoll = (seeded(baseSeed + 26.2) - 0.5) * 0.16;
        const rightRoll = (seeded(baseSeed + 31.8) - 0.5) * 0.16;
        const leftMatIdx = Math.floor(seeded(baseSeed + 38.3) * framePanelMaterials.length);
        const rightMatIdx = Math.floor(seeded(baseSeed + 44.9) * framePanelMaterials.length);

        const [leftBorder, leftPanel] = createFrame(
          -corridorWidth / 2 + 0.11,
          leftY,
          frameZ,
          Math.PI / 2,
          leftMatIdx,
          leftScale,
          leftRoll
        );

        const [rightBorder, rightPanel] = createFrame(
          corridorWidth / 2 - 0.11,
          rightY,
          frameZ,
          -Math.PI / 2,
          rightMatIdx,
          rightScale,
          rightRoll
        );

        segment.add(leftBorder, leftPanel, rightBorder, rightPanel);
      }

      corridorGroup.add(segment);
      segments.push(segment);
    }

    const portalGroup = new THREE.Group();
    scene.add(portalGroup);
    const portalZ = -146;

    const pillarGeo = new THREE.BoxGeometry(1.35, 7.6, 1.2);
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.96, metalness: 0.02 });
    const leftPillar = new THREE.Mesh(pillarGeo, pillarMat);
    leftPillar.position.set(-2.5, 3.8, portalZ);

    const rightPillar = new THREE.Mesh(pillarGeo, pillarMat);
    rightPillar.position.set(2.5, 3.8, portalZ);

    const topBeam = new THREE.Mesh(new THREE.BoxGeometry(6.4, 1.2, 1.2), pillarMat);
    topBeam.position.set(0, 7.2, portalZ);

    const portalPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(3.4, 5.8),
      new THREE.MeshStandardMaterial({
        color: 0xffeab8,
        emissive: 0xffdd9c,
        emissiveIntensity: 6.2,
        roughness: 0.2,
        metalness: 0,
      })
    );
    portalPlane.position.set(0, 3.6, portalZ + 0.6);

    const portalHalo = new THREE.Mesh(
      new THREE.PlaneGeometry(14, 10),
      new THREE.MeshBasicMaterial({
        color: 0xffc777,
        transparent: true,
        opacity: 0.2,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    portalHalo.position.set(0, 4.1, portalZ + 0.1);

    const portalCore = new THREE.Mesh(
      new THREE.PlaneGeometry(6.4, 7.5),
      new THREE.MeshBasicMaterial({
        color: 0xffe4b0,
        transparent: true,
        opacity: 0.24,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    portalCore.position.set(0, 3.9, portalZ + 0.3);

    portalGroup.add(leftPillar, rightPillar, topBeam, portalPlane, portalHalo, portalCore);

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
      bloomPass.setSize(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    const clock = new THREE.Clock();
    let raf = 0;

    const animate = () => {
      const dt = clock.getDelta();

      segments.forEach((seg) => {
        seg.position.z += conveyorSpeed * dt;
        if (seg.position.z > segmentLength) {
          seg.position.z -= segmentLength * segmentCount;
        }
      });

      composer.render();
      raf = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      composer.dispose();
      renderer.dispose();
      scene.traverse((obj: THREE.Object3D) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.geometry) {
          mesh.geometry.dispose();
        }

        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((material: THREE.Material) => {
            const mat = material as THREE.MeshStandardMaterial;
            if (mat.map) mat.map.dispose();
            mat.dispose();
          });
        } else if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          if (mat.map) mat.map.dispose();
          mat.dispose();
        }
      });

      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [frameImages]);

  return <div ref={mountRef} style={{ position: "absolute", inset: 0 }} />;
}
