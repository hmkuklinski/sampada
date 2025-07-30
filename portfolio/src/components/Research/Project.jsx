import { sampadaName } from "../../sampadaInfo";
export default function Project({photo, link, title, subtitle, description}){
    const fullName = sampadaName;
    const nameParts = fullName.split(" "); // ["Sampada", "Acharya"]
    const firstLast = fullName;
    const lastFirst = `${nameParts[1]}, ${nameParts[0]}`; // "Acharya, Sampada"

    let parts;
    let matchedName;

    if (subtitle.includes(firstLast)) {
        parts = subtitle.split(firstLast);
        matchedName = firstLast;
    } else if (subtitle.includes(lastFirst)) {
        parts = subtitle.split(lastFirst);
        matchedName = lastFirst;
    }

    return (
        <div className="project-container">
            <div className="project-image">
                <img src={photo} alt={title} />
            </div>
            <div className="project-content">
                <div className="project-title">
                    <h2>{title}</h2>
                </div>
               <div className="project-subtitle">
                    <h4>
                        {matchedName ? (
                            <>
                                {parts[0]}
                                <strong>{matchedName}</strong>
                                {parts[1]}
                            </>
                        ) : (
                            subtitle
                        )}
                    </h4>
                </div>
                <div className="project-info">
                    <div className="project-text">
                        {description}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illum tempora sit quas omnis voluptates nemo expedita perspiciatis voluptatum maiores obcaecati eius magnam aut, molestiae ullam. Nihil laudantium debitis sed.</p>
                    </div>
                    <div className="project-link">
                        <a href={link} target="_blank" rel="noopener noreferrer">Read More <ion-icon name="chevron-forward-outline"></ion-icon></a>
                    </div>
                </div>
            </div>
        </div>
    );
}