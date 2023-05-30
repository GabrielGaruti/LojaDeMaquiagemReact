import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h1>MaQAgora</h1>
            <p>
              Estamos dedicados a entregar as melhores maquiagens do mercado para o nosso cliente.
            </p>
          </div>
          <div className="footer-section links">
            <h3>Links</h3>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/produtos">Produtos</a></li>
              <li><a href="/contato">Contato</a></li>
              <li><a href="/sobre">Sobre nós</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contato</h3>
            <p>
              <i className="fa fa-phone"></i> (99) 9999-9999
            </p>
            <p>
              <i className="fa fa-envelope"></i> suporte@maqagora.com
            </p>
            <p>
              <i className="fa fa-map-marker"></i> Rua Lins de Vasconcelos, 123 - São Paulo - SP
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} MaQAgora. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;