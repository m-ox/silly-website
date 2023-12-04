import React, { useState, useEffect } from 'react';

function Header({}) {
    const [list, setList] = useState([])

    useEffect(() => {
    }, []);

    return (
        <div className="header">
            Welcome to my website!
        </div>
    );
}

export default Header;