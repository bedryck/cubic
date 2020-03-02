import * as THREE from 'three';
import './style.css';
import OrbitControls from 'three-orbitcontrols';
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
    camera.position.z = 1
    group = new THREE.Group();
    scene = new THREE.Scene();


    for (let l = 0; l < 3; l++) {
        for (let k = 0; k < 3; k++) {
            for (let j = 0; j < 3; j++) {
                let lm, km, jm;
                km = k
                lm = l
                jm = j
                if (k / 2 == 1) {
                    km = -1
                }
                if (l / 2 == 1) {
                    lm = -1
                }
                if (j / 2 == 1) {
                    jm = -1
                }

                group.add(new Cubiks(0x00228B22, [km * position, jm * position, position * lm]).cube)
            }
        }
    }

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
