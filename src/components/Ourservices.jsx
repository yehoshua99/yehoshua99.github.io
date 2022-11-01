import { Row, Col, Container, Image } from "react-bootstrap"
import imgservice from "../assets/ImagesPRJ/img_service.png"
import cheklist from "../assets/ImagesPRJ/Group53.png"
import Navigation from "./Navigation"
const Ourservices = () => {
    return (
    <div >
        <Navigation/>
        <Container >
            <Row className="ourservice">
                <Col>
                    <Col>
                        <Image src={imgservice} alt="wanitatersenyum" className="wanita"/>
                    </Col>
                </Col>
                
                <Col>
                    <Col className="fontour">
                        <h3><b>Best Car Rental for any kind of trip in Madiun !</b></h3>
                        <p><b>Sewa mobil di Madiun bersama Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</b></p>
                            <p> <Image src={cheklist} alt="centang"/> <b>Sewa Mobil Dengan Supir di Bali 12 Jam</b> </p>
                            <p> <Image src={cheklist} alt="centang"/> <b>Sewa Mobil Lepas Kunci di Bali 24 Jam</b> </p>
                            <p> <Image src={cheklist} alt="centang"/> <b>Sewa Mobil Jangka Panjang Bulanan</b> </p>
                            <p> <Image src={cheklist} alt="centang"/> <b>Gratis Antar-Jemput Mobil di Bandara</b> </p>
                            <p> <Image src={cheklist} alt="centang"/> <b>Layanan Airport Transfer / Drop In Out</b> </p>
                    </Col>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Ourservices