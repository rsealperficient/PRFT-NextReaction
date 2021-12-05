import classNames from "classnames";
import classes from '../home/home.module.css';
import NavBar from "./navbar";

export default function Layout(props){
    return(
        <div>
            <NavBar />
            <main className={classes.main}>{props.children}</main>
        </div>
    )
}