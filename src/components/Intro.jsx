import { Row, Col, Container, Image, Button } from "react-bootstrap"
import mercy from "../assets/ImagesPRJ/Mercedes Car EQC 300kW Edition - 900x598 1.png"
import { Link } from "react-router-dom"

const btnSearch = [
    {
        linkbtn:'/searchcar'
    }
]

const Intro = () => {
    return (
        
        <div className="intro1">
            <Container className=" intro2 border">
                <Row>
                    <Col className="DescIntro ">
                        <Col className=" ">
                            <h1 className="Title">  <b>Sewa & Rental Mobil Terbaik di Kawasan Madiun</b></h1>
                            <p className="">Slamat datang di Car Rental kami. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>

                            {btnSearch.map(({linkbtn}) => {
                                return(
                                    <Link to={linkbtn}><Button variant="success">Mulai Sewa Mobil</Button></Link>
                                )
                            }
                            )}
                            
                        </Col>
                    </Col>
                    
                    
                    <Col className="mercyintro"> 
                        <Col className="Container-mercy">
                            <Image src={mercy} alt="mercy" className="mobilmercy" />
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro