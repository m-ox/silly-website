import React, { useState, useEffect } from 'react';

function Header({}) {
    const [list, setList] = useState([])

    useEffect(() => {
    }, []);

    return (
        <div className="header">
            mox's silly pet game
        </div>
    );
}

export default Header;