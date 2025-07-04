export default function MiniAward({title, subtitle, text}){
    const headerDiv = (
        <div className="mini-award-header">
            <h2>{title}</h2>
        </div>
    );
    const subtitleDiv= (
        <div className="mini-award-subtitle">
            <h5>{subtitle}</h5>
        </div>
    );
    const awardText = (
        <div className="mini-award-text">
            <p>{text}</p>
        </div>
    );

    return (
        <div className="mini-award-container">
            {headerDiv}
            {subtitleDiv}
            {awardText}
        </div>
    );
}