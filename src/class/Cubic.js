import * as THREE from 'three';


class Cubic {
    constructor(color, position) {
        this.color = color;
        this.position = position;
        this.geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        this.material = new THREE.MeshBasicMaterial({ color: 0xffffff, vertexColors: THREE.FaceColors });
        this.mesh = new THREE.Mesh(this.geometry, this.material)

        this.geometry.faces[0].color.setHex(0x00228B22) // green right
        this.geometry.faces[1].color.setHex(0x00228B22)

        this.geometry.faces[2].color.setHex(0x00ffffff) // white left
        this.geometry.faces[3].color.setHex(0x00ffffff)

        this.geometry.faces[4].color.setHex(0x00B22222) // red under
        this.geometry.faces[5].color.setHex(0x00B22222)

        this.geometry.faces[6].color.setHex(0x00FFFF00) // yellow bottom
        this.geometry.faces[7].color.setHex(0x00FFFF00)

        this.geometry.faces[8].color.setHex(0x006495ED) // blue front 
        this.geometry.faces[9].color.setHex(0x006495ED)

        this.geometry.faces[10].color.setHex(0x00FFA500) // orange back
        this.geometry.faces[11].color.setHex(0x00FFA500)
        this.mesh.position.set(...position);

    }


    get cube() {
        return this.mesh
    };

}
export default Cubic;