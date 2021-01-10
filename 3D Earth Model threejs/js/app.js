/* Declare elements */
let scene, camera, renderer;
let earth, mouse, center, tm;

/* Event Listeners */
document.addEventListener("mousemove", onDocumentMouseMove, false);
window.addEventListener("resize", onWindowResize, false);

/* Event Listeners Functions */
function onDocumentMouseMove(event) {
    mouse.x = (event.clientX - window.innerWidth / 2) * 8;
    mouse.y = (event.clientY - window.innerHeight / 2) * 8;
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

/* Three.js Functions */
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        3000
    );

    camera.position.z = 250;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.zoomSpeed = 0.5;
    controls.minDistance = 100;
    controls.maxDistance = 300;
    controls.addEventListener("update", renderer);

    mouse = new THREE.Vector3(0, 0, 1);

    let loader = new THREE.GLTFLoader();
    loader.load("./assets/scene.gltf", function (gltf) {
        earth = gltf.scene.children[0];
        earth.scale.set(1, 1, 1);
        scene.add(gltf.scene);
        animate();
    });
}

function animate() {
    renderer.render(scene, camera);
    earth.rotation.z += 0.004;
    requestAnimationFrame(animate);
    // render();
}

function render() {
    camera.position.x += (-mouse.x - camera.position.x) * 0.00002;
    camera.position.y += (mouse.y - camera.position.y) * 0.00002;
    renderer.render(scene, camera);
}

init();
