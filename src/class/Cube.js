import * as THREE from 'three';
import Cubic from './Cubic';
import * as colors from '../colors/colors';
import TWEEN from '@tweenjs/tween.js';

class Cube {
    constructor() {
        this.position = 0.117;

        this.g90 = Math.PI / 2;
        this.rotationSpeed = 1000;

        this.c0 = new Cubic(colors.lwrb1, [-this.position, -this.position, this.position]).cube;
        this.c1 = new Cubic(colors.lwr2, [0, -this.position, this.position]).cube;
        this.c2 = new Cubic(colors.lwrg3, [this.position, -this.position, this.position]).cube;
        this.c3 = new Cubic(colors.lwb4, [-this.position, -this.position, 0]).cube;
        this.c4 = new Cubic(colors.lw5, [0, -this.position, 0]).cube;
        this.c5 = new Cubic(colors.lwg6, [this.position, -this.position, 0]).cube;
        this.c6 = new Cubic(colors.lwbo7, [-this.position, -this.position, -this.position]).cube;
        this.c7 = new Cubic(colors.lwo8, [0, -this.position, -this.position]).cube;
        this.c8 = new Cubic(colors.lwog9, [this.position, -this.position, -this.position]).cube;
        this.c9 = new Cubic(colors.mrb10, [-this.position, 0, this.position]).cube;

        this.c10 = new Cubic(colors.mr11, [0, 0, this.position]).cube;
        this.c11 = new Cubic(colors.mrg12, [this.position, 0, this.position]).cube;
        this.c12 = new Cubic(colors.mrb13, [-this.position, 0, 0]).cube;
        this.c13 = new Cubic(colors.m14, [0, 0, 0]).cube;
        this.c14 = new Cubic(colors.mg15, [this.position, 0, 0]).cube;
        this.c15 = new Cubic(colors.mbo16, [-this.position, 0, -this.position]).cube;
        this.c16 = new Cubic(colors.mo17, [0, 0, -this.position]).cube;
        this.c17 = new Cubic(colors.mog18, [this.position, 0, -this.position]).cube;
        this.c18 = new Cubic(colors.uyrb19, [-this.position, this.position, this.position]).cube;
        this.c19 = new Cubic(colors.uyr20, [0, this.position, this.position]).cube;
        this.c20 = new Cubic(colors.uyrg21, [this.position, this.position, this.position]).cube;

        this.c21 = new Cubic(colors.uyb22, [-this.position, this.position, 0]).cube;
        this.c22 = new Cubic(colors.uy23, [0, this.position, 0]).cube;
        this.c23 = new Cubic(colors.uyg24, [this.position, this.position, 0]).cube;
        this.c24 = new Cubic(colors.uybo25, [-this.position, this.position, -this.position]).cube;
        this.c25 = new Cubic(colors.uyo26, [0, this.position, -this.position]).cube;
        this.c26 = new Cubic(colors.uyog27, [this.position, this.position, -this.position]).cube;
        this.allGroup = new THREE.Group();

        this.frontGroupZ = new THREE.Object3D();
        this.middleGroupZ = new THREE.Object3D();
        this.backGroupZ = new THREE.Object3D();

        this.frontGroupX = new THREE.Object3D();
        this.middleGroupX = new THREE.Object3D();
        this.backGroupX = new THREE.Object3D();

        this.frontGroupY = new THREE.Object3D();
        this.middleGroupY = new THREE.Object3D();
        this.backGroupY = new THREE.Object3D();


    }

    get cube() {
        for (let index = 0; index < 27; index++) {
            this.allGroup.add(this['c' + index])
        }
        return this.allGroup;
    }

    update() {
        TWEEN.update();
    }



    frontRotateZ(direction = 1) {
        this.frontGroupZ.attach(this.c0)
        this.frontGroupZ.attach(this.c1)
        this.frontGroupZ.attach(this.c2)
        this.frontGroupZ.attach(this.c9)
        this.frontGroupZ.attach(this.c10)
        this.frontGroupZ.attach(this.c11)
        this.frontGroupZ.attach(this.c18)
        this.frontGroupZ.attach(this.c19)
        this.frontGroupZ.attach(this.c20)

        const frontTween = new TWEEN.Tween(this.frontGroupZ.rotation).to({ z: this.frontGroupZ.rotation.z + this.g90 * direction }, this.rotationSpeed);
        frontTween.start()
    }

    middleRotateZ(direction = 1) {
        this.middleGroupZ.attach(this.c3)
        this.middleGroupZ.attach(this.c4)
        this.middleGroupZ.attach(this.c5)
        this.middleGroupZ.attach(this.c12)
        this.middleGroupZ.attach(this.c13)
        this.middleGroupZ.attach(this.c14)
        this.middleGroupZ.attach(this.c21)
        this.middleGroupZ.attach(this.c22)
        this.middleGroupZ.attach(this.c23)

        const frontTween = new TWEEN.Tween(this.middleGroupZ.rotation).to({ z: this.middleGroupZ.rotation.z + this.g90 * direction }, this.rotationSpeed);
        frontTween.start()
    }

