import React from 'react';
import classes from './About.module.css';


interface CustomCSSProperties extends React.CSSProperties {
    "--n"?: string;
};

const About: React.FC = (props) => {

    return (
        <>
            <p className={classes.slashes}>//</p>
            <section tabIndex={0} id='about' className={classes.about_section}>

                <div className={classes.content}>
                    <span className={classes.type}
                        style={{ "--n": "1500" } as CustomCSSProperties}
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        onCut={(e) => (e.preventDefault())}
                        onPaste={(e) => (e.preventDefault())}
                        onKeyDown={(e) => (e.preventDefault())}
                        onDragEnter={(e) => (e.preventDefault())}
                        onDragLeave={(e) => (e.preventDefault())}
                        onDragOver={(e) => (e.preventDefault())}
                        onDrop={(e) => (e.preventDefault())}
                    >
                        Hello there, welcome to my corner of the internet! I'm Shahar, a computer science graduate,{"\n"}
                        a software engineer by day, and an enthusiast of trips, music, and gadgets all the time!{"\n"}
                        I have always been interested and intrigued by computers and technology. Since I can remember,{"\n"}I've known what I wanted to do.
                        I love coding, creating, math, and playing piano.{"\n"}

                        Feel free to poke around my <a contentEditable={false} href='https://github.com/shahar-shemesh' target='_blank'>GitHub</a>, contact me for a chat at <a contentEditable={false} href='mailto:shahar@usa.com'>shahar@usa.com</a>, or connect on <a contentEditable={false} href='https://linkedin.com/in/shaharshemesh' target='_blank'>LinkedIn</a>.{"\n"}
                        Always looking to make new friends and meet new people!

                    </span>
                </div>
            </section>
        </>
    );
};


export default About;