import React from 'react'

import QuoteBox from './QuoteBox/QuoteBox'

const contentStyle = {
    height:'80vh',
    backgroundColor: 'var(--main-bg-color)',
    color: 'var(--main-secondary-color)'
    
}

const Content = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-trans" style={contentStyle}>
      <QuoteBox></QuoteBox>
    </div>
  )
}

export default Content
