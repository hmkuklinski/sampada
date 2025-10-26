import Layout from "../Layout";
import Project from "./Project";
import { sampadaPublications, sampadaUpcomingPublications } from "../../sampadaInfo";
import InProgress from "./InProgress";
import MyHeader from "../MyHeader";

export default function Publications(){
    let defaultPageInfo = (
        <div className="page-container">

            <div className="current-projects">
                <MyHeader title="My Publications" id="publications-header" />
                <div className="current-content">
                    {sampadaPublications.map((project)=>(
                        <Project photo={project.photo} title={project.id} description={project.info} link={project.link} subtitle={project.subtitle} tags={project.tags} status={project.status} vidLink={project.vidLink} articleLink={project.articleLink}/>
                    ))}
                </div>
            </div>
                        
            <div className="current-projects">
                <MyHeader title="In Preparation" id="prep-pub-header" />
                <div className="current-content">
                    {sampadaUpcomingPublications.map((project)=>(
                        <InProgress title={project.id} authors={project.authors} description={project.info} />
                    ))}
                </div>
            </div>
            
        </div>
    );
    return (
        <Layout>
            <div className="page-container">
                {defaultPageInfo}
            </div>
        </Layout>
    );
}