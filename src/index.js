import * as THREE from 'three';
import './style.css';
import OrbitControls from 'three-orbitcontrols';
import * as dat from 'dat.gui';
import Cubic from './class/Cubic'

const position = 0.103;


let camera, scene, renderer, group;
let geometry, material, mesh;


const lwrb1 = new Cubic(0x00228B22, [-position, -position, position]).cube
const lwr2 = new Cubic(0x00228B22, [0, -position, position]).cube
const lwrg3 = new Cubic(0x00228B22, [position, -position, position]).cube

const lwb4 = new Cubic(0x00228B22, [-position, -position, 0]).cube
const lw5 = new Cubic(0x00228B22, [0, -position, 0]).cube
const lwg6 = new Cubic(0x00228B22, [position, -position, 0]).cube

const lwbo7 = new Cubic(0x00228B22, [-position, -position, -position]).cube
const lwo8 = new Cubic(0x00228B22, [0, -position, -position]).cube
const lwog9 = new Cubic(0x00228B22, [position, -position, -position]).cube



const mrb10 = new Cubic(0x00228B22, [-position, 0, position]).cube
const mr11 = new Cubic(0x00228B22, [0, 0, position]).cube
const mrg12 = new Cubic(0x00228B22, [position, 0, position]).cube

const mrb13 = new Cubic(0x00228B22, [-position, 0, 0]).cube
const m14 = new Cubic(0x00228B22, [0, 0, 0]).cube
const mg15 = new Cubic(0x00228B22, [position, 0, 0]).cube

const mbo16 = new Cubic(0x00228B22, [-position, 0, -position]).cube
const mo17 = new Cubic(0x00228B22, [0, 0, -position]).cube
const mog18 = new Cubic(0x00228B22, [position, 0, -position]).cube



const uyrb19 = new Cubic(0x00228B22, [-position, position, position]).cube
const uyr20 = new Cubic(0x00228B22, [0, position, position]).cube
const uyrg21 = new Cubic(0x00228B22, [position, position, position]).cube

const uyb22 = new Cubic(0x00228B22, [-position, position, 0]).cube
const uy23 = new Cubic(0x00228B22, [0, position, 0]).cube
const uyg24 = new Cubic(0x00228B22, [position, position, 0]).cube

const uybo25 = new Cubic(0x00228B22, [-position, position, -position]).cube
const uyo26 = new Cubic(0x00228B22, [0, position, -position]).cube
const uyog27 = new Cubic(0x00228B22, [position, position, -position]).cube

let cubicsArry = [
    lwrb1,
    lwr2,
    lwrg3,
    lwb4,
    lw5,
    lwg6,
    lwbo7,
    lwo8,
    lwog9,
    mrb10,
    mr11,
    mrg12,
    mrb13,
    m14,
    mg15,
    mbo16,
    mo17,
    mog18,
    uyrb19,
    uyr20,
    uyrg21,
    uyb22,
    uy23,
    uyg24,
    uybo25,
    uyo26,
    uyog27,
]

function init() {

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 10);
    camera.position.z = 1
    group = new THREE.Group();
    scene = new THREE.Scene();
    cubicsArry.forEach(item => {
        group.add(item)
    })
    scene.add(group);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    const controls = new OrbitControls(camera, renderer.domElement)


    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

}




const gui = new dat.GUI();




var cubic = {
    rotationX: 0,
    rotationY: 0
};

gui.add(cubic, 'rotationX', 0, 3).step(0.01);
gui.add(cubic, 'rotationY', 0, 3).step(0.01);



function animate() {
    requestAnimationFrame(animate);

    group.rotation.x = cubic.rotationX;
    group.rotation.y = cubic.rotationY;


    renderer.render(scene, camera);

}
init();

animate();
