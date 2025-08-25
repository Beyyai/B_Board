import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { fabric } from 'fabric';

const Whiteboard = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize Fabric.js canvas for drawing
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
      backgroundColor: '#f0f0f0',
      isDrawingMode: true,
    });

    // Set up drawing brush
    canvas.freeDrawingBrush.color = 'black';
    canvas.freeDrawingBrush.width = 5;

    // Add some basic shapes for testing
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      width: 100,
      height: 100,
      fill: 'red',
    });
    canvas.add(rect);

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Drawing Canvas</h2>
      <canvas ref={canvasRef} style={{ border: '2px solid #333' }} />

      <h2>AR Preview (Basic 3D Scene)</h2>
      <Canvas style={{ height: '400px', width: '800px', border: '2px solid #333' }}>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>

      <div style={{ marginTop: '20px' }}>
        <p>Draw on the canvas above. The AR scene shows a basic 3D view.</p>
        <button onClick={() => alert('More features coming!')}>Add Shape</button>
      </div>
    </div>
  );
};

export default Whiteboard;
