import { items } from '../data/about';
import '../styles/About.css';

export default function About() {
  return (
    <section className="about" id="estudio">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Estudio profesional"
          />
        </div>

        <div className="about-content">
          <span className="about-eyebrow">Nuestro estudio</span>
          <h2>¿Por qué elegirnos?</h2>

          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
