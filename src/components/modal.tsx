import { useRef } from 'react'

export default function Modal({} : {}) {
  const ref = useRef();

  return <dialog 
    ref={ ref } 
    onCancel={} 
    className="modal"
    autoFocus
  >
    <h1>Hola</h1>
  </dialog>
}