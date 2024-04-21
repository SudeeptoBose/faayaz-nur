
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, useVideoTexture } from '@react-three/drei'
import *  as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { easing } from 'maath'

export function Model(props) {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF('/faayaz1.glb')
	const { actions } = useAnimations(animations, group)
	const videoTexture = useVideoTexture('/faayaz.mp4')
	const videoTexture2 = useVideoTexture('/faayaz2.mp4')
	const videoTexture3 = useVideoTexture('/faayaz3.mp4')
	
	videoTexture.flipY = false
	videoTexture2.flipY = false
	videoTexture3.flipY = false
	
	const newMaterial = new THREE.MeshBasicMaterial({
		map:videoTexture
	})
	
	const newMaterial2 = new THREE.MeshBasicMaterial({
		map:videoTexture2
	})  
	
	const newMaterial3 = new THREE.MeshBasicMaterial({
		map:videoTexture3
	})
	
	useEffect(() => {
		const getAnimation = actions.sit
		getAnimation.play()
	},[])
	

	const {camera} = useThree() 
	const newLookAtPosition = {
		x:0,
		y:0,
		z:0
	}
	const selectObject = (e) =>
	{
		e.stopPropagation()

		console.log(e.object.position, e.object.name)
		console.log(newLookAtPosition)
		newLookAtPosition.x = e.object.position.x
		newLookAtPosition.y = e.object.position.y
		newLookAtPosition.z = e.object.position.z
		console.log(newLookAtPosition)
	}

	useFrame((state, delta)=>{
		// easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta)
		state.camera.lookAt(newLookAtPosition.x, newLookAtPosition.y, newLookAtPosition.z)
	})
	return (
		<group ref={group} {...props} dispose={null}>
		<group name="Scene">
		<mesh
		onClick={selectObject}
		name="Plane"
		castShadow
		receiveShadow
		geometry={nodes.Plane.geometry}
		material={materials['Material.001']}
		scale={[17.894, 9.893, 9.893]}
		isMesh = {false}
		/>
		<mesh
		onClick={selectObject}
		name="Cube"
		castShadow
		receiveShadow
		geometry={nodes.Cube.geometry}
		material={materials.black}
		position={[-2.461, 0.755, -2.258]}
		/>
		<mesh
		onClick={selectObject}
		name="Cube001"
		castShadow
		receiveShadow
		geometry={nodes.Cube001.geometry}
		material={materials.black}
		position={[2.547, 0.755, -2.258]}
		scale={0.665}
		/>
		<mesh
		onClick={selectObject}
		name="Cube002"
		castShadow
		receiveShadow
		geometry={nodes.Cube002.geometry}
		material={materials.black}
		position={[2.547, 2.468, -2.258]}
		scale={0.665}
		/>
		<group name="Armature" rotation={[Math.PI / 2, 0, Math.PI]} scale={0.01}>
		<skinnedMesh
		name="WhiteClown"
		geometry={nodes.WhiteClown.geometry}
		material={materials.WhiteClown_material}
		skeleton={nodes.WhiteClown.skeleton}
		/>
		<primitive object={nodes.mixamorigHips} />
		</group>
		<mesh
		onClick={selectObject}
		name="Cube003"
		castShadow
		receiveShadow
		geometry={nodes.Cube003.geometry}
		material={nodes.Cube003.material}
		position={[0, 0.445, 0.236]}
		scale={[0.352, 0.073, 0.201]}
		/>
		<mesh
		onClick={selectObject}
		name="Cube005"
		castShadow
		receiveShadow
		geometry={nodes.Cube005.geometry}
		material={materials.black}
		position={[-3.49, 0, 1.18]}
		scale={0.094}
		/>
		<mesh
		onClick={selectObject}
		name="Cube006"
		castShadow
		receiveShadow
		geometry={nodes.Cube006.geometry}
		material={materials.black}
		position={[4.104, 0, 0.167]}
		scale={0.094}
		/>
		<mesh
		onClick={selectObject}
		name="Cube007"
		castShadow
		receiveShadow
		geometry={nodes.Cube007.geometry}
		material={materials.black}
		position={[5.046, 0, 0.608]}
		scale={0.094}
		/>
		<mesh
		onClick={selectObject}
		name="NurbsPath"
		castShadow
		receiveShadow
		geometry={nodes.NurbsPath.geometry}
		material={nodes.NurbsPath.material}
		position={[0, 1.453, 0.257]}
		/>
		<mesh
		onClick={selectObject}
		name="NurbsPath001"
		castShadow
		receiveShadow
		geometry={nodes.NurbsPath001.geometry}
		material={nodes.NurbsPath001.material}
		/>
		<mesh
		onClick={selectObject}
		name="NurbsPath002"
		castShadow
		receiveShadow
		geometry={nodes.NurbsPath002.geometry}
		material={nodes.NurbsPath002.material}
		/>
		<mesh
		onClick={selectObject}
		name="screen"
		castShadow
		receiveShadow
		geometry={nodes.screen.geometry}
		material={newMaterial2}
		position={[-2.461, 0.755, -2.258]}
		/>
		<mesh
		onClick={selectObject}
		name="screen001"
		castShadow
		receiveShadow
		geometry={nodes.screen001.geometry}
		material={newMaterial3}
		position={[2.547, 2.468, -2.258]}
		scale={0.665}
		/>
		<mesh
		onClick={selectObject}
		name="screen002"
		castShadow
		receiveShadow
		geometry={nodes.screen002.geometry}
		material={newMaterial}
		position={[2.547, 0.755, -2.258]}
		scale={0.665}
		/>
		</group>
		</group>
		)
	}
	
	useGLTF.preload('/faayaz1.glb')