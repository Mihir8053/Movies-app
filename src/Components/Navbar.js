import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../logo.png"

export default class Navbar extends Component {
    render() {
        return (
            <div className="pl-12 flex space-x-8 items-center py-4">
                <img className="w-[50px] md:w-[60px]" src={Logo} />
                <Link to="/" className='text-blue-400 font-bold text-xl md:text-3xl ' ><h1>Movies App</h1></Link>
                <Link to="/favourites" className='text-blue-400 font-bold text-xl md:text-3xl'><h2>Favourites</h2></Link> 
            </div>
            
        )
    }
}