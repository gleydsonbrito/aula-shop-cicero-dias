import React from "react";

import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

import "./styles.css"

export default function Filter(){
    return(
        <nav className="navigation">
            <div className="filter-container">
                <input 
                className="input-price" />
                
                <input 
                className="input-price"/>
                <button className="btn-filter">Filtrar por preço</button>
            </div>
            <div className="order-container">
                <label className="ordering-label">Menor preço</label>
                <BsFillArrowDownSquareFill className="ordering-icon" color="#FFF"/>
                <label className="ordering-label">Maior Preço</label>
                <BsFillArrowUpSquareFill className="ordering-icon" color="#FFF"/>
                
            </div>
        </nav>
    );
}