import { PositionalAudio, BakeShadows, Float, OrbitControls, Sky, Text, Environment, MeshReflectorMaterial } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Model } from './Model'
import { Suspense } from 'react'
import { Leva, useControls } from 'leva'


export default function Experience()
{

    // const { sunPosition } = useControls('sky', {
    //     sunPosition: { value: [ 2.0, 1.2, 3.0 ] }
    // })

    // const { textColor } = useControls('textColor',{
    //     textColor:{
    //         value: '#217474'
    //     }
    // })

    // const { lightColor } = useControls('lightColor',{
    //     lightColor:{
    //         value: '#8bc8d3'
    //     }
    // })

    return <>
        <Perf position='top-left' />
        {/* <Environment preset='night' background blur={1}/> */}

        <BakeShadows/>
        
        {/* <OrbitControls 
            makeDefault
            enablePan={false}
            enableDamping={true}
            enableZoom={false}
            maxPolarAngle={Math.PI/2}
            mixAzimuthAngle={0.5}
        /> */}

        <directionalLight 
            castShadow
            position={ [ 3, 8, 4 ] }
            intensity={ 4.5 }
            shadow-camera-far= {50}
            shadow-camera-top= {10}
            shadow-camera-right= {10}
            shadow-camera-bottom= {-10}
            shadow-camera-left= {-10}
            shadow-mapSize={ [ 2048, 2048 ] }
            shadow-normalBias={0.04}
        />

        <ambientLight intensity={0.5 } />

        <mesh receiveShadow position-y={ -2 } rotation-x={ - Math.PI * 0.5 } scale={ 200 } >
            <planeGeometry />
            <MeshReflectorMaterial 
            color={'#1b1b1b'}
            resolution={1024}
            blur={[0.5,0.5]}
            mixBlur={0.5}

            />
        </mesh>

        <Model position-y ={ -2 }/>


    </>
}