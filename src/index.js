import * as THREE from 'three';
import './style.css';
import OrbitControls from 'three-orbitcontrols';
import Cube from './class/Cube'


const mainCube = new Cube()
let camera, scene, renderer;


function init() {

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 10);
    camera.position.z = 1
    scene = new THREE.Scene();

    const skyColor = 0xffffff
    const groundColor = 0xeeeeee;
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);

    setTimeout(() => {
        mainCube.backRotateY(-1)
    }, 1000)

    scene.add(mainCube.frontGroupZ);
    scene.add(mainCube.middleGroupZ);
    scene.add(mainCube.backGroupZ);

    scene.add(mainCube.frontGroupX);
    scene.add(mainCube.middleGroupX);
    scene.add(mainCube.backGroupX);

    scene.add(mainCube.frontGroupY);
    scene.add(mainCube.middleGroupY);
    scene.add(mainCube.backGroupY);

    scene.add(mainCube.cube);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    const controls = new OrbitControls(camera, renderer.domElement)
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

}

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
    mainCube.update()

}

init();
animate();
