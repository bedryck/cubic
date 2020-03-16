import * as THREE from 'three';
import './style.css';
import OrbitControls from 'three-orbitcontrols';
import mainCube from './cubeInit'


import Vue from 'vue'
import app from './App.vue'


import {
    frontRotationZ,
    middleRotationZ,
    backRotationZ,
    frontRotationX,
    middleRotationX,
    backRotationX,
    frontRotationY,
    middleRotationY,
    backRotationY,
} from './group/groups'

new Vue({
    el: '#app',
    render: h => h(app)
})

let camera, scene, renderer, controls;
const mouse = new THREE.Vector2()
const raycaster = new THREE.Raycaster();
const groups = {
    frontRotationZ,
    middleRotationZ,
    backRotationZ,
    frontRotationX,
    middleRotationX,
    backRotationX,
    frontRotationY,
    middleRotationY,
    backRotationY,
}

function init() {

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 10);
    camera.position.z = 1.1
    camera.position.y = 1.1
    camera.position.x = 1.1
    scene = new THREE.Scene();

    const skyColor = 0xffffff
    const groundColor = 0xeeeeee;
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);



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


    // var geometry = new THREE.BoxGeometry();
    // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // var cube = new THREE.Mesh( geometry, material );
    // let allGroup = new THREE.Object3D();
    // allGroup.add(cube)
    // scene.add( allGroup );



    controls = new OrbitControls(camera, renderer.domElement)


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

var test = {
    foo() { console.log('foo') },
    bar() { console.log('bar') },
    baz() { console.log('baz') }
}

let startDrag, direction

function onDocumentMouseDown(event) {

    event.preventDefault();
    var intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        startDrag = intersects[0].uv;

        for (const key in groups) {
            if (groups.hasOwnProperty(key)) {
                const element = groups[key];
                let currentPosition = element.findIndex(element => JSON.stringify(element) == JSON.stringify(intersects[0].object.rotatePosition));
                if (currentPosition != -1) {
                    console.log(key)
                }
            }
        }
    }


}

function onDocumentMouseUp(event) {
    let currentMousePosition;
    event.preventDefault();
    var intersects = raycaster.intersectObjects(scene.children, true);
    console.log(intersects)


    if (intersects.length > 0) {
        currentMousePosition = intersects[0].uv;
        console.log(startDrag, currentMousePosition)
        if (startDrag.x <= currentMousePosition.x) {
            console.log('right')
        } else {
            console.log('left')
        }

        if (startDrag.y <= currentMousePosition.y) {
            console.log('top')
        } else {
            console.log('bot')
        }




        for (const key in groups) {
            if (groups.hasOwnProperty(key)) {
                const element = groups[key];
                let currentPosition = element.findIndex(element => JSON.stringify(element) == JSON.stringify(intersects[0].object.rotatePosition));
                if (currentPosition != -1) {
                    console.log(key)
                }
            }
        }
    } else {

    }
}

function onMouseMove(event) {

    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);



    var intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        controls.enabled = false;
    } else {
        controls.enabled = true;
    }

}
window.addEventListener('mousemove', onMouseMove, false);
document.addEventListener('mousedown', onDocumentMouseDown, false);
document.addEventListener('mouseup', onDocumentMouseUp, false);

export default test
