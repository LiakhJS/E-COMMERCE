import React from "react";
import { Button } from "../button/button";
import { Header } from "../header/header";
import "./home-page.css";


export const HomePage = () => {
    return (
        <div className="home-page__wrapper">
            <Header />
            <div className="home-page__inf">
                <div className="main-description">
                    Organic food help you fit & healthy
                </div>
                <div className="main-description__detailed">
                    It is a long established fact that a reader will be distracted by the readable content of
                    a page when looking at its layout. The point of using Lorem Ipsum.
                </div>
                <Button
                    type={'primary'} size="m" >{'SHOP NOW'}
                </Button>
            </div>

        </div>
    )
}

