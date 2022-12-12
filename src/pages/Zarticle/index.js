// import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { useEffect, useRef } from 'react';
import * as THREE from 'three'

function Zarticle() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 300);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( 300, 300 );
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5

    renderer.render(scene, camera);

    // animate();
    const box = useRef()
    useEffect(() => {
        box.current.appendChild(renderer.domElement);
        // animate()
    })
    return (
        <>
            Zarticle...
            <div style={{ width: '300px', height: '300px' }} ref={box}></div>
        </>
    )
}

export default Zarticle