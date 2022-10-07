import { Container, Row, Col, DropdownButton, Dropdown, ButtonGroup, Image} from "react-bootstrap"
import listsosmed from "../assets/ImagesPRJ/list_sosmed.png"

const FAQ = () => {
    return (
        <div>
            <Container className="faq border">
                <Row className="faqAndDropDown" >
                    <Col >
                        <div className="descFAQ">    
                            <h3> Frequently Asked Question</h3>
                            <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae odio quae expedita fugiat sunt! Explicabo ipsam enim dicta nemo quaerat tempora incidunt obcaecati numquam ea. Nostrum voluptatem cum error!</b></p>
                        </div>
                    </Col>

                    <Col > 
                        <div className=" border">
                            <Col className="dropdon">
                                
                            <DropdownButton
                                as={ButtonGroup}
                                align={{ lg: 'end'}}
                                title="Apa saja syarat yang dibutuhkan?"
                                size="md"
                                variant="white"
                                className="isidrop border  mb-2">
                                <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
                            </DropdownButton>

                            <DropdownButton
                                as={ButtonGroup}
                                align={{ lg: 'end'}}
                                title="Berapa hari minimal sewa mobil lepas kunci?" 
                                size="md"
                                variant="white"
                                className="isidrop border  mb-2"
                                >
                                <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
                            </DropdownButton>

                            <DropdownButton
                                as={ButtonGroup}
                                align={{ lg: 'end'}}
                                title="Berapa hari sebelumnya sebaiknya booking sewa mobil?"
                                size="md"
                                variant="white"
                                className="isidrop border mb-2"
                                >
                                <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
                            </DropdownButton>

                            <DropdownButton
                                as={ButtonGroup}
                                align={{ lg: 'end'}}
                                title="Apakah ada biara antar-jemput?"
                                size="md"
                                variant="white" 
                                className="isidrop border  mb-2"
                                >
                                <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
                            </DropdownButton>

                            <DropdownButton
                                as={ButtonGroup}
                                align={{ lg: 'end'}}
                                title="Bagaimana jika terjadi kecelakaan?"
                                size="md"
                                variant="white"
                                className="isidrop border "
                                >
                                <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
                            </DropdownButton>
                            </Col>
                            
                        </div>
                    </Col>
                </Row>

                <Row className="Footer border">
                    <Col className="border">
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