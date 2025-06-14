export default function Project({photo, link, title, subtitle, description, tags, status}){
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
                    <h4>{subtitle}</h4>
                </div>
                <div className="project-info">
                    <div className="project-text">
                        {/* {description} */}
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam delectus molestias officia nulla iste tempora repellat ea alias laborum corrupti, voluptate ex rerum? Culpa quo alias ipsum? Accusantium, deleniti?</p>
                    </div>
                    <div className="project-link">
                        <a href={link}>Read More <ion-icon name="chevron-forward-outline"></ion-icon></a>
                    </div>

                    {/* <div className="project-status">
                        {status === "completed" && (
                            <div className="status-completed">
                                <b>Status: </b> Completed <ion-icon name="checkmark-outline"></ion-icon>
                            </div>
                        )}
                        {status === "incomplete" && (
                            <div className="status-incomplete">
                                <b>Status: </b> In Progress <ion-icon name="timer-outline"></ion-icon>
                            </div>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
    );
}