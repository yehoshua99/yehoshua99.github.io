import {Container, Row, Col,  Button, Form, Card, Image} from 'react-bootstrap';
import listsosmed from "../assets/ImagesPRJ/list_sosmed.png"

const Detail = () => {
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
                <Row>
                    <Col>
                        <Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <Card.Title>Tentang Paket</Card.Title>
                                    <Card.Title>Include</Card.Title>
                                        <Card.Text>
                                            <li> Apa saja yang termasuk dalam paket misal durasi 12 jam </li>
                                            <li> Apa saja yang termasuk dalam paket misal durasi 12 jam </li>
                                            <li> Apa saja yang termasuk dalam paket misal durasi 12 jam </li>
                                            <li> Apa saja yang termasuk dalam paket misal durasi 12 jam </li>
                                        </Card.Text>
                                <Card.Title>Exclude</Card.Title>
                                    <Card.Text> 
                                        <li> Tidak termasuk biaya makan sopir Rp.75.0000/hari </li>
                                        <li> Tidak termasuk biaya makan sopir Rp.75.0000/hari </li>
                                        <li> Tidak termasuk biaya makan sopir Rp.75.0000/hari </li>
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Inova</Card.Title>
        <Card.Text>
          6-8 orang
        </Card.Text>
        <Row> 
          <Col><b>Total</b>
          </Col>
          <Col><b>Rp.500.000</b>
          </Col>
        </Row>
      </Card.Body>
    </Card>
                    </Col>
                </Row>
                    
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
export default Detail