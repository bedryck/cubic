import * as THREE from 'three';
import './style.css';
import OrbitControls from 'three-orbitcontrols';
import mainCube from './cubeInit'


import Vue from 'vue'
import app from './App.vue'


import {
    frontRotateZ,
    middleRotateZ,
    backRotateZ,
    frontRotateX,
    middleRotateX,
    backRotateX,
    frontRotateY,
    middleRotateY,
    backRotateY,
} from './group/groups'

new Vue({
    el: '#app',
    render: h => h(app)
})

let camera, scene, renderer, controls;
const mouse = new THREE.Vector2()
const raycaster = new THREE.Raycaster();
const groups = {
    frontRotateZ,
    middleRotateZ,
    backRotateZ,
    frontRotateX,
    middleRotateX,
    backRotateX,
    frontRotateY,
    middleRotateY,
    backRotateY,
}

function init() {

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 10);
    camera.position.z = 0.8
    camera.position.y = 0.8
    camera.position.x = 0.8
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
    controls.enablePan = false


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


let startDrag, startArray = [], finishArray = [], allAllowGroup = [], direction, startIndex, finishIndex
const x = {
    vertical: { frontRotationZ: mainCube.frontRotateZ, middleRotationZ: mainCube.middleRotateZ, backRotationZ: mainCube.backRotateZ },
    horizontal: { frontRotationY: mainCube.frontRotateY, middleRotationY: mainCube.middleRotateY, backRotationY: mainCube.backRotateY },
}

const y = {
    vertical: { frontRotationX: mainCube.frontRotateX, middleRotationX: mainCube.middleRotateX, backRotationX: mainCube.backRotateX },
    horizontal: { frontRotationZ: mainCube.frontRotateZ, middleRotationZ: mainCube.middleRotateZ, backRotationZ: mainCube.backRotateZ },
}

const z = {
    vertical: { frontRotationX: mainCube.frontRotateX, middleRotationX: mainCube.middleRotateX, backRotationX: mainCube.backRotateX },
    horizontal: { frontRotationY: mainCube.frontRotateY, middleRotationY: mainCube.middleRotateY, backRotationY: mainCube.backRotateY },
}


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
                    startIndex = currentPosition

                }
            }
        }
    } else {

    }


}

function getDirection(start, end) {
    let direction;

    if (end > start) {
        direction = 1

    }

    if (end < start) {
        direction = -1
    }

    if (start == 0 && end == 2) {
        direction = -1
    }

    if (start == 2 && end == 0) {
        direction = 1
    }

    if (start == 0 && end == 1) {
        direction = -1
    }

    if (start == 1 && end == 0) {
        direction = 1
    }

    if (start == 3 && end == 1) {
        direction = 1
    }

    if (start == 2 && end == 1) {
        direction = 1
    }


    if (start == 1 && end == 3) {
        direction = -1
    }

    if (start == 1 && end == 2) {
        direction = -1
    }
    if (start == 6 && end == 7) {
        direction = -1
    }



    return direction || 1
}


function onDocumentMouseUp(event) {
    event.preventDefault();
    let currentMousePosition;

    var intersects = raycaster.intersectObjects(scene.children, true);


    if (intersects.length > 0) {




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
                    finishIndex = currentPosition
                }
            }
        }



        if (startArray[0] == finishArray[0]) {
            allAllowGroup.push(startArray[0])
        }
        if (startArray[1] == finishArray[1]) {
            allAllowGroup.push(startArray[1])


        }
        if (startArray[2] == finishArray[2]) {
            allAllowGroup.push(startArray[2])
        }


        if (Math.abs(startDrag.x - currentMousePosition.x) > Math.abs(startDrag.y - currentMousePosition.y)) {
            direction = ['horizontal', startDrag.x <= currentMousePosition.x ? -1 : 1]

        } else {
            direction = ['vertical', startDrag.y >= currentMousePosition.y ? 1 : -1]
        }

        if (Math.abs(intersects[0].point.x.toFixed(3)) == 0.167) {
            let side = allAllowGroup.find(element => element[element.length - 1] != "X")
            let correctDirection = intersects[0].point.x.toFixed(3) > 0 ? 1 : -1;

            if (direction[0] == 'vertical') {
                correctDirection = intersects[0].point.x.toFixed(3) < 0 ? 1 : -1;
            }
            if (direction[0] == 'horizontal' && correctDirection < 0) {
                correctDirection = intersects[0].point.x.toFixed(3) < 0 ? 1 : -1;
            }
            correctDirection *= direction[1]
            try {
                side && mainCube[side](correctDirection)


            } catch (error) {
                console.log(error)
            }


        }
        if (Math.abs(intersects[0].point.y.toFixed(3)) == 0.167) {
            let direction = getDirection(startIndex, finishIndex);

            let side = allAllowGroup.find(element => element[element.length - 1] != "Y")

            let correctDirection = intersects[0].point.y.toFixed(3) > 0 ? -1 : 1;

            correctDirection *= direction

            try {
                side && mainCube[side](correctDirection)
            } catch (error) {
                console.log(error)
            }
        }

        if (Math.abs(intersects[0].point.z.toFixed(3)) == 0.167) {

            let side = allAllowGroup.find(element => element[element.length - 1] != "Z")

            let correctDirection = intersects[0].point.z.toFixed(3) > 0 ? 1 : -1;
            if (direction[0] == 'horizontal' && correctDirection < 0) {
                correctDirection = intersects[0].point.z.toFixed(3) < 0 ? 1 : -1;
            }
            correctDirection *= direction[1]
            try {

                side && mainCube[side](correctDirection)
            } catch (error) {
            }

        }



    }

    allAllowGroup = [];
    startArray = [];
    finishArray = [];
    startIndex = null;
    finishIndex = null;
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

