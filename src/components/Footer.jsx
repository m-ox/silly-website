import React, { useState, useEffect } from 'react';

function Footer({}) {
    const [list, setList] = useState([])

    useEffect(() => {
    }, []);

    return (
        <div className="footer">
            This is a footer
        </div>
    );
}

export default Footer;