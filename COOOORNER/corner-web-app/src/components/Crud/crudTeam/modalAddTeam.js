import React from 'react'
export default function Modal({children, open, close}) {
    if(!open) return null
    return (
        <div>
          <div><button onClick={close}>x</button> </div>
          {children}
        </div>
    )
}