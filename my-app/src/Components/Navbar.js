import React from 'react'
import propTypes from 'prop-types'

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutTitle}</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>

                    </ul>
                    {/* Pallets for color mode */}
                    {/* <div className="d-flex" style={{ cursor: 'pointer' }}>
                        <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode('primary') }} style={{ height: '30px', width: '30px' }}></div>
                        <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode('success') }} style={{ height: '30px', width: '30px' }}></div>
                        <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode('warning') }} style={{ height: '30px', width: '30px' }}></div>
                        <div className="bg-secondary rounded mx-2" onClick={() => { props.toggleMode('secondary') }} style={{ height: '30px', width: '30px' }}></div>
                        <div className="bg-light rounded mx-2" onClick={() => { props.toggleMode('light') }} style={{ height: '30px', width: '30px', border: '1px solid black' }}></div>
                        <div className="bg-dark rounded mx-2" onClick={() => { props.toggleMode('dark') }} style={{ height: '30px', width: '30px', border: '1px solid white' }}></div>
                    </div> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'Dark' : 'light'} mx-3`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}


//  Titles should be defined in the required Data Types : string
Navbar.propTypes = {
    title: propTypes.string,
    aboutTitle: propTypes.string
}

// If no title is given
Navbar.defaultProps = {
    title: 'Enter title here',
    aboutTitle: 'Enter about title '
}