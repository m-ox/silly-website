import React, { useState, useEffect } from 'react';
import aboutPicture from '../assets/aboutpicture.png';

function About() {
    return (
        <div className="about">
            <div className="about__left">
                <div className="about__left-content">
                    <img src={aboutPicture} alt="mox picture"/>
                </div>
            </div>
            <div className="about__right">
                <div className="about__right-content">
                    <h2>Who are you?</h2>
                    <p>Don't worry about it.</p>
                    <h2>What does any of this mean?</h2>
                    <p>I'm having fun.</p>
                    <h2>Why now?</h2>
                    <p>Realized I never did.</p>
                    <h2>Why didn't you before?</h2>
                    <p>I'd just make excuses, honestly.</p>
                    <h2>It's a bit ridiculous, isn't it?</h2>
                    <p>I think about that all the time, but if I never did anything because I felt embarassed I was too late, I wouldn't get to live at all.</p>
                    <h2>Unnecessarily pseudo-profound, but ok.</h2>
                    <p>That's who I am, you figured it out!</p>
                </div>
            </div>
        </div>
    );
}

export default About;