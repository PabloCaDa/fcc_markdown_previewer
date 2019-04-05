import React from 'react'

import Editor from './Editor/Editor'
import Previewer from './Previewer/Previewer';

import { PLACEHOLDER } from '../../constants'

const contentStyle = {
    backgroundColor: 'var(--main-bg-color)',
    color: 'var(--main-text-color)',
    minHeight:'80vh'
    
}

class Content extends React.Component {
    state = {
        markdown: PLACEHOLDER,
        editorFull: false,
        previewerFull: false
        
    }

    handleChange = (e) => {
        const markdown = e.target.value;
        this.setState({markdown})
        
    }

    toggleEditorFull = () => {
        this.setState({editorFull: !this.state.editorFull})
    }
    
    togglePreviewerFull = () => {
        this.setState({previewerFull: !this.state.previewerFull})
    }

    render(){
        return (
            <div className="container-fluid d-flex flex-column align-items-center" style={contentStyle}>
                {!this.state.previewerFull &&
                <Editor
                    handleChange={this.handleChange}
                    markdown={this.state.markdown}
                    toggleEditorFull={this.toggleEditorFull}
                    editorFull={this.state.editorFull}
                />
                }
                
                {!this.state.editorFull &&
                <Previewer
                    markdown={this.state.markdown}
                    togglePreviewerFull={this.togglePreviewerFull}
                    previewerFull={this.state.previewerFull}
                />
                }
            </div>
        
        )
    }
}

export default Content
