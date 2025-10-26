import { highlightAward } from "../../sampadaInfo";
import MyHeader from "../MyHeader";
export default function HighlightedAward({isMobile}){
    const sectDivider = <MyHeader title=" " id="highlight-header" />;
    
    return (
        <div className="highlighted-award">
            <div className="highlight-img">
                <img src={highlightAward.imgsrc} alt={highlightAward.id} />
            </div>
            <div className="highlight-content">
                <div className="highlight-info">
                    <div className="highlight-title">
                        <h2>{highlightAward.title}</h2>
                    </div>
                    <div className="highlight-subtitle">
                        <h4>{highlightAward.subtitle}</h4>
                    </div>
                    <div className="project-link" id="highlight-links">
                        <div className="project-link-div">
                            <a href={highlightAward.presentation} target="_blank" rel="noopener noreferrer">Thesis<ion-icon name="chevron-forward-outline"></ion-icon></a>
                        </div>
                        <div className="project-link-div">
                            <a href={highlightAward.ceremony} target="_blank" rel="noopener noreferrer">Ceremony<ion-icon name="chevron-forward-outline"></ion-icon></a>
                        </div>
                    </div>
                    <div className="highlight-desc">
                        <p>{highlightAward.desc}</p>
                    </div>
                    
                </div>
                {!isMobile && sectDivider}
                <div className="highlight-section">
                    {highlightAward.awards.map((award)=>(
                        <div className="highlight-mini">
                            <div className="mini-title">
                                <h3>{award.title}</h3>
                            </div>
                            <div className="mini-desc">
                                <p>{award.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}