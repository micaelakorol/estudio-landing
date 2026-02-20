import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Estudio Profesional</p>

        <div className="footer-socials">
          <a href="#" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

