import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { sampadaLeadershipText } from '../../sampadaInfo';

export default function PageLanding() {
     const typedRef = useRef(null);
    useEffect(() => {
        if (typedRef.current) {
            const typedStrings = [
                "Sampada Acharya",
                // "Innovating through community"
                // "shaping communities that spark discovery and innovation. ",
                
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
            {sampadaLeadershipText}
        </div>
    );

    const landingInfo = (
        <div className="page-landing">
            <div className="landing-information">
                {typedHeader}
                {landingText}
            </div>
        </div>
    );

    return (
        <div className="page-landing">
            {landingInfo}
        </div>
    );
}
