import { services } from '../data/services';
import '../styles/Services.css';

export default function Services() {
  return (
    <section id="servicios" className="services">
      <header className="services-header">
        <h2>Nuestros servicios</h2>
        <p>Soluciones profesionales pensadas para particulares y empresas que buscan seguridad y respaldo.</p>
      </header>

      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}