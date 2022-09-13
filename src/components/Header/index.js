import React from "react";

import "./styles.css"
import logo from "../../assets/logo.png"

export default function Header(props) {
    return (
        <header className="header">
            <img className="logo" src={logo}/>
            <nav className="input-container">
                <input 
                className="search-input"
                placeholder="Buscar produto"
                value={props.value}
                onChange={props.onchange}/>
            </nav>
        </header>
    );
}