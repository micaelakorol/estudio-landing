import "../styles/Situations.css";

const situations = [
  "Revisar o redactar un contrato antes de firmarlo",
  "Resolver un conflicto laboral o comercial",
  "Crear tu empresa de forma legal y segura",
];

export default function Situations() {
  return (
    <section className="situations">
      <header className="situations-header">
        <h2>¿En qué podemos ayudarte?</h2>
        <p>
          Acompañamos a particulares y empresas en distintas situaciones
          legales y contables con asesoramiento claro y profesional.
        </p>
      </header>

      <div className="situations-grid">
        {situations.map((item, index) => (
          <div key={index} className="situation-card">
            <span className="check">✔</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}