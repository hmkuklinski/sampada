//this is the basic format page for each website --> includes the navbar, footer, etc.
import NavBar from "./NavBar";
export default function Layout(props){
    return(
        <div className="layout-container">
            {/* NavBar on top of every page*/}
            <NavBar />

            {/* The contents of the page itself */}
            {props.children}

            {/* Footer on every page if I decide to... */}
        </div>
    );
}