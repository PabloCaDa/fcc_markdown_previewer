import React from 'react'

const footerStyle = {
    backgroundColor: 'var(--main-secondary-color)',
    color: '#f2f2f2',
    padding: '10px 20px',
    textAlign: 'center',
    height:'10vh'
}

const Footer = () => {
  return (
    <div className="color-trans" style={footerStyle}>
      <h4>Created by <i className="far fa-copyright"></i> Pablo Cabrera Darias</h4>
    </div>
  )
}

export default Footer
