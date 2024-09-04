---
layout: page
title: Three.js Experiments
description: Having fun with three.js
img: assets/img/projects/threejs_experiments/threejs_logo.png
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

<br>

### Sun and Orbiting Planet

Try clicking and dragging on this one.

<div id="solar-system-container-1" style="width: 600px; height: 400px; border: 1px solid #ccc;"></div>

<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>

<script>
  // Set up the scene, camera, and renderer
  const container1 = document.getElementById('solar-system-container-1');
  const scene1 = new THREE.Scene();
  const camera1 = new THREE.PerspectiveCamera(75, container1.clientWidth / container1.clientHeight, 0.1, 1000);
  const renderer1 = new THREE.WebGLRenderer();
  renderer1.setSize(container1.clientWidth, container1.clientHeight);
  container1.appendChild(renderer1.domElement);

  // OrbitControls for camera panning and zooming
  const controls1 = new THREE.OrbitControls(camera1, renderer1.domElement);
  controls1.enableDamping = true;
  controls1.dampingFactor = 0.25;
  controls1.enableZoom = true;

  // Create the Sun (a large yellow sphere)
  const sunGeometry1 = new THREE.SphereGeometry(1.5, 32, 32);
  const sunMaterial1 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const sun1 = new THREE.Mesh(sunGeometry1, sunMaterial1);
  scene1.add(sun1);

  // Create the planet (a smaller blue sphere)
  const planetGeometry1 = new THREE.SphereGeometry(0.5, 32, 32);
  const planetMaterial1 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const planet1 = new THREE.Mesh(planetGeometry1, planetMaterial1);

  // Create a pivot point for the planet to orbit around the sun
  const pivot1 = new THREE.Object3D();
  pivot1.add(planet1);
  scene1.add(pivot1);

  // Position the planet at some distance from the sun
  planet1.position.x = 5;

  // Set camera position
  camera1.position.z = 10;

  // Animation loop
  function animate1() {
    requestAnimationFrame(animate1);

    // Rotate the pivot to simulate orbit
    pivot1.rotation.y += 0.01; // Orbit speed

    // Update controls
    controls1.update();

    // Render the scene
    renderer1.render(scene1, camera1);
  }
  animate1();

  // Handle window resize
  window.addEventListener('resize', () => {
    const containerWidth1 = container1.clientWidth;
    const containerHeight1 = container1.clientHeight;
    
    renderer1.setSize(containerWidth1, containerHeight1);
    camera1.aspect = containerWidth1 / containerHeight1;
    camera1.updateProjectionMatrix();
  });
</script>

<br>
























### Fly-Through Terrain Example

<div id="terrain-container" style="width: 800px; height: 600px; border: 1px solid #ccc;"></div>

<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/PointerLockControls.js"></script>

<script>
// Set up the scene, camera, and renderer
const containerTerrain = document.getElementById('terrain-container');
const sceneTerrain = new THREE.Scene();
const cameraTerrain = new THREE.PerspectiveCamera(75, containerTerrain.clientWidth / containerTerrain.clientHeight, 0.1, 1000);
const rendererTerrain = new THREE.WebGLRenderer();
rendererTerrain.setSize(containerTerrain.clientWidth, containerTerrain.clientHeight);
containerTerrain.appendChild(rendererTerrain.domElement);

// Create the terrain using a plane geometry
const terrainGeometry = new THREE.PlaneGeometry(200, 200, 100, 100);
const terrainMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22, wireframe: false });
const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
terrain.rotation.x = -Math.PI / 2; // Rotate to make it flat
sceneTerrain.add(terrain);

// Apply random height values to the terrain vertices for simple terrain elevation
terrainGeometry.vertices.forEach(vertex => {
  vertex.z = Math.random() * 10; // Random elevation
});
terrainGeometry.computeVertexNormals();
terrainGeometry.verticesNeedUpdate = true;

// Add lighting to the scene
const ambientLight = new THREE.AmbientLight(0x404040); // Soft ambient light
sceneTerrain.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 100, 100).normalize(); // Position the light
sceneTerrain.add(directionalLight);

// Set up PointerLockControls for first-person movement
const controlsTerrain = new THREE.PointerLockControls(cameraTerrain, rendererTerrain.domElement);
cameraTerrain.position.set(0, 10, 50); // Start above the terrain

// Enable pointer lock when the user clicks on the terrain container
containerTerrain.addEventListener('click', () => {
  controlsTerrain.lock();
});

// Movement variables
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
const moveSpeed = 0.2;

// Keyboard controls for movement
document.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'ArrowUp':
    case 'KeyW':
      moveForward = true;
      break;
    case 'ArrowLeft':
    case 'KeyA':
      moveLeft = true;
      break;
    case 'ArrowDown':
    case 'KeyS':
      moveBackward = true;
      break;
    case 'ArrowRight':
    case 'KeyD':
      moveRight = true;
      break;
  }
});

document.addEventListener('keyup', (event) => {
  switch (event.code) {
    case 'ArrowUp':
    case 'KeyW':
      moveForward = false;
      break;
    case 'ArrowLeft':
    case 'KeyA':
      moveLeft = false;
      break;
    case 'ArrowDown':
    case 'KeyS':
      moveBackward = false;
      break;
    case 'ArrowRight':
    case 'KeyD':
      moveRight = false;
      break;
  }
});

// Animation loop
function animateTerrain() {
  requestAnimationFrame(animateTerrain);

  // Handle movement
  if (controlsTerrain.isLocked) {
    if (moveForward) controlsTerrain.moveForward(moveSpeed);
    if (moveBackward) controlsTerrain.moveForward(-moveSpeed);
    if (moveLeft) controlsTerrain.moveRight(-moveSpeed);
    if (moveRight) controlsTerrain.moveRight(moveSpeed);
  }

  // Render the scene
  rendererTerrain.render(sceneTerrain, cameraTerrain);
}
animateTerrain();

// Handle window resize
window.addEventListener('resize', () => {
  rendererTerrain.setSize(containerTerrain.clientWidth, containerTerrain.clientHeight);
  cameraTerrain.aspect = containerTerrain.clientWidth / containerTerrain.clientHeight;
  cameraTerrain.updateProjectionMatrix();
});
</script>