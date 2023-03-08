import {useState} from 'react'
import Modal from './modalAddTeam'

const DIV_BUTTON_STYLE = {
  position: 'relative',
  zIndex:1
}
const CONTENT_STYLE =  {
  background: 'red',
  padding: '20px',
  zIndex: 2
}
function Mostrar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <Modal open = {isOpen} close = { () => setIsOpen(false)} >Contenido dentro del modal / Content inside of the modal</Modal>
       <div style = {DIV_BUTTON_STYLE}>
         <button onClick = {() => setIsOpen(true) }>Abrir modal / Open modal</button>
       </div>
       <div style = {CONTENT_STYLE}>
         Otro contenido / Other content
       </div>
    </>
    )
}
export default Mostrar;