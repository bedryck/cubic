import * as THREE from 'three';
import './style.css';
import OrbitControls from 'three-orbitcontrols';
import mainCube from './cubeInit'


import Vue from 'vue'
import app from './App.vue'

new Vue({
    el: '#app',
    render: h => h(app)
})

let camera, scene, renderer;



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

var test = {
    foo() { console.log('foo') },
    bar() { console.log('bar') },
    baz() { console.log('baz') }
}

export default test
