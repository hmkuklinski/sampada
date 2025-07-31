import Layout from "../Layout";
import PageLanding from "./PageLanding";
import BlogEntry from "./BlogEntry";
import MyHeader from "../MyHeader";
import { leadershipArticles, conferences } from "../../sampadaInfo";
export default function Community(){
    
    //for my headings:
    const leadershipHeading = <MyHeader title="Leadership" id="leadership-header" />;
    const conferencesHeading = <MyHeader title="Conferences" id="conferences" />;
    

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

    return (
        <Layout>
            <div className="page-container">
                {leadershipHeading}
                {leadershipBlog} 
                <PageLanding />
                {conferencesHeading}
                {conferenceBlog}
            </div>
        </Layout>
    );
}