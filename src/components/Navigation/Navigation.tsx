
import classes from './Navigation.module.css';
import footerClasses from '../Footer/Footer.module.css';

const Navigation: React.FC = (props) => {

  function expandTerminal() {
    let footer = document.getElementById("footer");
    let arrow = document.getElementById("expandTerminal");
    footer?.classList.add(footerClasses.expand);
    arrow?.classList.add("arrow-down");
  }


  return (
    <nav tabIndex={0} id='navigation'>
      <ul className={classes.nav_links}>

        <li className={classes.nav_item}>
          <a href="#about">about me</a>
        </li>

        <li className={classes.nav_item}>
          <a href="#myskills">my skills</a>
        </li>

        <li className={classes.nav_item}>
          <a href="#portfolio">portfolio</a>
        </li>

        <li className={classes.nav_item}>
          <a onClick={expandTerminal}>contact</a>
        </li>

      </ul>
    </nav>
  );
};

export default Navigation;


