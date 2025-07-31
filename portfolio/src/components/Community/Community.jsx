import Layout from "../Layout";
import PageLanding from "./PageLanding";
import BlogEntry from "./BlogEntry";
import MyHeader from "../MyHeader";
import { leadershipArticles, conferences, mediaMentions } from "../../sampadaInfo";
import {useEffect, useState} from "react";

export default function Community(){
    const [twitterLoaded, setTwitterLoaded] = useState(false);

    useEffect(() => {
        // If window.instgrm is available (script loaded), parse the embed
        if (window.instgrm && window.instgrm.Embeds && typeof window.instgrm.Embeds.process === 'function') {
            window.instgrm.Embeds.process();
        }
        // Twitter embed processing and loading detection
        if (window.twttr && window.twttr.widgets && typeof window.twttr.widgets.load === 'function') {
            window.twttr.widgets.load();

            const interval = setInterval(() => {
                const twitterIframe = document.querySelector('.twitter-tweet iframe');
                if (twitterIframe) {
                    setTwitterLoaded(true);
                    clearInterval(interval);
                }
            }, 300);

            return () => clearInterval(interval); // clean up
        }
    }, []);

    //for my headings:
    const leadershipHeading = <MyHeader title="Leadership" id="leadership-header" />;
    const conferencesHeading = <MyHeader title="Conferences" id="conferences" />;
    const mediaHeading = <MyHeader title="Media Mentions" id="media" />
    const articleHeading = <MyHeader title="Featured Articles" id="articles" />;
    

    //different blog sections
    const leadershipBlog = (
        <div className="blog-container">
            {leadershipArticles.map((lead)=>(
                <BlogEntry {...lead}/>
            ))}
        </div>
    );

    const conferenceBlog = (
        <div className="blog-container">
            {conferences.map((lead)=>(
                <BlogEntry {...lead}/>
            ))}
        </div>
    );

    const articleBlog = (
        <div className="blog-container">
            {mediaMentions.map((lead)=>(
                <BlogEntry {...lead}/>
            ))}
        </div>
    );

    const twitterEmbed = (
    <div className="embed-container">
        {!twitterLoaded && <div className="loader">Loading ...</div>}
        <div style={{ display: twitterLoaded ? "block" : "none" }}>
            <blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">
                    Join Sampada Acharya of @CMU_Mech at <a href="https://twitter.com/CMUEngineering?ref_src=twsrc%5Etfw">@CMUEngineering</a> as she presents her <a href="https://twitter.com/hashtag/ThreeMinuteThesis?src=hash&amp;ref_src=twsrc%5Etfw">#ThreeMinuteThesis</a> to <a href="https://twitter.com/CarnegieMellon?ref_src=twsrc%5Etfw">@CarnegieMellon</a> at the 2024 <a href="https://twitter.com/hashtag/3MTCMU?src=hash&amp;ref_src=twsrc%5Etfw">#3MTCMU</a> championship. Watch at Simmons Auditorium A in <a href="https://twitter.com/teppercmu?ref_src=twsrc%5Etfw">@TepperCMU</a> or via livestream on March 14th at 6pm. Register to attend: <a href="https://t.co/5BTvaBL8c2">https://t.co/5BTvaBL8c2</a> <a href="https://t.co/XLD3uBw7JC">pic.twitter.com/XLD3uBw7JC</a>
                </p>
                &mdash; CMU Libraries (@CMULibraries) <a href="https://twitter.com/CMULibraries/status/1765770954116874589?ref_src=twsrc%5Etfw">March 7, 2024</a>
            </blockquote>
        </div>
    </div>
);

    const instaEmbed = (
        <div className="embed-container">
             <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/p/C35bMbLLr63/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: 0,
                    width: "calc(100% - 2px)",
                }}
            />
        </div>
    );

    const linkedinEmbed= (
        <div className="embed-container">
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7166099839708041217" height="850" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
        </div>
    );

    const mediaEmbeds = (
        <div className="media-container">
            {linkedinEmbed} 
            {instaEmbed}
            {twitterEmbed}
        </div>
    );

    const leadershipContent = (
        <div className="community-div">
            {leadershipHeading}
            {leadershipBlog}
        </div>
    );

    const conferencesContent = (
        <div className="community-div">
            {conferencesHeading}
            {conferenceBlog}
        </div>
    );
    const articleContent = (
        <div className="community-div">
            {articleHeading}
            {articleBlog}
        </div>
    );

    const mediaContent = (
        <div style={{ display: twitterLoaded ? "block" : "none" }} className="community-div">
            
            {mediaEmbeds}
        </div>
    );
    return (
        <Layout>
            <div className="page-container">
                {leadershipContent}
                <PageLanding />
                {conferencesContent}
                {articleContent}
                
                {mediaHeading}
                {mediaContent}
            </div>
        </Layout>
    );
}