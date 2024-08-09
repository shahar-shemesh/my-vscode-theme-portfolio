
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import classes from './Contact.module.css';

const Contact: React.FC<{
    formRef: React.RefObject<HTMLFormElement>,
    handleHide: (ref: React.RefObject<HTMLFormElement>) => void,
    setVisible: (newState: Boolean) => void,
}> = (props) => {
    const formRef: React.RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);
    const submit: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (submit.current && formRef.current) {
            submit.current.value = "Sending...";

            emailjs.sendForm(
                'shahar.website',
                'shahar.website',
                formRef.current, {
                publicKey:
                    'B2ReO4YLnvHV3iZUt',
            }).then(() => {
                (e.target as HTMLFormElement).reset();
                if (submit.current) {
                    submit.current.value = "The message was sent.";
                    submit.current.disabled = true;
                    props.setVisible(false);
                    props.handleHide(props.formRef);
                }
            },
                (error) => {
                    console.log('FAILED...', error.text);
                    if (submit.current) {
                        submit.current.value = "Error. try again.";
                    }
                },
            );
        }

    };


    return (
        <form className={classes.contactForm} ref={formRef} onSubmit={sendEmail}>
            <span className={classes.field}>
                <label>Email:</label>
                <input type="email" name="user_email" required={true} />
            </span>
            <span className={classes.field}>
                <label>Message:</label>
                <textarea name="message" />
            </span>
            <span className={classes.submit}>
                <input ref={submit} id='submit' type="submit" value="Send" required={true} />
            </span>
        </form>
    );
};


export default Contact;