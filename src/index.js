import * as THREE from 'three';
import './style.css';
import OrbitControls from 'three-orbitcontrols';
import * as dat from 'dat.gui';
import Cubic from './class/Cubic'
import Cube from './class/Cube'
import * as colors from './colors/colors';
import TWEEN from '@tweenjs/tween.js';


const mainCube = new Cube()

console.log(mainCube)


const position = 0.117;


let camera, scene, renderer, group;


const lwrb1 = new Cubic(colors.lwrb1, [-position, -position, position]).cube
const lwr2 = new Cubic(colors.lwr2, [0, -position, position]).cube
const lwrg3 = new Cubic(colors.lwrg3, [position, -position, position]).cube

const lwb4 = new Cubic(colors.lwb4, [-position, -position, 0]).cube
const lw5 = new Cubic(colors.lw5, [0, -position, 0]).cube
const lwg6 = new Cubic(colors.lwg6, [position, -position, 0]).cube

const lwbo7 = new Cubic(colors.lwbo7, [-position, -position, -position]).cube
const lwo8 = new Cubic(colors.lwo8, [0, -position, -position]).cube
const lwog9 = new Cubic(colors.lwog9, [position, -position, -position]).cube



const mrb10 = new Cubic(colors.mrb10, [-position, 0, position]).cube
const mr11 = new Cubic(colors.mr11, [0, 0, position]).cube
const mrg12 = new Cubic(colors.mrg12, [position, 0, position]).cube

const mrb13 = new Cubic(colors.mrb13, [-position, 0, 0]).cube
const m14 = new Cubic(colors.m14, [0, 0, 0]).cube
const mg15 = new Cubic(colors.mg15, [position, 0, 0]).cube

const mbo16 = new Cubic(colors.mbo16, [-position, 0, -position]).cube
const mo17 = new Cubic(colors.mo17, [0, 0, -position]).cube
const mog18 = new Cubic(colors.mog18, [position, 0, -position]).cube



const uyrb19 = new Cubic(colors.uyrb19, [-position, position, position]).cube
const uyr20 = new Cubic(colors.uyr20, [0, position, position]).cube
const uyrg21 = new Cubic(colors.uyrg21, [position, position, position]).cube

const uyb22 = new Cubic(colors.uyb22, [-position, position, 0]).cube
const uy23 = new Cubic(colors.uy23, [0, position, 0]).cube
const uyg24 = new Cubic(colors.uyg24, [position, position, 0]).cube

const uybo25 = new Cubic(colors.uybo25, [-position, position, -position]).cube
const uyo26 = new Cubic(colors.uyo26, [0, position, -position]).cube
const uyog27 = new Cubic(colors.uyog27, [position, position, -position]).cube

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
    const bottomGroup = new THREE.Object3D();
    const rightGroup = new THREE.Object3D();
    scene = new THREE.Scene();

    cubicsArry.forEach(item => {
        group.add(item)
    })

    const skyColor = 0xffffff  // light blue
    const groundColor = 0xeeeeee;
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);

    var position = { z: 0 };
    var target = { z: Math.PI / 2 };
    var positionR = { z: 0 };
    var targetR = { z: Math.PI / 2 };


    bottomGroup.attach(lwrb1)
    bottomGroup.attach(lwr2)
    bottomGroup.attach(lwrg3)

    bottomGroup.attach(mrb10)
    bottomGroup.attach(mr11)
    bottomGroup.attach(mrg12)
    bottomGroup.attach(uyrb19)
    bottomGroup.attach(uyr20)
    bottomGroup.attach(uyrg21)


    var tween = new TWEEN.Tween(position).to(target, 2000);

    var tweenRight = new TWEEN.Tween(positionR).to(targetR, 2000);

    tween.start();

    tween.onUpdate(function () {
        bottomGroup.rotation.z = position.z
    });
    tween.onComplete(function () {


        rightGroup.attach(lwrb1)
        rightGroup.attach(lwr2)
        rightGroup.attach(lwrg3)
        rightGroup.attach(lwg6)
        rightGroup.attach(mg15)
        rightGroup.attach(uyg24)
        rightGroup.attach(lwog9)
        rightGroup.attach(mog18)
        rightGroup.attach(uyog27)

        // scene.add(rightGroup);

        tweenRight.start();
    });
    tweenRight.onUpdate(function () {
        bottomGroup.rotation.z = position.z
    });
    tweenRight.onUpdate(function () {
        rightGroup.rotation.x = -positionR.z
    });

    setTimeout(() => {
        mainCube.frontRotate()
    }, 3000)

    scene.add(mainCube.frontGroup);
    // scene.add(bottomGroup);

    scene.add(mainCube.cube);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    const controls = new OrbitControls(camera, renderer.domElement)
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

}




var cubic = {
    rotationX: 0,
    rotationY: 0
};



function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
    mainCube.update()
    TWEEN.update();

}

init();
animate();
