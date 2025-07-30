export default function MyHeader({title, id}){
    return (
        <div className="header-wrapper" id={id}>
            <h3 className="header-text">{title}</h3>
            <div className="underline">
                <span className="circle"></span>
            </div>
        </div>
    );
}