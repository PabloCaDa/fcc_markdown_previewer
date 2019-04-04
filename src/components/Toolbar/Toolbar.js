import React from 'react'
import './Toolbar.css'

const Toolbar = (props) => {
  return (
    <div className="toolbar">
        <i class="fab fa-free-code-camp mr-2"></i> 
            {props.title}
        <i className="fas fa-arrows-alt fullScreen__icon"></i>
    </div>
  )
}

export default Toolbar
