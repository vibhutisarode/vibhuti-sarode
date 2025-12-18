import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Html } from '@react-three/drei';
import * as THREE from 'three';

// Loading component
function Loader() {
  return (
    <Html center>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        color: '#00b4d8'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '3px solid rgba(0, 180, 216, 0.3)',
          borderTop: '3px solid #00b4d8',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <span style={{ fontSize: '14px' }}>Loading 3D Model...</span>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </Html>
  );
}

// The 3D Model Component
function Model() {
  const group = useRef();
  const mixerRef = useRef();
  
  // Load the Littlest Tokyo model from Three.js examples
  const { scene, animations } = useGLTF(
    'https://threejs.org/examples/models/gltf/LittlestTokyo.glb'
  );

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      const action = mixerRef.current.clipAction(animations[0]);
      action.play();
    }

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };
  }, [scene, animations]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
    // Gentle auto-rotation
    if (group.current) {
      group.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={group}>
      <primitive 
        object={scene} 
        scale={0.035} 
        position={[0, -2.2, 0]} 
      />
    </group>
  );
}

// Preload the model
useGLTF.preload('https://threejs.org/examples/models/gltf/LittlestTokyo.glb');

// Main Component
function TokyoModel() {
  return (
    <div className="tokyo-model-section">
      <div className="tokyo-model-container">
        <Canvas
          camera={{ position: [20, 10, 25], fov: 45 }}
          style={{ background: 'transparent' }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            <Model />
            
            <Environment preset="city" />
            
            <OrbitControls 
              enablePan={false}
              enableZoom={false}
              enableDamping={true}
              dampingFactor={0.05}
              autoRotate={false}
              target={[0, 0, 0]}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default TokyoModel;
