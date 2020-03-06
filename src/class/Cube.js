import * as THREE from 'three';
import Cubic from './Cubic';
import * as colors from '../colors/colors';
import TWEEN from '@tweenjs/tween.js';

class Cube {
    constructor() {
        this.position = 0.117;
        this.startRotatePOsition = { r: 0 }
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

        this.frontGroup = new THREE.Object3D();
        this.frontTween = new TWEEN.Tween(this.startRotatePOsition).to({ r: Math.PI / 2 }, 2000);

        this.frontTween.onUpdate(() => {
            this.frontGroup.rotation.z = this.startRotatePOsition.r
        });

        this.frontTween.onComplete(()=>{
            this.frontRotate
        })

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

    frontRotate() {
        this.frontGroup.attach(this.c0)
        this.frontGroup.attach(this.c1)
        this.frontGroup.attach(this.c2)
        this.frontGroup.attach(this.c9)
        this.frontGroup.attach(this.c10)
        this.frontGroup.attach(this.c11)
        this.frontGroup.attach(this.c18)
        this.frontGroup.attach(this.c19)
        this.frontGroup.attach(this.c20)
        this.frontTween.start()


    }
}

export default Cube;