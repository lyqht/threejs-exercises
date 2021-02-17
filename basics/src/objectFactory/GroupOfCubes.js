import * as THREE from "three";

const GroupOfCubes = (scene) => {
    const group = new THREE.Group();
    group.scale.y = 2;
    group.rotation.y = 0.2;
    scene.add(group);

    const cube1 = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    cube1.position.x = -1.5;
    group.add(cube1);

    const cube2 = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    cube2.position.x = 0;
    group.add(cube2);

    const cube3 = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    cube3.position.x = 1.5;
    group.add(cube3);
    return group;
};

export default GroupOfCubes;
