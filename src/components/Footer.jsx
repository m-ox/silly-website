import React, { useState, useEffect } from 'react';
import GitHubSvg from '../assets/github-mark/githubsvg';

function Footer({}) {
    const [year, setYear] = useState(new Date().getFullYear())

    useEffect(() => {
    }, []);

    return (
        <div className="footer">
            Copyright © {year}. All rights reserved - Made by m-ox
            <a href="https://github.com/m-ox" target="_blank" className="footer_nav-link">
                <GitHubSvg />
            </a>
        </div>
    );
}

export default Footer;