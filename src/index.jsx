import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Suspense } from 'react'
import { Loader, PositionalAudio} from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))


root.render(
    <>
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 4, 1, 8 ]
            }}
        >
            <Suspense fallback={null}>
                <Experience />
            </Suspense>
        </Canvas>
        <Loader/>
    </>
)