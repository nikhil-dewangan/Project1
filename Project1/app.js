import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className = "header">
            
            
            <div className="logo-container">
                <img className = "logo" src="https://pics.craiyon.com/2023-05-30/af89e757b5b44b9e9888858b98817801.webp"/>
            </div>
            
            <div className ="nav-item">
                <ul>
                    <li>Home </li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
         </div>
    );
};




const AppLayout = () => {
    return (
        <div className = "app">
            <Header/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);