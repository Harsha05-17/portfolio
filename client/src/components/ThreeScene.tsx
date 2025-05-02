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
    
    // Create futuristic AI neural network visualization
    const networkGroup = new THREE.Group();
    
    // Create a core sphere for the AI brain
    const coreGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const coreMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x090621, 
      emissive: 0x5626FF,
      emissiveIntensity: 0.4,
      specular: 0x54E8FF,
      shininess: 70,
      transparent: true,
      opacity: 0.8
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    networkGroup.add(core);
    
    // Create neural nodes (small spheres)
    const nodeCount = 80;
    const nodes: THREE.Mesh[] = [];
    const nodeGeometry = new THREE.SphereGeometry(0.06, 8, 8);
    
    // Create two materials for alternating node colors
    const nodeMaterial1 = new THREE.MeshBasicMaterial({
      color: 0xB026FF, // Purple
      transparent: true,
      opacity: 0.9
    });
    
    const nodeMaterial2 = new THREE.MeshBasicMaterial({
      color: 0x54E8FF, // Cyan
      transparent: true,
      opacity: 0.9
    });
    
    // Position nodes in 3D space around the core
    for (let i = 0; i < nodeCount; i++) {
      const material = i % 2 === 0 ? nodeMaterial1 : nodeMaterial2;
      const node = new THREE.Mesh(nodeGeometry, material);
      
      // Random position around the sphere, but some distance from the core
      const distance = 1.5 + Math.random() * 1.3; // Between 1.5 and 2.8
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      node.position.set(
        distance * Math.sin(phi) * Math.cos(theta),
        distance * Math.sin(phi) * Math.sin(theta),
        distance * Math.cos(phi)
      );
      
      nodes.push(node);
      networkGroup.add(node);
    }
    
    // Create neural connections (lines between nodes)
    const connectionsGeometry = new THREE.BufferGeometry();
    const connectionPositions = [];
    
    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      const nodeA = nodes[i];
      
      // Connect to a few closest nodes
      for (let j = 0; j < 3; j++) {
        let nodeB = nodes[(i + j + 1) % nodes.length];
        
        connectionPositions.push(
          nodeA.position.x, nodeA.position.y, nodeA.position.z,
          nodeB.position.x, nodeB.position.y, nodeB.position.z
        );
      }
      
      // Also connect some nodes to the core
      if (i % 8 === 0) {
        connectionPositions.push(
          nodeA.position.x, nodeA.position.y, nodeA.position.z,
          0, 0, 0 // Core center
        );
      }
    }
    
    connectionsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(connectionPositions, 3));
    
    const connectionsMaterial = new THREE.LineBasicMaterial({
      color: 0x54E8FF,
      transparent: true,
      opacity: 0.3
    });
    
    const connections = new THREE.LineSegments(connectionsGeometry, connectionsMaterial);
    networkGroup.add(connections);
    
    // Create data flow particles
    const flowParticlesCount = 150;
    const flowGeometry = new THREE.BufferGeometry();
    const flowPositions = new Float32Array(flowParticlesCount * 3);
    const flowSizes = new Float32Array(flowParticlesCount);
    const flowColors = new Float32Array(flowParticlesCount * 3);
    
    for (let i = 0; i < flowParticlesCount; i++) {
      // Random positions similar to nodes but more of them
      const distance = 1 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      const index = i * 3;
      flowPositions[index] = distance * Math.sin(phi) * Math.cos(theta);
      flowPositions[index + 1] = distance * Math.sin(phi) * Math.sin(theta);
      flowPositions[index + 2] = distance * Math.cos(phi);
      
      // Random sizes
      flowSizes[i] = Math.random() * 0.05 + 0.02;
      
      // Colors - mix between purple and cyan
      const mixFactor = Math.random();
      flowColors[index] = mixFactor * 0.69 + (1 - mixFactor) * 0.33; // R (purple to cyan)
      flowColors[index + 1] = mixFactor * 0.15 + (1 - mixFactor) * 0.91; // G (purple to cyan)
      flowColors[index + 2] = mixFactor * 1.0 + (1 - mixFactor) * 1.0; // B (both are bright)
    }
    
    flowGeometry.setAttribute('position', new THREE.BufferAttribute(flowPositions, 3));
    flowGeometry.setAttribute('size', new THREE.BufferAttribute(flowSizes, 1));
    flowGeometry.setAttribute('color', new THREE.BufferAttribute(flowColors, 3));
    
    const flowMaterial = new THREE.PointsMaterial({
      size: 0.05,
      map: new THREE.TextureLoader().load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACC0lEQVR4nO3bwW7CMBC18R9S//+P1LuR2qIY480m9vB8hxYZx/OGNuXt/f39E5qut/YH2FoGiNdeewEQW5d22WbrKllEbB9Fjx6xSQ8Y8jWZRVGEpNEAy1ZDPVkEZZEBn/vYf+p6SooIkfAnoVpvCVtFRGiAdSsrMQIkjARYAqxkn/dlXSLlP3/uOfCNtqz5COwBNPqaUoQUERYAeM9SG1JW64+MiHCvjPXmLbWXw4WIUDcB67b1PSOvPjRUAWi3rO9Z1p/x6yLSALS9Pev5rLdWRKQAcG1ZA7Stz3p1RagCpLbsk+4Zvz4ipAFS7XktTXvG+8KrIjbfo+sOLH9IbP7oDPiX7uRYFgBLm8tUXK09AAA9wxswXMBvRvRBRG/O8GcPAMADdL3+7x6QekYsxfmzRZ2Euy6BVP9XulveNQ/oMdj//bqvwR4AmPa1ZR4wPOC62+cNeAHNqQcAPP9QAADAXABeANi+HMAeAABGvxoQIGCuNygA4GmvwTAArk8B8AIAmNfjMAAeADDHnPO3RJ/0IOTy/+ydxK5FQVAY/Ru4/5WKg0AyaNIzIJqclfdMdSXdKqrtD3Bv4RDKDIBQZgCEMgMglBkAocwACGUGQCgzAEKZARDKRQMcVSOwZr8LgB5BNe27AHicXzX1rkfgcUHVtB9xCdwGXvUGvAQKE+8OBYKZI9AD3M68oAcYetwcDfgdyEJ5AfQLLWmNCDFXfI8AAAAASUVORK5CYII='),
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false
    });
    
    const flowParticles = new THREE.Points(flowGeometry, flowMaterial);
    networkGroup.add(flowParticles);
    
    // Add a halo effect around the core
    const haloGeometry = new THREE.SphereGeometry(1.4, 32, 32);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0xB026FF,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    networkGroup.add(halo);
    
    // Create a second outer halo with different color
    const outerHaloGeometry = new THREE.SphereGeometry(1.8, 32, 32);
    const outerHaloMaterial = new THREE.MeshBasicMaterial({
      color: 0x54E8FF,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide
    });
    const outerHalo = new THREE.Mesh(outerHaloGeometry, outerHaloMaterial);
    networkGroup.add(outerHalo);
    
    // Add the network to the scene
    scene.add(networkGroup);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);
    
    const frontLight = new THREE.DirectionalLight(0xFFFFFF, 1);
    frontLight.position.set(0, 0, 5);
    scene.add(frontLight);
    
    const leftLight = new THREE.DirectionalLight(0xB026FF, 0.5);
    leftLight.position.set(-5, 0, 2);
    scene.add(leftLight);
    
    const rightLight = new THREE.DirectionalLight(0x54E8FF, 0.5);
    rightLight.position.set(5, 0, 2);
    scene.add(rightLight);
    
    // Animation
    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Slightly rotate based on mouse position
      networkGroup.rotation.x = mouseY * 0.3;
      networkGroup.rotation.y = mouseX * 0.5;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      
      // Rotate the network
      networkGroup.rotation.y += 0.003;
      
      // Pulsating effect for the core
      const pulseFactor = (Math.sin(Date.now() * 0.001) + 1) * 0.5;
      halo.material.opacity = 0.1 + pulseFactor * 0.1;
      outerHalo.material.opacity = 0.05 + pulseFactor * 0.08;
      
      // Animate individual nodes
      nodes.forEach((node, i) => {
        const time = Date.now() * 0.001;
        const offset = i * 0.1;
        
        // Small orbital movement
        const orbitRadius = 0.05;
        const orbitSpeed = 0.5 + (i % 5) * 0.1;
        
        node.position.x += Math.sin(time * orbitSpeed + offset) * orbitRadius * 0.01;
        node.position.y += Math.cos(time * orbitSpeed + offset) * orbitRadius * 0.01;
        node.position.z += Math.sin(time * orbitSpeed * 0.7 + offset) * orbitRadius * 0.01;
        
        // Scale pulsation for every few nodes
        if (i % 5 === 0) {
          const scalePulse = Math.sin(time * 2 + i) * 0.2 + 1;
          node.scale.set(scalePulse, scalePulse, scalePulse);
        }
      });
      
      // Update data flow particles
      const flowPositionsArray = flowGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < flowParticlesCount; i++) {
        const idx = i * 3;
        
        // Move particles inward/outward for a flowing effect
        const time = Date.now() * 0.001;
        const speed = 0.2 + (i % 5) * 0.05;
        const distance = ((time * speed + i) % 3) - 0.2; // Range from -0.2 to 2.8
        
        // Normalized direction vector to/from center
        const x = flowPositionsArray[idx] / Math.sqrt(
          flowPositionsArray[idx]**2 + 
          flowPositionsArray[idx+1]**2 + 
          flowPositionsArray[idx+2]**2
        );
        const y = flowPositionsArray[idx+1] / Math.sqrt(
          flowPositionsArray[idx]**2 + 
          flowPositionsArray[idx+1]**2 + 
          flowPositionsArray[idx+2]**2
        );
        const z = flowPositionsArray[idx+2] / Math.sqrt(
          flowPositionsArray[idx]**2 + 
          flowPositionsArray[idx+1]**2 + 
          flowPositionsArray[idx+2]**2
        );
        
        // Set new positions
        flowPositionsArray[idx] = x * distance;
        flowPositionsArray[idx+1] = y * distance;
        flowPositionsArray[idx+2] = z * distance;
      }
      flowGeometry.attributes.position.needsUpdate = true;
      
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
      coreGeometry.dispose();
      coreMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial1.dispose();
      nodeMaterial2.dispose();
      connectionsGeometry.dispose();
      connectionsMaterial.dispose();
      flowGeometry.dispose();
      flowMaterial.dispose();
      haloGeometry.dispose();
      haloMaterial.dispose();
      outerHaloGeometry.dispose();
      outerHaloMaterial.dispose();
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
