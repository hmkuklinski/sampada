export default function BlogEntry(props){
    return (
        <div className="blog-post">
            <div className="blog-box">
                <div className="blog-img">
                    <img src={props.imgsrc} alt="Blog Post"></img>
                </div>
                <div className="blog-text">
                    <span>{props.date}</span>
                    <a target="_blank" rel="noreferrer" href={props.article} className="blog-title">{props.title}</a>
                    <div className="line"></div>
                    <p>{props.prev}</p>
                </div>
            </div>
        </div>
    );

}