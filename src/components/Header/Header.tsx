
// import myEmojy from '/img/about-me.png';

import classes from './Header.module.css';
import ToggleTheme from './Theme/ToggleTheme';


const Header: React.FC = (props) => {

  return (
    <header id='header'>

      <div className={classes.logo}>

        <div className={classes.emojy}>
          <img src="/img/about-me.png" alt='shahar shemesh' />
        </div>

        <div className={classes.content}>
          <a href="/" className={classes.myname}>shahar_shemesh</a>
          <div className={classes.mytitle}>Full Stack developer</div>
        </div>

      </div>

      <div className={classes.contactButtons}>
        <ToggleTheme />
        <a className={classes.platformLink} target='_blank' href="mailto:shahar@usa.com"><i className={`${classes.icon} bx bx-md bx-envelope`}></i></a>
        <a className={classes.platformLink} target='_blank' href="https://www.linkedin.com/in/shaharshemesh"><i className={`${classes.icon} bx bx-md bxl-linkedin-square`} ></i></a>
        <a className={classes.platformLink} target='_blank' href="https://github.com/shahar-shemesh"><i className={`${classes.icon} bx bx-md bxl-github`} ></i></a>
      </div>


    </header>
  );
};

export default Header;