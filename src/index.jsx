import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Suspense } from 'react'
import { PositionalAudio} from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))


root.render(
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 4, 1, 8 ]
        }}
    >
        <Suspense>
            <Experience />
        </Suspense>
        {/* <PositionalAudio  url="./beat.mp3" distance={3}  position={[3.169, 0.772, 2.07] } /> */}
    </Canvas>
)