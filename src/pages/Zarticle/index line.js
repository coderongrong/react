// import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { useEffect, useRef } from 'react';
import * as THREE from 'three'

function Zarticle() {

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(500, 500);
    

    const camera = new THREE.PerspectiveCamera(45, 500 / 500, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();
    const material = new THREE.LineBasicMaterial( { color: 'red' } );
    const points = [];
    
    points.push( new THREE.Vector3( - 10, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 10, 0 ) );
    points.push( new THREE.Vector3( 10, 0, 0 ) );
    points.push( new THREE.Vector3( -10, -10, 0 ) );
    // points.push( new THREE.Vector3( -10, 0, 0 ) );
    
    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    const line = new THREE.Line( geometry, material );

    scene.add( line );
    renderer.render( scene, camera );

    const box = useRef()
    useEffect(() => {
        box.current.appendChild(renderer.domElement);
    })
    return (
        <>
            Zarticle...
            <div style={{ width: '300px', height: '300px' }} ref={box}></div>
        </>
    )
}

export default Zarticle