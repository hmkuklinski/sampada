export default function InProgressProject({title,description}){
    return (
        <div className="project-container">
            <div className="project-content">
                <div className="project-title">
                    <h2>{title}</h2>
                </div>
                <div className="project-info">
                    <div className="project-text">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}