export default function NewsEntry({title, date, prev, linkText, intro, after, funding, imgLeft, imgRight, article, linkedIn }){
    return(
       <div className="project-container" id="all-news">
            <div className="project-images">
                {/* <div className="project-image-left">
                    <img src={imgLeft} alt={title} />
                </div>
                <div className="project-image-right">
                    <img src={imgRight} alt={title} />
                </div> */}
            </div>
            <div className="project-content" id ="news-content">
                <div className="project-title">
                    <h2>{title}</h2>
                    <p>{date}</p>
                </div>
                <div className="project-info">
                    <div className="project-text">
                        {intro}
                        <a href={article} target="_blank" rel="noopener nonreferrer">{linkText}</a>
                        {after}
                        {prev}
                        <br></br>
                        {funding}
                    </div>
                </div>
            </div>
       </div> 
    );
}