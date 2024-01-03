import React from "react";
import cellphone from "./images/cellphone.png"
import email from "./images/email.png"
import "./style.css";

export default function Contact(props){
    return (
        <div className="contact-card">
            <img src={props.img} alt="cute cat"/>
            <h3 className="catname">{props.name}</h3>
            <div className="info-group">
                <img src={cellphone} alt="cell phone" className="cellphone"/>
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={email} alt="email"  className="email" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}