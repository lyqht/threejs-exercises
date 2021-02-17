import "./style.css";
import * as THREE from "three";
import * as ObjectFactory from "./objectFactory";

const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();
const sizes = {
    width: 800,
    height: 600,
};

const addCamera = (scene) => {
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 3;
    scene.add(camera);
    return camera;
};

const initAnimation = () => {};

const initScene = () => {
    const cube = ObjectFactory.BasicCube(scene);
    const groupOfCubes = ObjectFactory.GroupOfCubes(scene);
    const camera = addCamera(scene);
    const renderer = new THREE.WebGLRenderer({
        canvas,
    });
    camera.lookAt(cube.position);
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);

    // Animation
    const clock = new THREE.Clock();

    const tick = () => {
        const elapsedTime = clock.getElapsedTime();
        cube.rotation.y += 0.01 * elapsedTime;
        cube.position.x = Math.cos(elapsedTime);
        cube.position.y = Math.sin(elapsedTime);
        camera.lookAt(cube.position);

        // Render
        renderer.render(scene, camera);

        // Call tick again on the next frame
        window.requestAnimationFrame(tick);
    };

    tick();
};

initScene();
