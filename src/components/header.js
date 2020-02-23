import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css';

const Header = ({siteTitle}) => (
    <header>
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <span className='ribbon'></span>
            <h1 className="logo" style={{margin: 0}}>
                <Link to="/">
                    {siteTitle}
                </Link>
            </h1>
            <p className='tagline'>Fullstack Developer / Artist / Designer</p>
            <p className='mini-intro'>The is the eponymous online home of Wasif Hyder</p>
            <p className='mini-intro'>The blog is coming soon</p>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
