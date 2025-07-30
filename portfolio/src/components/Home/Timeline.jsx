import { sampadaPhotoPaths } from "../../sampadaInfo";

export default function Timeline(){
    return (
        <div className="timeline-container">
            <div className="timeline-image">
                <img src={sampadaPhotoPaths[1].info} alt={sampadaPhotoPaths[1].id} />
            </div>
            <div className="timeline-information">
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque id omnis molestiae quia! Cupiditate voluptatem repellendus iusto illum. Adipisci quisquam soluta dolorum nulla hic. Repellat eum veritatis voluptatibus nam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aut ad deleniti officia saepe commodi hic doloremque perspiciatis qui modi inventore excepturi voluptas non reiciendis obcaecati debitis? Obcaecati, sequi et!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit officia beatae corrupti dolorem voluptatum dignissimos totam voluptates repellat facere unde animi accusamus consectetur qui suscipit fuga vero aperiam, eos fugit.</p>
            </div>
        </div>
    );
}