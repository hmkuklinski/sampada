export default function Cert({id, name, certPdf, obtained, expired, canExpire}){
    return (
        <div className="cert-container" id={`cert-${id}`}>
            <div className="cert-content">
                <div className="cert-title">
                    <h2>{name}</h2>
                </div>
                <div className="cert-subtitle" id="cert-sub">
                    <h4>Collaborative Institutitional Training Initiative</h4>
                    {canExpire && <h4>{obtained} -{expired} </h4>}
                    {!canExpire && <h4>{obtained}</h4>}
                </div>
                <div className="cert-link">
                        <div className="project-link-div">
                            <a href={certPdf} target="_blank" rel="noopener noreferrer">View Certificate<ion-icon name="chevron-forward-outline"></ion-icon></a>
                        </div>
                    </div>
            </div>
        </div>
    );
}