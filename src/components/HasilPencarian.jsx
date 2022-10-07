import {Container, Row, Col,  Button, Form, Card, Image} from 'react-bootstrap';
import listsosmed from "../assets/ImagesPRJ/list_sosmed.png"


const HasilPencarian = () => {
    return (
      <div className='HasilPencarianAll'>
        <Container fluid>
            <Row  >
                <Col className='cobaRow'></Col>
            </Row> 
        </Container>

        <Container className="ContainerSearchResult">
                <Row className="RowSearch border">
                    <Col className="border">
                        <Form.Group >
                            <Form.Label htmlFor="disabledTextInput">Nama Mobil</Form.Label>
                            <Form.Control id="disabledTextInput" placeholder="Ketik Nama/tipe mobil" />
                        </Form.Group>
                    </Col>
                    <Col className="border">
                        <Form.Group >
                                <Form.Label>Kategori</Form.Label>
                                <Form.Select>
                                    <option> 2 -4 orang</option>
                                    <option> 4-6 orang</option>
                                    <option> 6-8 orang</option>
                                </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col className="border">
                        <Form.Group >
                                <Form.Label>Harga</Form.Label>
                                <Form.Select>
                                    <option> Rp.400.000 </option>
                                    <option> Rp. 400.000 - Rp. 600.000</option>
                                    <option> Rp.400.000</option>
                                </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col className="border">
                        <Form.Group >
                                <Form.Label htmlFor="disabledSelect">Status</Form.Label>
                                <Form.Select>
                                    <option> Tersedia</option>
                                    <option> Disewa</option>
                                </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                    <Button variant="success" href="#">Cari Mobil</Button>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='ContainerCard border'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
            </Container>

            <Container fluid>
            <Row className="FooterSearch">
                    <Col>
                    <p><b>Jalan Suroyo No.161 Mayangan Kota Probolinggo 672000</b></p>
                    <p><b>binarcarrental@gmail.com</b></p>
                    <p><b>081-233-334-808</b></p>
                    </Col>

                    <Col>
                    <p>Our Services</p>
                    <p> Why Us</p>
                    <p> Testimonial</p>
                    <p>FAQ</p>
                    </Col>

                    <Col>
                    <p><b>Connect with us</b></p>
                    <Image src={listsosmed} alt="listsosmed"/>
                    </Col>

                    <Col className="cprt">
                    <p><b>Copyright Binar 2022</b></p>
                    <Col className="LogoBinar"></Col>
                    </Col>
                </Row>
            </Container>
      </div>
    )
}
export default HasilPencarian