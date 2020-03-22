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

let startDrag, startArray = [], finishArray = [], allAllowGroup = []

function onDocumentMouseDown(event) {
    event.preventDefault();

    var intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {

        startDrag = {
            x: event.clientX,
            y: event.clientY
        };

        for (const key in groups) {
            if (groups.hasOwnProperty(key)) {
                const element = groups[key];
                let currentPosition = element.findIndex(element => JSON.stringify(element) == JSON.stringify(intersects[0].object.rotatePosition));
                if (currentPosition != -1) {
                    startArray.push(key)
                }
            }
        }
    } else {

    }


}

function getRotate(key) {
    switch (key) {
        case "frontRotationZ":

            break;
        case "frontRotationX":

            break;
        case "frontRotationY":

            break;

        case "middleRotationZ":

            break;
        case "middleRotationX":

            break;
        case "middleRotationY":

            break;

        case "backRotationZ":

            break;
        case "backRotationX":

            break;
        case "backRotationY":

            break;


        default:
            break;
    }
}

function onDocumentMouseUp(event) {
    event.preventDefault();
    let currentMousePosition;

    var intersects = raycaster.intersectObjects(scene.children, true);


    if (intersects.length > 0) {

        console.log(intersects[0].point)

        currentMousePosition = {
            x: event.clientX,
            y: event.clientY
        }







        for (const key in groups) {
            if (groups.hasOwnProperty(key)) {
                const element = groups[key];
                let currentPosition = element.findIndex(element => JSON.stringify(element) == JSON.stringify(intersects[0].object.rotatePosition));
                if (currentPosition != -1) {
                    finishArray.push(key)

                }
            }
        }



        if (startArray[0] == finishArray[0]) {
            console.log(startArray[0])
            allAllowGroup.push(startArray[0])
        }
        if (startArray[1] == finishArray[1]) {
            console.log(startArray[1])
            allAllowGroup.push(startArray[1])


        }
        if (startArray[2] == finishArray[2]) {
            console.log(startArray[2])
            allAllowGroup.push(startArray[2])


        }


        if (Math.abs(startDrag.x - currentMousePosition.x) > Math.abs(startDrag.y - currentMousePosition.y)) {
            console.log('horizontal')
            let direction = startDrag.x <= currentMousePosition.x ? -1 : 1

        } else {
            console.log('vertical')
            console.log(camera)
            let direction = startDrag.y >= currentMousePosition.y ? 1 : -1

            const found = allAllowGroup.find(element => element == 'frontRotationX' || element == 'middleRotationX' || element == 'backRotationX');
            allAllowGroup = []
            startArray = []
            finishArray = []
            // mainCube[found](direction)

        }



    } else {

    }
}

function onMouseMove(event) {


    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
        controls.enableRotate = false;

    } else {

        controls.enableRotate = true;
    }

}
window.addEventListener('mousemove', onMouseMove, false);
document.addEventListener('mousedown', onDocumentMouseDown, false);
document.addEventListener('mouseup', onDocumentMouseUp, false);

export default test
