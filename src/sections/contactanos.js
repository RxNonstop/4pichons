import React from "react";
import ContactImg from '../assets/images/img_contactanos.png'

function Contact() {
    return (
        <section className='contactanos' id="contactanos">
            <div className="contact_background">
                <div className="contact">
                    <div className="intro_contact">
                        <h1>CONTACTO</h1>
                        <p>¿Quieres conocer más sobre la realidad virtual?</p>
                        <p>con gusto te asesoraremos sobre cómo aplicar</p>
                        <p>esta tecnología con base en tus necesidades.</p>
                    </div>
                    <div className="contact_content">
                        <div className="contact_text">
                            <p className="title">Utiliza las siguientes vías de contacto, o rellena el formulario. </p>
                            <div className="subs">
                                <p>Vía E-mail</p>
                                <ul className="email">
                                    <li><a href="#" target="_blank">projects@fourpichons.com</a></li>
                                    <li><a href="#" target="_blank">sec4pichons@gmail.com</a></li>
                                </ul>
                                <p>En nuestras redes sociales</p>
                                <ul className="socials">
                                    <li><a href="#" target="_blank">Proximamente</a></li>
                                </ul>
                                <p>Por teléfono</p>
                                <ul className="numbers">
                                    <li><a href="#" target="_blank">+57 316-3536-465</a></li>
                                    <li><a href="#" target="_blank">+52 1 55 6694 2283</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact_form">
                            <form action="submit">
                                <input type="text" placeholder="Escribe tu nombre"></input>
                                <input type="email" placeholder="Escribe tu e-mail"></input>
                                <input type="number" placeholder="Escribe tu telefono (Opcional)"></input>
                                <textarea type="" placeholder="Escribe tu mensaje"></textarea>
                                <button type="submit">ENVIAR MENSAJE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
  
export default Contact;