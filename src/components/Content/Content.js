import React from 'react'


const contentStyle = {
    height:'80vh',
    backgroundColor: 'var(--main-bg-color)',
    color: 'var(--main-secondary-color)'
    
}

const Content = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-trans" style={contentStyle}>
    Content
    </div>
  )
}

export default Content
