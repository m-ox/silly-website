import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import clickSfx from '../assets/sounds/selection.wav'

function Navbar({currentPage, setPage}) {
    const [list, setList] = useState([])
    const clickSound = new Audio(clickSfx);

    useEffect(() => {
        setList(generateList())
    }, []);

    const onClick = () => {
        clickSound.play();
    }
    
    const activeStyles = {fontWeight: '900' };
    const pageList = ['home', 'about'];
    const generateList = () => pageList
        .map(page => {
            const active = currentPage === page && activeStyles;
            return (
                <Link
                    key={page}
                    className="navbar__navlink"
                    style={active ? activeStyles:{}}
                    onClick={() => onClick()}
                    to={`/${page !== 'home'? page:''}`}
                >
                    {page}
                </Link>
            )
        })

    return (
        <div className="navbar-container">
            <div className="navbar">
                {list}
            </div>
        </div>
    );
}

export default Navbar;