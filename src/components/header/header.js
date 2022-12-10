import React from "react";
import { BiCartAlt, BiUser } from "react-icons/bi";
import "./header.css";


export const Header = () => {
    return (
        <div className="header">
                <div className="header__ecommerce-title" >
                    Dudeshape
                </div>
                <nav className=" navigation">
                    <div className=" header__nav header__all">
                        All
                    </div>
                    <div className="header__nav  header__offers">
                        Offers
                    </div>
                    <div className="header__nav  header__about">
                        About
                    </div>
                    <div className="header__nav header__seacrh">
                        Search
                    </div>
                    <BiUser className="header__nav user__icon" />
                    <BiCartAlt className="header__nav cart__icon" />
                </nav>

        </div>
    )
}