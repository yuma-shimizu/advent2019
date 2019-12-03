import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>AdventCalnder2019</h1>
                <p>こんにちは、19日担当の平川です。<br />今回は私がお勧めするフロントエンド技術3選を紹介します。</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('intro') }}>GATSBY JS</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('work') }}>フロントエンド2</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('about') }}>フロントエンド3</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
