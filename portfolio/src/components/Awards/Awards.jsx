import Layout from "../Layout";
import HighlightedAward from "./HighlightedAward";
import SimpleAwards from "./SimpleAwards";
import { meritAwards} from "../../sampadaInfo";
import MyHeader from "../MyHeader";
import {useState, useEffect} from "react";

export default function Awards(){
    const [isMobile, setIsMobile]= useState(false);

    //check if the user is on mobile:
    useEffect(() => {
        function handleResize() {
        setIsMobile(window.innerWidth <= 768);
        }
        handleResize(); // check on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    //headers for the different awards sections! :D
    // const awardsMobile = <MyHeader title="Featured Awards" id="mobile-awards" />;
    const meritHeader= <MyHeader title="Merit Awards" id="merit-awards" />;

    return (
        <Layout>
            <div className="page-container" id="awards">
                {/* {isMobile&& awardsMobile} */}
                <HighlightedAward isMobile={isMobile}/>
                {meritHeader}
                <div className="award-container">
                    {meritAwards.map((award =>(
                        <SimpleAwards {...award} />
                    )))}
                </div>
            </div>
        </Layout>
    );
}