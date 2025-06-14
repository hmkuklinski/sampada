import Socials from './Socials';
import { sampadaName, sampadaPhotoPaths } from '../sampadaInfo';
export default function AboutLanding(){
    return (
        <div className="about-container">
            <div className="about-left">
               <div className="about-photo">
                    {/* sampadaPhotoPaths index 0 - headshot information */}
                    <img src={sampadaPhotoPaths[0].info} alt={sampadaPhotoPaths[0].id} />
                </div> 
            </div>
            
            <div className="about-information">
                <div className="about-heading">
                    <h2>{sampadaName}</h2>
                </div>
                <div className="about-subheading">
                    <h4><i>Subheading Here</i> </h4>
                </div>
                <Socials />
                <div className="about-text">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, ut. Debitis nesciunt voluptatum eveniet deleniti incidunt aut quod nam pariatur maiores assumenda, numquam beatae repellat maxime dolores voluptates aspernatur quidem.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea doloribus neque aspernatur earum dolore praesentium facilis? Numquam beatae id ratione earum at, excepturi assumenda quibusdam obcaecati pariatur optio explicabo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea doloribus neque aspernatur earum dolore praesentium facilis? Numquam beatae id ratione earum at, excepturi assumenda quibusdam obcaecati pariatur optio explicabo.</p>
                </div>
            </div>
        </div>
    );
}