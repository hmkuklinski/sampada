import Layout from "./Layout";
import Project from "./Project";
import { sampadaPublications, sampadaUpcomingPublications } from "../sampadaInfo";
import InProgress from "./InProgress";
export default function Publications(){
    let defaultPageInfo = (
        <div className="page-container">
            <div className="current-projects">
                <div className="header-wrapper">
                    <h3 className="header-text">My Publications</h3>
                    <div className="underline">
                        <span className="circle"></span>
                    </div>
                </div>
                <div className="current-content">
                    {sampadaPublications.map((project)=>(
                        <Project photo={project.photo} title={project.id} description={project.info} link={project.link} subtitle={project.subtitle} tags={project.tags} status={project.status}/>
                    ))}
                </div>
            </div>
            <div className="current-projects">
                <div className="header-wrapper">
                    <h3 className="header-text">In Preparation</h3>
                    <div className="underline">
                        <span className="circle"></span>
                    </div>
                </div>
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