import CTA from '../reusable/CTA';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <h2>¿Tenés una consulta legal o contable?</h2>
      <p>
        Evitá errores y tomá decisiones con respaldo profesional. Hablá con
        nuestros expertos ahora por WhatsApp.
      </p>

      <CTA />
    </section>
  );
}
