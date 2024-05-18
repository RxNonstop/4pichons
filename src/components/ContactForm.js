import React,{useRef} from "react";
import emailjs from '@emailjs/browser'

function ContactForm() {

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm('service_4iq6r9p', 'template_v33v3n5', form.current, {
            publicKey: '_oj4TzaxErb7UFsU5',
        })
        .then(
            (result) => {
                console.log(result.text);
                form.current.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Escribe tu nombre" name="user_name"></input>
            <input type="email" placeholder="Escribe tu e-mail" name="user_email"></input>
            <input type="number" placeholder="Escribe tu telefono (Opcional)" name="telephone"></input>
            <textarea type="" placeholder="Escribe tu mensaje" name="message"></textarea>
            <button type="submit" value='send'>ENVIAR MENSAJE</button>
        </form>
    )
}

export default ContactForm