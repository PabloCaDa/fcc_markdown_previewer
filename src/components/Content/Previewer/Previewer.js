import React from 'react'
import './Previewer.css'
import marked from 'marked'
import Toolbar from '../../Toolbar/Toolbar';

marked.setOptions({
    breaks: true,
  });
  
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}" tilte=${title}>${text}</a>`;
  }

const Previewer = (props) => {
  return (
    <div className="prev__container">
        <Toolbar title="Previewer"/>
        <div id="preview" 
            dangerouslySetInnerHTML={{__html: marked(props.markdown, { renderer: renderer })}} 
            className="prev__screen">
        </div>
      
    </div>
  )
}

export default Previewer
