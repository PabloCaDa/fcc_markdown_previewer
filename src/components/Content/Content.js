import React from 'react'

import Editor from './Editor/Editor'
import Previewer from './Previewer/Previewer';


const placeholder= 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
    - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

const contentStyle = {
    backgroundColor: 'var(--main-bg-color)',
    color: 'var(--main-text-color)',
    minHeight:'80vh'
    
}

class Content extends React.Component {
    state = {
        markdown: placeholder
        
    }

    handleChange = (e) => {
        const markdown = e.target.value;
        this.setState({markdown})
        
    }

    // markdown = () => {
    //     return marked.Renderer(this.state.markdown)
    // }


    render(){
        return (
          <div className="container-fluid d-flex flex-column align-items-center" style={contentStyle}>
              <Editor handleChange={this.handleChange} markdown={this.state.markdown}/>
              <Previewer markdown={this.state.markdown}/>
          </div>
        )
    }
}

export default Content
