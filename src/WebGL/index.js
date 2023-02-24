import * as THREE from 'three'
import { useRef, useEffect } from 'react'
function App() {
    const box = useRef()

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2)

    useEffect(() => {
        box.current.appendChild(renderer.domElement)
    })
    return <div ref={box}></div>
}
export default App
