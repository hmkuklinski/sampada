import { highlightAward } from "../../sampadaInfo";
import MyHeader from "../MyHeader";
export default function HighlightedAward({isMobile}){
    const sectDivider = <MyHeader title=" " id="highlight-header" />;

    const threeDisplay = (
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
    );

    const awardLinks= (
        <div className="project-link" id="highlight-links">
            <div className="project-link-div">
                <a href={highlightAward.presentation} target="_blank" rel="noopener noreferrer">Presentation<ion-icon name="chevron-forward-outline"></ion-icon></a>
            </div>
            <div className="project-link-div">
                <a href={highlightAward.ceremony} target="_blank" rel="noopener noreferrer">Ceremony<ion-icon name="chevron-forward-outline"></ion-icon></a>
            </div>
            <div className="project-link-div">
                <a href={highlightAward.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ion-icon name="chevron-forward-outline"></ion-icon></a>
            </div>
        </div>
    );

    const awardTitle= (
        <div className="highlight-title">
            <h2>{highlightAward.title}</h2>
        </div>
    );
    const awardSubtitle = (
        <div className="highlight-subtitle">
            <h4>{highlightAward.subtitle}</h4>
        </div>
    );

    const awardDesc = (
        <div className="highlight-desc">
            <p>{highlightAward.desc}</p>
        </div>
    );

    const awardImg= (
        <div className="highlight-img">
            <img src={highlightAward.imgsrc} alt={highlightAward.id} />
            {/* {!isMobile && awardLinks} */}
        </div>
    );

    const fullDisplay = (
        <div className="highlighted-award">
            {awardImg}
            <div className="highlight-content">
                <div className="highlight-info">
                    {awardTitle}
                    {awardSubtitle}
                    {awardDesc}{awardLinks}
                </div>
                {sectDivider}
                {threeDisplay}
                
            </div>
        </div>
    );

    const mobileDisplay= (
        <div className="highlighted-award">
            <div className="highlight-content">
                <div className="highlight-info">
                    {awardTitle}
                    {awardSubtitle}
                    {awardLinks}
                    {awardImg}
                    {awardDesc}
                </div>
                {threeDisplay}
            </div>
        </div>
    );
    
    return (<>{isMobile? mobileDisplay: fullDisplay}</>);
}