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
    scene.background = new THREE.Color(0x140d08);
    scene.fog = new THREE.Fog(0x080503, 10, 62);

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
    renderer.toneMappingExposure = 0.84;
    mount.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.46, 0.48, 0.34);
    composer.addPass(bloomPass);

    const segmentCount = 14;
    const segmentLength = 12;
    const corridorWidth = 14;
    const corridorHeight = 8.4;
    const conveyorSpeed = 3.9;

    const ambient = new THREE.AmbientLight(0x3a2717, 0.24);
    scene.add(ambient);

    const hemi = new THREE.HemisphereLight(0xb37a3f, 0x120b07, 0.28);
    hemi.position.set(0, corridorHeight + 3, -42);
    scene.add(hemi);

    const portalPoint = new THREE.PointLight(0xffcf86, 7000, 220, 1.15);
    portalPoint.position.set(0, 3.3, -144);
    scene.add(portalPoint);

    const sideFill = new THREE.PointLight(0xad783a, 126, 100, 1.5);
    sideFill.position.set(0, 3.2, -98);
    scene.add(sideFill);

    const corridorGroup = new THREE.Group();
    scene.add(corridorGroup);

    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x1d150f,
      roughness: 0.98,
      metalness: 0.02,
    });

    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x21170f,
      roughness: 1,
      metalness: 0,
    });

    const frameBorderMat = new THREE.MeshStandardMaterial({
      color: 0x352818,
      roughness: 0.88,
      metalness: 0.08,
      emissive: 0x271b0f,
      emissiveIntensity: 0.42,
    });

    const framePanelMaterials = frameImages.map(() =>
      new THREE.MeshStandardMaterial({
        color: 0x352413,
        roughness: 0.78,
        metalness: 0.06,
        emissive: 0x26190d,
        emissiveIntensity: 0.25,
      })
    );

    if (framePanelMaterials.length === 0) {
      framePanelMaterials.push(
        new THREE.MeshStandardMaterial({
          color: 0x352413,
          roughness: 0.78,
          metalness: 0.06,
          emissive: 0x26190d,
          emissiveIntensity: 0.25,
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
    const overheadLampGeo = new THREE.SphereGeometry(0.32, 18, 18);
    const overheadLampMat = new THREE.MeshStandardMaterial({
      color: 0x725034,
      emissive: 0xffc56e,
      emissiveIntensity: 0.72,
      roughness: 0.36,
      metalness: 0.04,
    });
    const overheadGlowGeo = new THREE.CircleGeometry(0.88, 24);
    const overheadGlowMat = new THREE.MeshBasicMaterial({
      color: 0xffc578,
      transparent: true,
      opacity: 0.12,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });

    const frameBaseW = 2.95;
    const frameBaseH = 2.15;
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

    type FramePlacement = { y: number; z: number; scale: number; roll: number; materialIndex: number };

    const makePlacements = (segmentIndex: number, sideOffset: number) => {
      const zSlots = [-3.55, 0, 3.55];
      const ySlots = [1.95, 3.2, 4.45];
      const slotOrder = [0, 1, 2].sort(
        (a, b) => seeded(segmentIndex * 37.1 + sideOffset + a * 5.4) - seeded(segmentIndex * 37.1 + sideOffset + b * 5.4)
      );
      const rowOrder = [0, 1, 2].sort(
        (a, b) => seeded(segmentIndex * 52.7 + sideOffset + a * 3.2) - seeded(segmentIndex * 52.7 + sideOffset + b * 3.2)
      );

      const frameCount = 2 + Math.floor(seeded(segmentIndex * 17.7 + sideOffset) * 2);
      const placements: FramePlacement[] = [];

      for (let idx = 0; idx < frameCount; idx += 1) {
        const seedBase = segmentIndex * 71.9 + sideOffset + idx * 11.3;
        const scale = 0.72 + seeded(seedBase + 2.2) * 0.36;
        const z = zSlots[slotOrder[idx]] + (seeded(seedBase + 4.4) - 0.5) * 0.18;
        const y = ySlots[rowOrder[idx]] + (seeded(seedBase + 6.6) - 0.5) * 0.2;
        const roll = (seeded(seedBase + 8.8) - 0.5) * 0.14;
        const materialIndex = Math.floor(seeded(seedBase + 12.4) * framePanelMaterials.length);

        const overlaps = placements.some((prev) => {
          const yGap = Math.abs(prev.y - y);
          const zGap = Math.abs(prev.z - z);
          const minY = (frameBaseH * prev.scale + frameBaseH * scale) / 2 + 0.2;
          const minZ = (frameBaseW * prev.scale + frameBaseW * scale) / 2 + 0.28;
          return yGap < minY && zGap < minZ;
        });

        if (!overlaps) {
          placements.push({ y, z, scale, roll, materialIndex });
        }
      }

      return placements;
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

      if (i % 2 === 0) {
        const lamp = new THREE.Mesh(overheadLampGeo, overheadLampMat);
        const jitterZ = (seeded(i * 19.3 + 7.1) - 0.5) * 1.5;
        lamp.position.set(0, corridorHeight - 0.48, jitterZ);

        const glow = new THREE.Mesh(overheadGlowGeo, overheadGlowMat);
        glow.rotation.x = Math.PI / 2;
        glow.position.set(0, corridorHeight - 0.64, jitterZ);

        const lampLight = new THREE.PointLight(0xffc173, 28, 12, 2);
        lampLight.position.set(0, corridorHeight - 0.58, jitterZ);

        segment.add(lamp, glow, lampLight);
      }

      const leftPlacements = makePlacements(i, 13.1);
      const rightPlacements = makePlacements(i, 39.7);

      leftPlacements.forEach((placement) => {
        const [leftBorder, leftPanel] = createFrame(
          -corridorWidth / 2 + 0.11,
          placement.y,
          placement.z,
          Math.PI / 2,
          placement.materialIndex,
          placement.scale,
          placement.roll
        );
        segment.add(leftBorder, leftPanel);
      });

      rightPlacements.forEach((placement) => {
        const [rightBorder, rightPanel] = createFrame(
          corridorWidth / 2 - 0.11,
          placement.y,
          placement.z,
          -Math.PI / 2,
          placement.materialIndex,
          placement.scale,
          placement.roll
        );
        segment.add(rightBorder, rightPanel);
      });

      corridorGroup.add(segment);
      segments.push(segment);
    }

    const portalGroup = new THREE.Group();
    scene.add(portalGroup);
    const portalZ = -146;

    const endpointBeam = new THREE.SpotLight(0xffc779, 620, 205, 0.58, 0.58, 0.95);
    endpointBeam.position.set(0, 3.5, portalZ + 0.82);
    endpointBeam.target.position.set(0, 3.15, -104);
    scene.add(endpointBeam, endpointBeam.target);

    const pillarGeo = new THREE.BoxGeometry(1.35, 7.6, 1.2);
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 0.96, metalness: 0.02 });
    const leftPillar = new THREE.Mesh(pillarGeo, pillarMat);
    leftPillar.position.set(-2.5, 3.8, portalZ);

    const rightPillar = new THREE.Mesh(pillarGeo, pillarMat);
    rightPillar.position.set(2.5, 3.8, portalZ);

    const topBeam = new THREE.Mesh(new THREE.BoxGeometry(6.4, 1.2, 1.2), pillarMat);
    topBeam.position.set(0, 7.2, portalZ);

    const doorTrimMat = new THREE.MeshStandardMaterial({
      color: 0x49321a,
      emissive: 0xa06b31,
      emissiveIntensity: 0.52,
      roughness: 0.56,
      metalness: 0.14,
    });

    const doorLeftTrim = new THREE.Mesh(new THREE.BoxGeometry(0.26, 6.15, 0.45), doorTrimMat);
    doorLeftTrim.position.set(-1.72, 3.35, portalZ + 0.9);
    const doorRightTrim = new THREE.Mesh(new THREE.BoxGeometry(0.26, 6.15, 0.45), doorTrimMat);
    doorRightTrim.position.set(1.72, 3.35, portalZ + 0.9);
    const doorTopTrim = new THREE.Mesh(new THREE.BoxGeometry(3.7, 0.26, 0.45), doorTrimMat);
    doorTopTrim.position.set(0, 6.3, portalZ + 0.9);
    const doorBottomTrim = new THREE.Mesh(new THREE.BoxGeometry(3.7, 0.2, 0.45), doorTrimMat);
    doorBottomTrim.position.set(0, 0.4, portalZ + 0.9);

    const exitDoorLight = new THREE.Mesh(
      new THREE.PlaneGeometry(3.18, 5.75),
      new THREE.MeshStandardMaterial({
        color: 0xffe5b5,
        emissive: 0xffd08f,
        emissiveIntensity: 4.8,
        roughness: 0.18,
        metalness: 0,
      })
    );
    exitDoorLight.position.set(0, 3.32, portalZ + 0.86);

    const exitDoorAura = new THREE.Mesh(
      new THREE.PlaneGeometry(9.4, 8.5),
      new THREE.MeshBasicMaterial({
        color: 0xffc375,
        transparent: true,
        opacity: 0.14,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    exitDoorAura.position.set(0, 4.05, portalZ + 0.5);

    const floorSpill = new THREE.Mesh(
      new THREE.PlaneGeometry(3.2, 7.8),
      new THREE.MeshBasicMaterial({
        color: 0xffc16f,
        transparent: true,
        opacity: 0.13,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      })
    );
    floorSpill.rotation.x = -Math.PI / 2;
    floorSpill.position.set(0, 0.12, portalZ + 1.1);

    portalGroup.add(
      leftPillar,
      rightPillar,
      topBeam,
      doorLeftTrim,
      doorRightTrim,
      doorTopTrim,
      doorBottomTrim,
      exitDoorLight,
      exitDoorAura,
      floorSpill
    );

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
      const dt = Math.min(clock.getDelta(), 1 / 30);

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
