import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto2(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://cdn.discordapp.com/attachments/1000220744309026876/1112700731980513310/creme-de-fundacao-em-garrafa.jpg"/>
                <Card.Body>
                <Card.Title>Base cor clara 30g</Card.Title>
                <Card.Text>
                <h2>R$ 129,99</h2>
                </Card.Text>
                <Card.Text>
                    Uma base de tom claro e leve
                </Card.Text>
                <Card.Text>
                    Disponivel: 65
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto2