import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({currentPage, setPage}) {
    const [list, setList] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        setList(generateList())
    }, []);

    const navigatePage = (page) => {
        setPage(page)
        if (page === 'home') {
            navigate('/')
        } else {
            navigate(`/${page}`)
        }
    }
    
    const activeStyles = {fontWeight: '900' };
    const pageList = ['home', 'about'];
    const generateList = () => pageList
        .map(page => {
            const active = currentPage === page && activeStyles;
            return (
                <a
                    key={page}
                    className="navbar__navlink"
                    style={active ? activeStyles:{}}
                    onClick={() => navigatePage(page)}
                >
                    {page}
                </a>
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