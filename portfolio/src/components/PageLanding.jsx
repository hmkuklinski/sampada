import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function PageLanding() {
    const typedRef = useRef(null);

    useEffect(() => {
        const typedStrings = ["Sampada Acharya", "An Amazing Person", "A Leader", "An Innovative Researcher"];
        const typed = new Typed(typedRef.current, {
            strings: typedStrings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="page-landing">
            <div className="landing-information">
                <div className="landing-header">
                    <h1>
                        I'm <span ref={typedRef}></span>
                    </h1>
                </div>
                <div className="landing-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi aliquid fugit minima impedit doloremque amet repudiandae perferendis tempora, recusandae iure delectus neque voluptate consequatur, odio architecto omnis, fuga obcaecati?
                </div>
                <div className="landing-keywords">
                    <b>Keywords: </b> keyword, keyword, keyword, keyword
                </div>
                
            </div>
        </div>
    );
}