    backRotateZ(direction = 1) {
        this.backGroupZ.attach(this.c6)
        this.backGroupZ.attach(this.c7)
        this.backGroupZ.attach(this.c8)
        this.backGroupZ.attach(this.c15)
        this.backGroupZ.attach(this.c16)
        this.backGroupZ.attach(this.c17)
        this.backGroupZ.attach(this.c24)
        this.backGroupZ.attach(this.c25)
        this.backGroupZ.attach(this.c26)

        const frontTween = new TWEEN.Tween(this.backGroupZ.rotation).to({ z: this.backGroupZ.rotation.z + this.g90 * direction }, this.rotationSpeed);
        frontTween.start()
    }






    frontRotateX(direction = 1) {
        this.frontGroupX.attach(this.c2)
        this.frontGroupX.attach(this.c5)
        this.frontGroupX.attach(this.c8)
        this.frontGroupX.attach(this.c11)
        this.frontGroupX.attach(this.c14)
        this.frontGroupX.attach(this.c17)
        this.frontGroupX.attach(this.c20)
        this.frontGroupX.attach(this.c23)
        this.frontGroupX.attach(this.c26)

        const frontTween = new TWEEN.Tween(this.frontGroupX.rotation).to({ x: this.frontGroupX.rotation.x + this.g90 * direction }, this.rotationSpeed);
        frontTween.start()
    }

    middleRotateX(direction = 1) {
        this.middleGroupX.attach(this.c1)
        this.middleGroupX.attach(this.c4)
        this.middleGroupX.attach(this.c7)
        this.middleGroupX.attach(this.c10)
        this.middleGroupX.attach(this.c13)
        this.middleGroupX.attach(this.c16)
        this.middleGroupX.attach(this.c19)
        this.middleGroupX.attach(this.c22)
        this.middleGroupX.attach(this.c25)

        const frontTween = new TWEEN.Tween(this.middleGroupX.rotation).to({ x: this.middleGroupX.rotation.x + this.g90 * direction }, this.rotationSpeed);
        frontTween.start()
    }

    backRotateX(direction = 1) {
        this.backGroupX.attach(this.c0)
        this.backGroupX.attach(this.c3)
        this.backGroupX.attach(this.c6)
        this.backGroupX.attach(this.c9)
        this.backGroupX.attach(this.c12)
        this.backGroupX.attach(this.c15)
        this.backGroupX.attach(this.c18)
        this.backGroupX.attach(this.c21)
        this.backGroupX.attach(this.c24)

        const frontTween = new TWEEN.Tween(this.backGroupX.rotation).to({ x: this.backGroupX.rotation.x + this.g90 * direction }, this.rotationSpeed);
        frontTween.start()
    }




    frontRotateY(direction = 1) {
        this.frontGroupY.attach(this.c18)
        this.frontGroupY.attach(this.c19)
        this.frontGroupY.attach(this.c20)
        this.frontGroupY.attach(this.c23)
        this.frontGroupY.attach(this.c22)
        this.frontGroupY.attach(this.c21)
        this.frontGroupY.attach(this.c26)
        this.frontGroupY.attach(this.c25)
        this.frontGroupY.attach(this.c24)

        const frontTween = new TWEEN.Tween(this.frontGroupY.rotation).to({ y: this.frontGroupY.rotation.y + this.g90 * direction }, this.rotationSpeed);
        frontTween.start()
    }

    middleRotateY(direction = 1) {
        this.middleGroupY.attach(this.c9)
        this.middleGroupY.attach(this.c10)
        this.middleGroupY.attach(this.c11)
        this.middleGroupY.attach(this.c12)
        this.middleGroupY.attach(this.c13)
        this.middleGroupY.attach(this.c14)
        this.middleGroupY.attach(this.c15)
        this.middleGroupY.attach(this.c16)
        this.middleGroupY.attach(this.c17)

        const frontTween = new TWEEN.Tween(this.middleGroupY.rotation).to({ y: this.middleGroupY.rotation.y + this.g90 * direction }, this.rotationSpeed);
        frontTween.start()
    }

    backRotateY(direction = 1) {
        this.backGroupY.attach(this.c0)
        this.backGroupY.attach(this.c1)
        this.backGroupY.attach(this.c2)
        this.backGroupY.attach(this.c3)
        this.backGroupY.attach(this.c4)
        this.backGroupY.attach(this.c5)
        this.backGroupY.attach(this.c6)
        this.backGroupY.attach(this.c7)
        this.backGroupY.attach(this.c8)

        const frontTween = new TWEEN.Tween(this.backGroupY.rotation).to({ y: this.backGroupY.rotation.y + this.g90 * direction }, this.rotationSpeed);
        frontTween.start()
    }



}

export default Cube;

//TO DO check group position rotate and add pi/2 to current positiont for rotation such get method