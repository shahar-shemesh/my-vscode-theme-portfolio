
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import classes from './Contact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { dispayLeaveMessage } from '../../../store/terminalSlice';
import { RootState } from '../../../store';

const Contact: React.FC<{
    formRef: React.RefObject<HTMLFormElement>,
    handleHide: (ref: React.RefObject<HTMLFormElement | HTMLDivElement>) => void,
    setVisible: (newState: Boolean) => void,
}> = (props) => {

    const dispatch = useDispatch();
    const terminalState: boolean = useSelector((state: RootState) => state.terminal.open);
    const emailInputRef: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (terminalState && emailInputRef.current)
            emailInputRef.current.focus();
    }, [terminalState]);

    const formRef: React.RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);
    const submit: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        submit.current!.value = "Sending...";

        emailjs.sendForm(
            'shahar.website',
            'shahar.website',
            formRef.current!, {
            publicKey:
                'B2ReO4YLnvHV3iZUt',
        }).then(async () => {
            (e.target as HTMLFormElement).reset();
            if (submit.current) {
                submit.current.value = "The message was sent.";
                submit.current.disabled = true;
                props.setVisible(false);
                await props.handleHide(props.formRef);
                setTimeout(() => dispatch(dispayLeaveMessage(true)), 1000);
            }
        },
            (error) => {
                console.log('FAILED...', error.text);
                if (submit.current) {
                    submit.current.value = "Error. try again.";
                }
            },
        );
    };


    return (
        <form className={classes.contactForm} ref={formRef} onSubmit={sendEmail}>
            <span className={classes.field}>
                <label>Email:</label>
                <input type="email" name="user_email" ref={emailInputRef} required={true} />
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