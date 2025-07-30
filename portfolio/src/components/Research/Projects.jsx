import Layout from "../Layout";
import Project from "./Project";
import MyHeader from "../MyHeader";
import { sampadaProjects, sampadaUpcoming, allProjects } from "../../sampadaInfo";
import { useState, useEffect} from "react";

export default function Projects(){

    const [keywords, setKeywords] = useState("");
    const [showError, setShowError] = useState(false);
    const [isFiltering, setIsFiltering] = useState(false);
    // const [showSearch, setShowSearch]= useState(false);
    const [showX, setShowX] = useState(false);

    //check to see if keywords input is deleted:
    useEffect(() => {
        if (keywords === "") {
            setIsFiltering(false); //show default projects selection
            setShowError(false);
        }
        else{
            setShowX(true);
        }
    }, [keywords]);
   
    //check to see if the keyword enters matches tag or info
    const validateSearch = () =>{
        setIsFiltering(true);
        const filtered = allProjects.filter(project =>
            project.tags.toLowerCase().includes(keywords.toLowerCase()) ||
            project.info.toLowerCase().includes(keywords.toLowerCase())
        );
        //show error if there are no matching terms:
        if (keywords && filtered.length === 0) {
            setShowError(true);
        } else {
            setShowError(false);
        }
    }

    //reset all the states!
    const handleReset = () => {
        setKeywords("");
        setIsFiltering(false);
        setShowError(false);
        setShowX(false);
    };

    //if keyword is in tags or in description, add to filtered projects
    //if not, leave filteredProjects as an empty array
    const filteredProjects = keywords ? allProjects.filter(project =>
            project.tags.toLowerCase().includes(keywords.toLowerCase()) ||
            project.info.toLowerCase().includes(keywords.toLowerCase())
        ): [];


    //shows all projects, divided into completed and in progress, with headers!
    let defaultPageInfo = (
        <div className="page-container">

            <div className="current-projects">
                <MyHeader title="Completed Projects" id="projects-header" />
                <div className="current-content">
                    {sampadaProjects.map((project)=>(
                        <Project photo={project.photo} title={project.id} description={project.info} link={project.link} subtitle={project.subtitle} tags={project.tags}/>
                    ))}
                </div>
            </div>

            <div className="current-projects">
                <MyHeader title="Upcoming Projects" id="upcoming-header" />
                <div className="current-content">
                    {sampadaUpcoming.map((project)=>(
                        <Project photo={project.photo} title={project.id} description={project.info} link={project.link} subtitle={project.subtitle} tags={project.tags}/>
                    ))}
                </div>
            </div>
            
        </div>
    );

    //shows only the filtered results based on keywords:
    let filteredResults = (
        <div className="page-container">
             <div className="current-content">
                {filteredProjects.map((project)=>(
                    <Project photo={project.photo} title={project.id} description={project.info} link={project.link} subtitle={project.subtitle} tags={project.tags}/>
                ))}
            </div>
        </div>
    );

    //the error message that will display if no keywords match:
    let errorMessage = (
        <div className="error-container">
            <div className="error-header">
                <h2>No Matches Found</h2>
            </div>
            <div className="error-text">
                <p>
                    There are no projects that match your search entry. 
                    Please try again.
                </p>
            </div>
            <div className="error-button" onClick={handleReset}>
                X
            </div>
        </div>
    );

    //has the search input, search button, and reset button for project search:
    let searchOption = (
        <div className="search-option">
            <div className="search-input">
                <input type="text" placeholder="Search projects..." value={keywords} onChange={(e) => setKeywords(e.target.value)} 
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        validateSearch();
                        }
                }}/>
            </div>
            {showX && <div className="search-x" onClick={handleReset}>X</div>}
            
            <div className="search-button">
                <button onClick={validateSearch}><ion-icon name="search-outline"></ion-icon></button>
            </div>
        </div>
    );


    return (
        <Layout>
            {searchOption}

            {/* if the error message needs to be displayed, render errorMessage jsx */}
            {showError && errorMessage}

            {/* if there are filtering options and do not need error message --> show filtered results. otherwise, show default page info. */}
            {isFiltering && !showError ? filteredResults : defaultPageInfo}
        </Layout>
    );
}