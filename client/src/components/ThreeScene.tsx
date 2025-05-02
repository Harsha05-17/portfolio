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
    
    // Create a futuristic robot using simple geometric shapes
    const robotGroup = new THREE.Group();
    
    // Robot head - main part
    const headGeometry = new THREE.SphereGeometry(0.8, 16, 16);
    const headMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x090621, 
      emissive: 0x5626FF,
      emissiveIntensity: 0.2,
      specular: 0x54E8FF,
      shininess: 40,
      transparent: true,
      opacity: 0.9
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    robotGroup.add(head);
    
    // Robot face plate
    const faceGeometry = new THREE.CircleGeometry(0.5, 16);
    const faceMaterial = new THREE.MeshPhongMaterial({
      color: 0x54E8FF,
      emissive: 0x54E8FF,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide
    });
    const face = new THREE.Mesh(faceGeometry, faceMaterial);
    face.position.z = 0.81;
    robotGroup.add(face);
    
    // Robot eyes
    const eyeGeometry = new THREE.CircleGeometry(0.1, 12);
    const eyeMaterial = new THREE.MeshBasicMaterial({
      color: 0xB026FF,
      side: THREE.DoubleSide
    });
    
    // Left eye
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.2, 0.1, 0.82);
    robotGroup.add(leftEye);
    
    // Right eye
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.2, 0.1, 0.82);
    robotGroup.add(rightEye);
    
    // Robot antennas
    const antennaGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.5, 8);
    const antennaMaterial = new THREE.MeshPhongMaterial({
      color: 0x54E8FF,
      emissive: 0x54E8FF,
      emissiveIntensity: 0.3
    });
    
    // Left antenna
    const leftAntenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    leftAntenna.position.set(-0.4, 0.9, 0);
    leftAntenna.rotation.x = Math.PI * 0.1;
    leftAntenna.rotation.z = -Math.PI * 0.1;
    robotGroup.add(leftAntenna);
    
    // Right antenna
    const rightAntenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    rightAntenna.position.set(0.4, 0.9, 0);
    rightAntenna.rotation.x = Math.PI * 0.1;
    rightAntenna.rotation.z = Math.PI * 0.1;
    robotGroup.add(rightAntenna);
    
    // Antenna tops (glowing spheres)
    const antennaTipGeometry = new THREE.SphereGeometry(0.06, 8, 8);
    const antennaTipMaterial = new THREE.MeshBasicMaterial({
      color: 0xB026FF,
      transparent: true,
      opacity: 0.9
    });
    
    // Left tip
    const leftTip = new THREE.Mesh(antennaTipGeometry, antennaTipMaterial);
    leftTip.position.set(-0.46, 1.15, -0.05);
    robotGroup.add(leftTip);
    
    // Right tip
    const rightTip = new THREE.Mesh(antennaTipGeometry, antennaTipMaterial);
    rightTip.position.set(0.46, 1.15, -0.05);
    robotGroup.add(rightTip);
    
    // Robot neck
    const neckGeometry = new THREE.CylinderGeometry(0.2, 0.3, 0.3, 16);
    const neckMaterial = new THREE.MeshPhongMaterial({
      color: 0x090621,
      emissive: 0x5626FF,
      emissiveIntensity: 0.1,
      specular: 0x54E8FF
    });
    const neck = new THREE.Mesh(neckGeometry, neckMaterial);
    neck.position.y = -0.9;
    robotGroup.add(neck);
    
    // Robot shoulders
    const shoulderGeometry = new THREE.BoxGeometry(1.8, 0.4, 0.6);
    const shoulderMaterial = new THREE.MeshPhongMaterial({
      color: 0x090621,
      emissive: 0x5626FF,
      emissiveIntensity: 0.2,
      specular: 0x54E8FF
    });
    const shoulders = new THREE.Mesh(shoulderGeometry, shoulderMaterial);
    shoulders.position.y = -1.2;
    robotGroup.add(shoulders);
    
    // Add decorative lines to the robot (similar to the reference image)
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [
      // Face contour lines
      -0.3, 0.3, 0.82, 0.3, 0.3, 0.82,  // forehead
      -0.3, -0.3, 0.82, 0.3, -0.3, 0.82, // chin
      -0.3, 0.3, 0.82, -0.3, -0.3, 0.82, // left face
      0.3, 0.3, 0.82, 0.3, -0.3, 0.82,   // right face
      
      // Head detail lines
      -0.5, 0.5, 0.65, 0.5, 0.5, 0.65,   // top
      -0.6, 0, 0.65, 0.6, 0, 0.65,       // middle
      -0.5, -0.5, 0.65, 0.5, -0.5, 0.65, // bottom
    ];
    
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x54E8FF,
      transparent: true,
      opacity: 0.7
    });
    
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    robotGroup.add(lines);
    
    // Create circuit-like patterns on the robot
    const circuitCount = 50;
    const circuitGeometry = new THREE.BufferGeometry();
    const circuitPositions = [];
    
    for (let i = 0; i < circuitCount; i++) {
      // Create small circuit paths on the head
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      const x1 = 0.8 * Math.sin(phi) * Math.cos(theta);
      const y1 = 0.8 * Math.sin(phi) * Math.sin(theta);
      const z1 = 0.8 * Math.cos(phi);
      
      const x2 = 0.8 * Math.sin(phi) * Math.cos(theta + 0.1);
      const y2 = 0.8 * Math.sin(phi) * Math.sin(theta + 0.1);
      const z2 = 0.8 * Math.cos(phi);
      
      circuitPositions.push(x1, y1, z1, x2, y2, z2);
    }
    
    circuitGeometry.setAttribute('position', new THREE.Float32BufferAttribute(circuitPositions, 3));
    
    const circuitMaterial = new THREE.LineBasicMaterial({
      color: 0xB026FF,
      transparent: true,
      opacity: 0.5
    });
    
    const circuits = new THREE.LineSegments(circuitGeometry, circuitMaterial);
    robotGroup.add(circuits);
    
    // Add the robot to the scene
    scene.add(robotGroup);
    
    // Add lights to make the robot more visible
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
      robotGroup.rotation.x = mouseY * 0.3;
      robotGroup.rotation.y = mouseX * 0.5;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      
      // Small continuous rotation and floating effect
      robotGroup.rotation.y += 0.005;
      robotGroup.position.y = Math.sin(Date.now() * 0.001) * 0.1;
      
      // Make antenna tips pulse
      const pulseFactor = (Math.sin(Date.now() * 0.005) + 1) * 0.5;
      leftTip.scale.set(1 + pulseFactor * 0.3, 1 + pulseFactor * 0.3, 1 + pulseFactor * 0.3);
      rightTip.scale.set(1 + pulseFactor * 0.3, 1 + pulseFactor * 0.3, 1 + pulseFactor * 0.3);
      
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
      headGeometry.dispose();
      headMaterial.dispose();
      faceGeometry.dispose();
      faceMaterial.dispose();
      eyeGeometry.dispose();
      eyeMaterial.dispose();
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
