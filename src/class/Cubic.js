import * as THREE from 'three';

const standartColors = {
    right: 0x00228B22,
    left: 0x006495ED,
    under: 0x00FFFF00,
    down: 0x00ffffff,
    front: 0x00B22222,
    back: 0x00FFA500
}

class Cubic {
    constructor(colors = standartColors, position, groups) {
        this.widthBetween = 0.117;
        this.rotatePosition = position;
        this.colors = colors;
        this.position = [position[0] * this.widthBetween, position[1] * this.widthBetween, position[2] * this.widthBetween];
        this.groups = groups;
        this.geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        this.material = new THREE.MeshPhongMaterial({ color: 0xffffff, vertexColors: THREE.FaceColors });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.rotatePosition = position;


        this.geometry.faces[0].color.setHex(this.colors.right) // green right
        this.geometry.faces[1].color.setHex(this.colors.right)

        this.geometry.faces[2].color.setHex(this.colors.left) // white left
        this.geometry.faces[3].color.setHex(this.colors.left)

        this.geometry.faces[4].color.setHex(this.colors.under) // red under
        this.geometry.faces[5].color.setHex(this.colors.under)

        this.geometry.faces[6].color.setHex(this.colors.down) // yellow down
        this.geometry.faces[7].color.setHex(this.colors.down)

        this.geometry.faces[8].color.setHex(this.colors.front) // blue front 
        this.geometry.faces[9].color.setHex(this.colors.front)

        this.geometry.faces[10].color.setHex(this.colors.back) // orange back
        this.geometry.faces[11].color.setHex(this.colors.back)

        this.mesh.position.set(...this.position);

    }

    rotate = (side, direction) => {
        console.log(side, direction);
        console.log('--groups--', this.groups);
        if (direction) {
            switch (side) {
                case 'front':

                    break;

                default:
                    break;
            }
        }
    }

    get cube() {
        return this.mesh
    };

    rotatePos = (value) => {
        this.rotatePosition = value;
        this.mesh.rotatePosition = value;
    }

}
export default Cubic;