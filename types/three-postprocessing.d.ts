declare module "three/examples/jsm/postprocessing/EffectComposer.js" {
  import { WebGLRenderer, WebGLRenderTarget } from "three";

  export class EffectComposer {
    constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);
    addPass(pass: unknown): void;
    setSize(width: number, height: number): void;
    render(deltaTime?: number): void;
    dispose(): void;
  }
}

declare module "three/examples/jsm/postprocessing/RenderPass.js" {
  import { Camera, Scene } from "three";

  export class RenderPass {
    constructor(scene: Scene, camera: Camera, overrideMaterial?: unknown, clearColor?: unknown, clearAlpha?: unknown);
  }
}

declare module "three/examples/jsm/postprocessing/UnrealBloomPass.js" {
  import { Vector2 } from "three";

  export class UnrealBloomPass {
    constructor(resolution: Vector2, strength?: number, radius?: number, threshold?: number);
    setSize(width: number, height: number): void;
  }
}
