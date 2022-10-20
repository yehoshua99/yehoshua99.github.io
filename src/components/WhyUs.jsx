import { Col, Container, Row, Card, ListGroup, Image } from "react-bootstrap"
import icon_price from "../assets/ImagesPRJ/icon_price.png"
import jempol from "../assets/ImagesPRJ/jempol.png"
import icon_professional from "../assets/ImagesPRJ/icon_professional.png"
import icon_24hrs from "../assets/ImagesPRJ/icon_24hrs.png"
import Navigation from "./Navigation"
const whyus = () => {
    return (
        <div className=" whyus">
            <Navigation/>
            <Container className="Con-why  " >
                <Row >
                    <Col className="titlewhy text-center">
                        <Col>
                            <h3>Why Us?</h3>
                            <p><b>Mengapa harus pilih  Car Rental?</b></p>
                        </Col>
                    </Col>
                <Row className=" kartu ">
                    <Col md={3}>
                            <Card>
                                <ListGroup>
                                    <p><Image src={jempol} alt="imglike"/></p>
                                    <p><b>Mobil Lengkap</b></p>
                                    <p><b>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</b></p>
                                </ListGroup>
                            </Card>
                    </Col>
                   
                   <Col md={3}>
                    <Card>
                                <ListGroup>
                                    <p><Image src={icon_price} alt="price_Tag"/></p>
                                    <p><b>Harga Murah</b></p>
                                    <p><b>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</b></p>
                                </ListGroup>
                            </Card>
                   </Col>
                    

                   <Col md={3}>
                    <Card>
                                <ListGroup>
                                    <p><Image src={icon_24hrs} alt="24hours"/></p>
                                    <p><b>Layanan 24 Jam</b></p>
                                    <p><b>Siap melayani kebutuhan Anda selama 24 Jam nonstop. Kami juga tersedia di akhir minggu</b></p>
                                </ListGroup>
                            </Card>
                   </Col>
                    

                   <Col md={3}>
                    <Card>
                                <ListGroup>
                                    <p><Image src={icon_professional} alt="professional"/></p>
                                    <p><b>Sopir Profesional</b></p>
                                    <p><b>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</b></p>
                                </ListGroup>
                            </Card>
                   </Col>
                    
                </Row>
                </Row>
            </Container>
        </div>
    )
}

export default whyus