import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/1000220744309026876/1112768824496898138/woman-makes-shade-girl-s-skull.jpg" height={500}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Os melhores preços do mercado</h3>
          <p>Qualidade e Agilidade na entrega!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/1000220744309026876/1112768825398677504/make-up-artist-getting-model-ready-photoshootin.jpg" height={500}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Sua nova paixão por maquiagens aqui!</h3>
          <p>Compre 1 e leve 2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/1000220744309026876/1112768826589855784/close-up-collection-make-up-beauty-products.jpg" height={500}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>A melhor qalidade do mercado você encontra aqui</h3>
          <p>
            Encontre tudo o que quiser no melhor preço.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;