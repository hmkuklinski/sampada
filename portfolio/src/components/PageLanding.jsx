import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { sampadaTripleAwards } from '../sampadaInfo';
import MiniAward from './MiniAward';

export default function PageLanding({isSingle}) {
     const typedRef = useRef(null);
    useEffect(() => {
        if (isSingle && typedRef.current) {
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
    }, [isSingle]);

    const typedHeader =(
        <div className="landing-header">
            <h1>
                I'm <span ref={typedRef}></span>
            </h1>
        </div>
    );

    const landingText = (
        <div className="landing-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi aliquid fugit minima impedit doloremque amet repudiandae perferendis tempora, recusandae iure delectus neque voluptate consequatur, odio architecto omnis, fuga obcaecati?
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

    const landingTriple = (
        <div className="landing-content">
            {sampadaTripleAwards.map((award)=>(
                <MiniAward title={award.title} subtitle={award.subtitle} text={award.description} />
            ))}
        </div>
    );

    if (isSingle){
        return (
            <div className="page-landing">
                {landingInfo}
            </div>
        );
    }
    return (
        <div className="page-landing">
            {landingTriple}
        </div>
    );
}
