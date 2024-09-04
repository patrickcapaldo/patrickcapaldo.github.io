---
layout: page
title: Three.js Experiments
description: Having fun with three.js
img: assets\img\projects\threejs_experiments\threejs_logo.png
importance: 1
category: fun
---

### Rotating Green Cube

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

### Sun and Orbiting Planet Example

<div id="solar-system-container" style="width: 600px; height: 400px; border: 1px solid #ccc;"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>

<script>
  // Set up the scene, camera, and renderer
  const container = document.getElementById('solar-system-container');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // OrbitControls for camera panning and zooming
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // smooth controls
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;

  // Create the Sun (a large yellow sphere)
  const sunGeometry = new THREE.SphereGeometry(1.5, 32, 32);
  const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const sun = new THREE.Mesh(sunGeometry, sunMaterial);
  scene.add(sun);

  // Create the planet (a smaller blue sphere)
  const planetGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const planetMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const planet = new THREE.Mesh(planetGeometry, planetMaterial);

  // Create a pivot point for the planet to orbit around the sun
  const pivot = new THREE.Object3D();
  pivot.add(planet);
  scene.add(pivot);

  // Position the planet at some distance from the sun
  planet.position.x = 5;

  // Set camera position
  camera.position.z = 10;

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Rotate the pivot to simulate orbit
    pivot.rotation.y += 0.01; // Orbit speed

    // Update controls
    controls.update();

    // Render the scene
    renderer.render(scene, camera);
  }
  animate();

  // Handle window resize
  window.addEventListener('resize', () => {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    renderer.setSize(containerWidth, containerHeight);
    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();
  });
</script>
