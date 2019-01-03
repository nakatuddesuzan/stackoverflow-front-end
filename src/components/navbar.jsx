import React from 'react';



const navBar = () =>(
    <div className = "topnav" >
        <a className = "active" to="index">Home</a>
        <a href="about">About</a>
        <div className = "right">
            <a href="login">Log in</a>
            <a href="signup">signup</a>
            <input type = "text" name = "search" placeholder="search....."/>
        </div>
    </div>
)
 export default navBar;