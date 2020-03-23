import * as THREE from 'three';
import Cubic from './Cubic';
import * as colors from '../colors/colors';
import TWEEN from '@tweenjs/tween.js';

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
} from '../group/groups'


class Cube {
    constructor() {
        this.position = 1;

        this.g90 = Math.PI / 2;
        this.rotationSpeed = 500;

        this.c0 = new Cubic(colors.lwrb1, [-this.position, -this.position, this.position]);
        this.c1 = new Cubic(colors.lwr2, [0, -this.position, this.position]);
        this.c2 = new Cubic(colors.lwrg3, [this.position, -this.position, this.position]);
        this.c3 = new Cubic(colors.lwb4, [-this.position, -this.position, 0]);
        this.c4 = new Cubic(colors.lw5, [0, -this.position, 0]);
        this.c5 = new Cubic(colors.lwg6, [this.position, -this.position, 0]);
        this.c6 = new Cubic(colors.lwbo7, [-this.position, -this.position, -this.position]);
        this.c7 = new Cubic(colors.lwo8, [0, -this.position, -this.position]);
        this.c8 = new Cubic(colors.lwog9, [this.position, -this.position, -this.position]);

        this.c9 = new Cubic(colors.mrb10, [-this.position, 0, this.position]);
        this.c10 = new Cubic(colors.mr11, [0, 0, this.position]);
        this.c11 = new Cubic(colors.mrg12, [this.position, 0, this.position]);
        this.c12 = new Cubic(colors.mrb13, [-this.position, 0, 0]);
        this.c13 = new Cubic(colors.m14, [0, 0, 0]);
        this.c14 = new Cubic(colors.mg15, [this.position, 0, 0]);
        this.c15 = new Cubic(colors.mbo16, [-this.position, 0, -this.position]);
        this.c16 = new Cubic(colors.mo17, [0, 0, -this.position]);
        this.c17 = new Cubic(colors.mog18, [this.position, 0, -this.position]);

        this.c18 = new Cubic(colors.uyrb19, [-this.position, this.position, this.position]);
        this.c19 = new Cubic(colors.uyr20, [0, this.position, this.position]);
        this.c20 = new Cubic(colors.uyrg21, [this.position, this.position, this.position]);
        this.c21 = new Cubic(colors.uyb22, [-this.position, this.position, 0]);
        this.c22 = new Cubic(colors.uy23, [0, this.position, 0]);
        this.c23 = new Cubic(colors.uyg24, [this.position, this.position, 0]);
        this.c24 = new Cubic(colors.uybo25, [-this.position, this.position, -this.position]);
        this.c25 = new Cubic(colors.uyo26, [0, this.position, -this.position]);
        this.c26 = new Cubic(colors.uyog27, [this.position, this.position, -this.position]);
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
            this.allGroup.add(this['c' + index].cube)
        }
        return this.allGroup;
    }

    update() {
        TWEEN.update();
    }


    getNewPosition = (cube, array, direction) => {
        let currentPosition = array.findIndex(element => JSON.stringify(element) == JSON.stringify(cube.rotatePosition));
        currentPosition == -1 ? currentPosition = -10 : currentPosition;

        currentPosition += 2 * direction;
        currentPosition == -1 ? currentPosition = 7 : currentPosition;
        currentPosition == -2 ? currentPosition = 6 : currentPosition;
        currentPosition == 8 ? currentPosition = 0 : currentPosition;
        currentPosition == 9 ? currentPosition = 1 : currentPosition;


        return array[currentPosition];
    }

    frontRotateZ(direction = 1) {
        for (let index = 0; index < 27; index++) {
            if (this['c' + index].rotatePosition[2] === 1) {
                this.frontGroupZ.attach(this['c' + index].cube)

                let currentPosition = this.getNewPosition(this['c' + index], frontRotateZ, -direction)

                if (currentPosition) this['c' + index].rotatePos(currentPosition);

            }
        }


        const frontTween = new TWEEN.Tween(this.frontGroupZ.rotation).to({ z: this.frontGroupZ.rotation.z + this.g90 * direction}, this.rotationSpeed);
        frontTween.start()
        return new Promise((resolve) => {
            frontTween.onComplete(() => {
                resolve()
            });
        })
    }

    middleRotateZ(direction = 1) {

        for (let index = 0; index < 27; index++) {
            if (this['c' + index].rotatePosition[2] === 0) {
                this.middleGroupZ.attach(this['c' + index].cube)

                let currentPosition = this.getNewPosition(this['c' + index], middleRotateZ, -direction)

                if (currentPosition) this['c' + index].rotatePos(currentPosition);
            }
        }

        const frontTween = new TWEEN.Tween(this.middleGroupZ.rotation).to({ z: this.middleGroupZ.rotation.z + this.g90 * direction}, this.rotationSpeed);
        frontTween.start()

        return new Promise((resolve) => {
            frontTween.onComplete(() => {
                resolve()
            });
        })
    }

    backRotateZ(direction = 1) {

        for (let index = 0; index < 27; index++) {
            if (this['c' + index].rotatePosition[2] === -1) {
                this.backGroupZ.attach(this['c' + index].cube)

                let currentPosition = this.getNewPosition(this['c' + index], backRotateZ, -direction)

                if (currentPosition) this['c' + index].rotatePos(currentPosition);
            }
        }

        const frontTween = new TWEEN.Tween(this.backGroupZ.rotation).to({ z: this.backGroupZ.rotation.z + this.g90 * direction}, this.rotationSpeed);
        frontTween.start()

        return new Promise((resolve) => {
            frontTween.onComplete(() => {
                resolve()
            });
        })
    }



    frontRotateX(direction = 1) {

        for (let index = 0; index < 27; index++) {
            if (this['c' + index].rotatePosition[0] === 1) {
                this.frontGroupX.attach(this['c' + index].cube)

                let currentPosition = this.getNewPosition(this['c' + index], frontRotateX, direction)

                if (currentPosition) this['c' + index].rotatePos(currentPosition);
            }
        }

        const frontTween = new TWEEN.Tween(this.frontGroupX.rotation).to({ x: this.frontGroupX.rotation.x + this.g90 * direction * -1 }, this.rotationSpeed);
        frontTween.start()

        return new Promise((resolve) => {
            frontTween.onComplete(() => {
                resolve()
            });
        })
    }

    middleRotateX(direction = 1) {
        for (let index = 0; index < 27; index++) {
            if (this['c' + index].rotatePosition[0] === 0) {
                this.middleGroupX.attach(this['c' + index].cube)

                let currentPosition = this.getNewPosition(this['c' + index], middleRotateX, direction)

                if (currentPosition) this['c' + index].rotatePos(currentPosition);
            }
        }

        const frontTween = new TWEEN.Tween(this.middleGroupX.rotation).to({ x: this.middleGroupX.rotation.x + this.g90 * direction * -1 }, this.rotationSpeed);
        frontTween.start()

        return new Promise((resolve) => {
            frontTween.onComplete(() => {
                resolve()
            });
        })
    }

    backRotateX(direction = 1) {
        for (let index = 0; index < 27; index++) {
            if (this['c' + index].rotatePosition[0] === -1) {
                this.backGroupX.attach(this['c' + index].cube)

                let currentPosition = this.getNewPosition(this['c' + index], backRotateX, direction)

                if (currentPosition) this['c' + index].rotatePos(currentPosition);
            }
        }

        const frontTween = new TWEEN.Tween(this.backGroupX.rotation).to({ x: this.backGroupX.rotation.x + this.g90 * direction * -1 }, this.rotationSpeed);
        frontTween.start()

        return new Promise((resolve) => {
            frontTween.onComplete(() => {
                resolve()
            });
        })
    }




    frontRotateY(direction = 1) {
        for (let index = 0; index < 27; index++) {
            if (this['c' + index].rotatePosition[1] === 1) {
                this.frontGroupY.attach(this['c' + index].cube)

                let currentPosition = this.getNewPosition(this['c' + index], frontRotateY, direction)

                if (currentPosition) this['c' + index].rotatePos(currentPosition);
            }
        }

        const frontTween = new TWEEN.Tween(this.frontGroupY.rotation).to({ y: this.frontGroupY.rotation.y + this.g90 * direction * -1 }, this.rotationSpeed);
        frontTween.start()


        return new Promise((resolve) => {
            frontTween.onComplete(() => {
                resolve()
            });
        })
    }

    middleRotateY(direction = 1) {


        for (let index = 0; index < 27; index++) {
            if (this['c' + index].rotatePosition[1] === 0) {
                this.middleGroupY.attach(this['c' + index].cube)

                let currentPosition = this.getNewPosition(this['c' + index], middleRotateY, direction)

                if (currentPosition) this['c' + index].rotatePos(currentPosition);
            }
        }

        const frontTween = new TWEEN.Tween(this.middleGroupY.rotation).to({ y: this.middleGroupY.rotation.y + this.g90 * direction * -1 }, this.rotationSpeed);
        frontTween.start()

        return new Promise((resolve) => {
            frontTween.onComplete(() => {
                resolve()
            });
        })
    }

    backRotateY(direction = 1) {
        for (let index = 0; index < 27; index++) {
            if (this['c' + index].rotatePosition[1] === -1) {
                this.backGroupY.attach(this['c' + index].cube)

                let currentPosition = this.getNewPosition(this['c' + index], backRotateY, direction)

                if (currentPosition) this['c' + index].rotatePos(currentPosition);
            }
        }

        const frontTween = new TWEEN.Tween(this.backGroupY.rotation).to({ y: this.backGroupY.rotation.y + this.g90 * direction * -1 }, this.rotationSpeed);
        frontTween.start()

        return new Promise((resolve) => {
            frontTween.onComplete(() => {
                resolve()
            });
        })
    }



}

export default Cube;

//TO DO check group position rotate and add pi/2 to current positiont for rotation such get method