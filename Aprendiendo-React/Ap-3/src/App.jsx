import { useEffect, useState } from "react"

const FollowMouse = ()=> {
  const [enabled, setEnablaed] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })


  useEffect(()=> {
    console.log('efecto' , {enabled})
    const handleMover = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled){
      window.addEventListener('pointermove', handleMover)
    }

    //getEventListener(windon) para ver los eventos q se ejecutan
    //siempre limpiar los eventos para desactivarlos y llamarlos multiples veces

    return () => {
      removeEventListener('pointermove', handleMover)
    }
  }, [enabled])

  return(
    <>
    <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
    <button onClick={()=> setEnablaed(!enabled)}>
      {enabled ? 'Desactivar' : 'Activar'} seguir puntero
    </button>
    </>
  )
}


function App() {
  return (
  <>
    <FollowMouse/>
  </>
  )
}

export default App
