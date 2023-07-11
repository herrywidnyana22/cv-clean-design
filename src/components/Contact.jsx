import { useState } from 'react'
import { contact } from './assets/data/data'
import clsx from 'clsx'
const Contact = () => {
  return (
    <div className='contact'>
    {
        contact && contact.map((data, i) =>(
            <div
                key={i} 
                className={clsx(`
                    icon
                    rounded`,
                )}
                style={{background: data.color}}
            >
                <img src={data.icon} alt={data.name} />
            </div>
        ))
    }
    </div>
  )
}

export default Contact