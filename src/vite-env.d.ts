/// <reference types="vite/client" />

import * as THREE from 'three'

declare global {
  interface Window {
    THREE: typeof THREE
    VANTA: {
      NET: (options: Record<string, unknown>) => {
        destroy: () => void
        setOptions: (options: Record<string, unknown>) => void
        el: HTMLElement
        linesMesh?: {
          material: {
            vertexColors: boolean
            color: THREE.Color
            needsUpdate: boolean
          }
        }
      }
    }
  }
}

export {}