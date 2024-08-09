
import classes from './Card.module.css';
import { portfolioProject } from '../Portfolio';


const Card: React.FC<{ item: portfolioProject }> = (props) => {

    return (
        <div id='card' className={classes.card}>

            <div className={classes.image}>
                <img src={props.item.src} />
            </div>

            <div className={classes.cardContent}>
                <p className={classes.name}>
                    Customer: <span className={classes.fields}>{props.item.title}</span>
                </p>
                <p className={classes.technologics}>
                    Technologics: <span className={classes.fields}>
                        {props.item.technologics.map((tech, index) => (
                            <span className={classes.tech} key={index}>{tech}&nbsp;&nbsp;</span>
                        ))}</span>
                </p>
                <p className={classes.description}>
                    Description: <span className={classes.fields}>
                        {props.item.description.length > 122 ? `${props.item.description.substring(0, 119)}...` : props.item.description}

                    </span>
                </p>
                <p className={classes.link}>
                    Link: <span className={classes.fields}>
                        <a target='_blank' href={"https://" + props.item.link} className={classes.aLink}>
                            {props.item.link.length > 50 ? `${props.item.link.substring(0, 47)}...` : props.item.link}
                        </a>
                    </span>
                </p>
            </div>

        </div>
    );
};


export default Card;