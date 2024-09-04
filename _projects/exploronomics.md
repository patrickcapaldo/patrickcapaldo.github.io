---
layout: page
title: Exploronomics
description: Explore the economies of our world.
img: 
importance: 1
category: fun
---


# Motivation

<!-- [Check out Exploronomics](https://patrickcap.github.io/apps/exploronomics-app/index.html) -->

### Three.js Example

### Three.js Example

<div id="threejs-container" style="width: 400px; height: 300px; border: 1px solid #ccc;"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script>
  // Set up the scene, camera, and renderer
  const container = document.getElementById('threejs-container');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

  // Create the WebGL renderer and set its size to match the container's size
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Create a simple cube
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();

  // Handle window resize and container size changes
  window.addEventListener('resize', () => {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    // Update renderer size
    renderer.setSize(containerWidth, containerHeight);
    
    // Update camera aspect ratio
    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();
  });
</script>
