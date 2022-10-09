import { Container, Row, Col, DropdownButton, Dropdown, ButtonGroup, Image, Accordion} from "react-bootstrap"
import listsosmed from "../assets/ImagesPRJ/list_sosmed.png"

const FAQ = () => {
    return (
        <div>
            <Container className="faq">
                <Row className="faqAndDropDown" >
                    <Col >
                        <div className="descFAQ">    
                            <h3> Frequently Asked Question</h3>
                            <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae odio quae expedita fugiat sunt! Explicabo ipsam enim dicta nemo quaerat tempora incidunt obcaecati numquam ea. Nostrum voluptatem cum error!</b></p>
                        </div>
                    </Col>

                    <Col > 
                        <div className="">
                            <Col className="dropdon">
                                
                            <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Berapa hari sebelumnya sebaiknya booking sewa mobil?</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Apakah ada biaya antar-jemput?</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Bagaimana jika terjadi kecelakaan</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                            </Accordion>
                            </Col>
                            
                        </div>
                    </Col>
                </Row>

                <Row className="Footer">
                    <Col >
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

export default FAQ