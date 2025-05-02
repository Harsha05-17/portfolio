import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(
      containerRef.current.clientWidth, 
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);
    
    // Create a simple brain-like structure with particles
    const particleCount = 2000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    // Brain shape - using a spherical base with some randomization
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Spherical coordinates with some noise
      const radius = 1.5 * (0.8 + Math.random() * 0.2);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Colors - purple to cyan gradient (matching our theme)
      colors[i3] = 0.7 * Math.random(); // Red component for purple
      colors[i3 + 1] = 0.3 * Math.random(); // Green component
      colors[i3 + 2] = Math.random(); // Blue component (strong for both purple and cyan)
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    // Material and points
    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    
    const particleSystem = new THREE.Points(particles, material);
    scene.add(particleSystem);
    
    // Neural connections
    const lineCount = 200;
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(lineCount * 6); // 2 points per line, 3 coordinates per point
    const lineColors = new Float32Array(lineCount * 6);
    
    for (let i = 0; i < lineCount; i++) {
      const i6 = i * 6;
      
      // Random start point
      const startIndex = Math.floor(Math.random() * particleCount) * 3;
      linePositions[i6] = positions[startIndex];
      linePositions[i6 + 1] = positions[startIndex + 1];
      linePositions[i6 + 2] = positions[startIndex + 2];
      
      // Random end point
      const endIndex = Math.floor(Math.random() * particleCount) * 3;
      linePositions[i6 + 3] = positions[endIndex];
      linePositions[i6 + 4] = positions[endIndex + 1];
      linePositions[i6 + 5] = positions[endIndex + 2];
      
      // Line color - purple to cyan gradient
      const useColor = Math.random() > 0.5;
      
      if (useColor) {
        // Purple (for primary color)
        lineColors[i6] = 0.7; // Red for purple
        lineColors[i6 + 1] = 0.1; // Low green
        lineColors[i6 + 2] = 1.0; // Full blue
        
        lineColors[i6 + 3] = 0.7;
        lineColors[i6 + 4] = 0.1;
        lineColors[i6 + 5] = 1.0;
      } else {
        // Cyan (for secondary color)
        lineColors[i6] = 0.1; // Low red
        lineColors[i6 + 1] = 0.9; // High green
        lineColors[i6 + 2] = 1.0; // Full blue
        
        lineColors[i6 + 3] = 0.1;
        lineColors[i6 + 4] = 0.9;
        lineColors[i6 + 5] = 1.0;
      }
    }
    
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
    
    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.4
    });
    
    const lineSystem = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSystem);
    
    // Animation
    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Slightly rotate based on mouse position
      particleSystem.rotation.x = mouseY * 0.2;
      particleSystem.rotation.z = mouseX * 0.2;
      
      lineSystem.rotation.x = mouseY * 0.2;
      lineSystem.rotation.z = mouseX * 0.2;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      
      particleSystem.rotation.y += 0.002;
      lineSystem.rotation.y += 0.002;
      
      renderer.render(scene, camera);
      
      // Store animation ID for cleanup
      return animationId;
    };
    
    const animationId = animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth, 
        containerRef.current.clientHeight
      );
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      particles.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] animate-float"
    />
  );
}
