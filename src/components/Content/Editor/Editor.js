import React from 'react'
import './Editor.css'
import Toolbar from '../../Toolbar/Toolbar';

const Editor = (props) => {
  return (
    <div className={`editor__container ${props.editorFull? 'maximized':''}`} >
        <Toolbar
          title="Editor"
          toggleFullScreen={props.toggleEditorFull}
          fullScreen={props.editorFull}
        />
        <textarea
          name="editorText"
          id="editor" value={props.markdown}
          className="editor__textarea"
          onChange={props.handleChange}
        >
        </textarea>
    </div>
  )
}

export default Editor
