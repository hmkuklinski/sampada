import { sampadaName } from "../../sampadaInfo";
export default function InProgress({title, authors, noText=null}){
    return (
        <div className="project-container" id="publication-container">
            <div className="project-content">
                <div className="project-title">
                    <h2>{title}</h2>
                </div>
                <div className="project-subtitle">
                    <h4>
                        {authors.map((name, index) => (
                            <span key={index}>
                                {name === sampadaName ? <strong>{name}</strong> : name}
                                {index < authors.length - 1 && ', '}
                            </span>
                        ))}
                    </h4>
                </div>
                <div className="project-info">
                    {noText && (
                        <div className="project-text">
                            Coming Soon
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}