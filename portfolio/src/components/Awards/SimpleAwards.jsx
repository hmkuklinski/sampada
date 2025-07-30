export default function SimpleAwards(props){
    return (
        <div className="project-container" id="simple-awards">
            <div className="project-content">
                <div className="project-title">
                    <h2>{props.name}</h2>
                </div>
                <div className="project-subtitle">
                    <h4>
                        {props.subtitle}
                    </h4>
                </div>
                <div className="project-info">
                    <div className="project-text">
                        {props.desc}
                    </div>
                </div>
            </div>
        </div>
    );
}