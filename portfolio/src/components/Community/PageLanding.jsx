import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function PageLanding({text=null}) {
     const typedRef = useRef(null);
    useEffect(() => {
        if (typedRef.current) {
            const typedStrings = [
                "Sampada Acharya",
                "An Amazing Person",
                "A Leader",
                "An Innovative Researcher"
            ];
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
        }
    }, []);

    const typedHeader =(
        <div className="landing-header">
            <h1>
                I'm <span ref={typedRef}></span>
            </h1>
        </div>
    );

    const landingText = (
        <div className="landing-text">
            {text && text}
            {!text && "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi aliquid fugit minima impedit doloremque amet repudiandae perferendis tempora, recusandae iure delectus neque voluptate consequatur, odio architecto omnis, fuga obcaecati?"}
        </div>
    );


    const landingKeywords = (
        <div className="landing-keywords">
            <b>Keywords: </b> keyword, keyword, keyword, keyword
        </div>
    );

    const landingInfo = (
        <div className="page-landing">
            <div className="landing-information">
                {typedHeader}
                {landingText}
                {landingKeywords}
            </div>
        </div>
    );

    return (
        <div className="page-landing">
            {landingInfo}
        </div>
    );
}
