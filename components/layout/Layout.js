import NavBar from "./navbar";

export default function Layout(props){
    return(
        <div>
            <NavBar />
            <div>{props.children}</div>
        </div>
    )
}