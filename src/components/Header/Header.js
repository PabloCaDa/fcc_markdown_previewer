import React from 'react'

const headerStyle = {
    backgroundColor: 'var(--main-secondary-color)',
    color: '#f2f2f2',
    padding: '10px 20px',
    textAlign: 'center',
    height:'10vh',
    transition: 'color 2s'
}

const Header = () => {
  return (
    <nav style={headerStyle}>
        <h1>Quotes Machine</h1>
    </nav>
  )
}

export default Header
