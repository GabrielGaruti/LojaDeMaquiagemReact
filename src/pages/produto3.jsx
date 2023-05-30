import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto3(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://cdn.discordapp.com/attachments/1000220744309026876/1112701043961245758/rimel-de-vista-superior-preto-com-fundo-cinza.jpg"/>
                <Card.Body>
                <Card.Title>Mascara de cilios</Card.Title>
                <Card.Text>
                <h2>R$ 229,90</h2>
                </Card.Text>
                <Card.Text>
                Mascara de cilios contendo 20g com uma das melhores qualidades do mercado
                </Card.Text>
                <Card.Text>
                    Disponivel: 32
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto3