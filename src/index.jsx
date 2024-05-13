import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Suspense, useRef, useLayoutEffect } from 'react'
import { Loader} from '@react-three/drei'
import { easing } from 'maath'
import Overlay from './component/Overlay.jsx'
import gsap from 'gsap'
import { duration } from '@mui/material'


const root = ReactDOM.createRoot(document.querySelector('#root'))

const CameraRig = () =>
{

    const cameraRef = useRef()
    const timelineRef = useRef()

    const currentState = useThree()
    const camera = currentState.camera
    // console.log(camera )

    useFrame((state, delta)=>{
        easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta)
        state.camera.lookAt(0, 0, 0)
        timelineRef.current.seek(timelineRef.current.duration())
    })

    useLayoutEffect(()=>{
        timelineRef.current = gsap.timeline()

        // Vertical animation
        timelineRef.current.from(
            camera.position,
            {
                duration:2,
                y: 10,
            },
            0
        )
    }, [])
}


root.render(
    <>
        <Canvas
            className="r3f"
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 4, 1, 8 ]
            }}
        >
            <color attach="background" args={['#191920']} />
            <fog attach="fog" args={['#191920', 10, 15]} />
            <Suspense fallback={null}>
                <Experience />
            </Suspense>
            <CameraRig/>
        </Canvas>
        <Overlay/>
        <Loader/>
    </>
)