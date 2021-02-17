import * as THREE from "three";

const BasicCube = (scene) => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: "blue" });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(2, 3, 5);
    scene.add(mesh);
    return mesh;
};

export default BasicCube;
