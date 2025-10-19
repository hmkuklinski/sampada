export default function Cert({imgsrc, name, id}){
    return (
        <div className="cert-container" id={`cert-${id}`}>
            <img src={imgsrc} alt={name} />
        </div>
    );
}