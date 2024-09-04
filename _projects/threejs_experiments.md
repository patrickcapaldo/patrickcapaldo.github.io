---
layout: page
title: Three.js Experiments
description: Having fun with three.js
img: assets/img/projects/threejs_experiments/threejs_logo.png
importance: 1
category: fun
---

### Rotating Green Cube

<div id="green-cube-container" style="width: 400px; height: 300px; border: 1px solid #ccc;"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script>
  // Set up the scene, camera, and renderer
  const container = document.getElementById('green-cube-container');
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

### Rotating Cube Changing Colours

<div id="cube-container" style="width: 100vw; height: 100vh;"></div>
<script>
    // Scene setup
    const scene2 = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('cube-container').appendChild(renderer.domElement);

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene2.add(cube);

    // Set camera position
    camera.position.z = 5;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Rotate the cube
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        // Change color over time
        const time = Date.now() * 0.002;
        cube.material.color.setHSL(Math.sin(time), 0.5, 0.5);

        renderer.render(scene, camera);
    }
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
</script>

<br>

### Sun and Orbiting Planet

Try clicking, dragging, and zooming on this one.

<div id="solar-system-container" style="width: 600px; height: 400px; border: 1px solid #ccc;"></div>

<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>

<script>
  // Set up the scene, camera, and renderer
  const container1 = document.getElementById('solar-system-container');
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
