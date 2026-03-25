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
                        Hi there, and welcome to my little corner of the internet!{"\n"}
                        I'm Shahar – a full-stack developer and computer science graduate with a deep passion for code, creativity, and technology.{"\n"}
                        I've been fascinated by computers for as long as I can remember, and I always knew this is what I wanted to do.{"\n"}
                        I love building cool things, solving problems, learning new tools, and creating clean, meaningful experiences –{"\n"}
                        whether it’s with JavaScript, Python, Node, or whatever comes next. I'm also into music, gadgets, and a good cup of coffee ☕.{"\n"}

                        Feel free to explore my projects, check out my{" "}
                        <a contentEditable={false} href='https://github.com/shahar-shemesh' rel="noreferrer" target='_blank'>GitHub</a>,{" "}
                        drop me a message via{" "}
                        <a contentEditable={false} href='mailto:shahar@usa.com'>shahar@usa.com</a>,{" "}
                        or connect on{" "}
                        <a contentEditable={false} href='https://linkedin.com/in/shaharshemesh' rel="noreferrer" target='_blank'>LinkedIn</a>.{"\n"}
                        Let’s connect, create, and maybe even collaborate!


                    </span>
                </div>
            </section>
        </>
    );
};


export default About;
