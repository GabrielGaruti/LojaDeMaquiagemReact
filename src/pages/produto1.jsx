import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto1(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://cdn.discordapp.com/attachments/1000220744309026876/1112700547997368420/pecas-cosmeticas-para-beleza-facial.jpg"/>
                <Card.Body>
                <Card.Title>Batom Vermelho</Card.Title>
                <Card.Text>
                <h2>R$ 39,99</h2>
                </Card.Text>
                <Card.Text>
                Um batom marcante e unico
                </Card.Text>
                <Card.Text>
                    Disponivel: 7
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto1