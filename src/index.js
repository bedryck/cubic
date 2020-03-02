import * as THREE from 'three';
import './style.css';

import * as dat from 'dat.gui';


let camera, scene, renderer, group;
let geometry, material, mesh;

class Cubiks {
    constructor(color, position) {
        this.color = color;
        this.position = position;
        this.geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        this.material = new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: THREE.FaceColors });
        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.geometry.faces[0].color.setHex(0x00228B22)
        this.geometry.faces[1].color.setHex(0x00228B22)

        this.geometry.faces[2].color.setHex(0x00ffffff)
        this.geometry.faces[3].color.setHex(0x00ffffff)

        this.geometry.faces[4].color.setHex(0x00B22222)
        this.geometry.faces[5].color.setHex(0x00B22222)

        this.geometry.faces[6].color.setHex(0x00FFFF00)
        this.geometry.faces[7].color.setHex(0x00FFFF00)

        this.geometry.faces[8].color.setHex(0x006495ED)
        this.geometry.faces[9].color.setHex(0x006495ED)

        this.geometry.faces[10].color.setHex(0x00FFA500)
        this.geometry.faces[11].color.setHex(0x00FFA500)
        this.mesh.position.set(...position);

    }


    get cube() {
        return this.mesh
    };

}




function init() {
    const position = 0.103;
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 10);

    group = new THREE.Group();
    scene = new THREE.Scene();


    for (let l = 0; l < 3; l++) {
        for (let k = 0; k < 3; k++) {
            for (let j = 0; j < 3; j++) {
                group.add(new Cubiks(0x00228B22, [k * position, j * position, position * l]).cube)
            }
        }
    }

    scene.add(group);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

}




const gui = new dat.GUI();




var cubic = {
    rotationX: 120,
    rotationY: 120,
    cameraZ: 1,
    cameraX: 0.2,
    cameraY: 0.2,
    rotationX: 0,
    rotationY: 0
};

gui.add(cubic, 'rotationX', 0, 360).step(0.01);
gui.add(cubic, 'rotationY', 0, 360).step(0.01);
gui.add(cubic, 'cameraZ', 0, 10).step(0.01);
gui.add(cubic, 'cameraX', 0, 1).step(0.01);
gui.add(cubic, 'cameraY', 0, 1).step(0.01);
gui.add(cubic, 'rotationX', 0, 3).step(0.01);
gui.add(cubic, 'rotationY', 0, 3).step(0.01);



function animate() {
    requestAnimationFrame(animate);

    camera.position.z = cubic.cameraZ;
    camera.position.x = cubic.cameraX;
    camera.position.y = cubic.cameraY;
    group.rotation.x = cubic.rotationX;
    group.rotation.y = cubic.rotationY;


    renderer.render(scene, camera);

}
init();

animate();
