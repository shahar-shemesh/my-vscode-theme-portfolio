import { useState, useEffect } from "react";
import classes from './ToggleTheme.module.css';


const ToggleTheme: React.FC = (props) => {

    const [theme, setTheme] = useState<Boolean>(false);

    const body = document.querySelector("body")!;

    useEffect(() => {
        body.dataset.theme = theme ? "light" : "dark";
    }, [theme]);

    const changeTheme = () => setTheme((prevTheme) => !prevTheme);


    return (
        <a className={classes.themeToggle} tabIndex={0} onClick={changeTheme} onKeyDown={changeTheme}>

            <div id="darkmode" role="button" tabIndex={0} >
                <div className={classes.darkmode_icon}>
                    <span className={classes.ray}></span>
                    <span className={classes.ray}></span>
                    <span className={classes.ray}></span>
                    <span className={classes.ray}></span>
                    <span className={classes.ray}></span>
                    <span className={classes.ray}></span>
                    <span className={classes.ray}></span>
                    <span className={classes.ray}></span>
                </div>
            </div>

        </a>
    );
};
export default ToggleTheme;

