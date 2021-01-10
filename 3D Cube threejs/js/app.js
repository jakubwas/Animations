/* Declare elements */
let scene, camera, renderer, cube;

/* Event Listeners */
window.addEventListener("resize", onWindowResize, false);

/* Event Listeners Functions */
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

/* Three.js Functions */

function init() {
    // Set up the scene
    scene = new THREE.Scene();

    // Set up the camera
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    // Set up the renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create Cube
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    cube = new THREE.Mesh(geometry, material);

    // Add cube to the scene
    scene.add(cube);

    camera.position.z = 5;
    
    // Add Orbit controls which allows the camera to orbit around a target
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener("update", renderer);

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.015;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

init();
