import '../styles/NavBar.css';

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-container">
        <span className="nav-logo">Estudio Profesional</span>

        <nav className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#estudio">Estudio</a>
          <a href="#contacto" className="nav-cta">
            Solicitar consulta
          </a>
        </nav>
      </div>
    </header>
  );
}

