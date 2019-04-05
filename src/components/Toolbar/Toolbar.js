import React from 'react'
import './Toolbar.css'

const Toolbar = (props) => {
  return (
    <div className="toolbar">
        <i class="fab fa-free-code-camp mr-2"></i>
            {props.title}
        <i className={`${!props.fullScreen? 'fas fa-expand-arrows-alt':'fas fa-compress-arrows-alt'} fullScreen__icon`} 
            onClick={props.toggleFullScreen}>
        </i>
    </div>
  )
}

export default Toolbar