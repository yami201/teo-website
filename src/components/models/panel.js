import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { MeshBasicMaterial, Vector2 } from "three";
import { useRef, useState } from "react";
const Panel = () => {
  const { camera } = useThree()
  const [panelRotation,setPanelRotation] = useState({
    x :1.371  ,
    y :0.345  ,
    z :-0.6  ,
  })
  const ref = useRef()
  const result = useLoader(GLTFLoader,'/gltf/solarpanel.glb',loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/gltf/draco/')
    loader.setDRACOLoader(dracoLoader)
  })
  const frameMaterial = new MeshBasicMaterial({color:'white'})
  const panelBarsMaterial = new MeshBasicMaterial({color:'yellow'})
  const panelMaterial = new MeshBasicMaterial({
    color: 'darkblue',
    transparent:true,
    opacity: 0.2,
  })
  const panelSmallBarsMaterial = new MeshBasicMaterial({
    color: 'white',
    transparent:true,
    opacity: 0.6,
  })
  useFrame(({clock : { elapsedTime}}) => 
    ref.current.position.y = Math.sin(elapsedTime * 2) * 0.05)
  window.addEventListener('mousemove',({clientX,clientY}) => {
    const mouse = new Vector2()

    mouse.x = clientX / window.innerWidth * 2 - 1
    mouse.y = -(clientY / window.innerHeight * 2 - 1)

    camera.position.x = - mouse.x * 0.05
    camera.position.y = - mouse.y * 0.05
  })
  return (
    <group rotation={[panelRotation.x,panelRotation.y,panelRotation.z]} scale={[1.2,1.2,1.2]} ref={ref}>
      <mesh geometry={result.nodes.frame.geometry} material={frameMaterial}/>
      <mesh geometry={result.nodes.panelBack.geometry} material={panelMaterial}/>
      <mesh geometry={result.nodes.panelCells.geometry} material={panelBarsMaterial}/>
      <mesh geometry={result.nodes.panelSmallBars.geometry} material={panelSmallBarsMaterial} />
      <mesh geometry={result.nodes.panelBarrs.geometry} material={panelBarsMaterial}/>
    </group>
  )
}
export default Panel;