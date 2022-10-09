import { Container, Row, Col, Carousel, Image, Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import testi1 from "../assets/ImagesPRJ/img_testi1.png"
import testi2 from "../assets/ImagesPRJ/img_testi2.png"
import star from "../assets/ImagesPRJ/Star.png"

const btnSearch = [
    {
        linkbtn:'/searchcar'
    }
]

const Testimonial = () => {
    return(
        <div >
            <Container className="con" >
                <Row className="headertesti ">
                    <Col>
                        <h3>Testimonial</h3>
                        <p><b>Berbagai review positif dari para pelanggan kami</b></p>
                    </Col>
                </Row>

                <Row className="carousel "> 
                <Carousel className="covercarousel ">
                        <Carousel.Item className="carouselcard  ">
                            <Row>
                                

                                <Col className="ConCard ">
                                        <Col className="CardCarousel col-md-2">
                                            <Image src={testi1} alt="testi1" className="  d-block w-10"/>
                                        </Col>
                                    <Col className="TextCarousel ">
                                        <Image src={star} alt="star"/>
                                        <p className="Texttesti"><b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, nobis. Sapiente quasi, est ad assumenda numquam tempora accusantium, nostrum itaque error ratione nesciunt adipisci et vel dolorum pariatur ea cum?</b></p>
                                        <p className="">John Dee 32, Bromo</p>
                                    </Col>
                                </Col>

                            
                           </Row>
                        </Carousel.Item>

                        <Carousel.Item className="carouselcard ">
                            <Row>
                                

                                <Col className="ConCard ">
                                        <Col className="CardCarousel col-md-2">
                                            <Image src={testi2} alt="testi1" className="  d-block w-10"/>
                                        </Col>
                                    <Col className="TextCarousel ">
                                        <Image src={star} alt="star"/>
                                        <p className="Texttesti"><b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, nobis. Sapiente quasi, est ad assumenda numquam tempora accusantium, nostrum itaque error ratione nesciunt adipisci et vel dolorum pariatur ea cum?</b></p>
                                        <p className="">John Dee 32, Bromo</p>
                                    </Col>
                                </Col>

                            
                           </Row>
                        </Carousel.Item>
                        
                        <Carousel.Item className="carouselcard ">
                            <Row>
                                

                                <Col className="ConCard ">
                                        <Col className="CardCarousel col-md-2">
                                            <Image src={testi1} alt="testi1" className="  d-block w-10"/>
                                        </Col>
                                    <Col className="TextCarousel ">
                                        <Image src={star} alt="star"/>
                                        <p className="Texttesti"><b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, nobis. Sapiente quasi, est ad assumenda numquam tempora accusantium, nostrum itaque error ratione nesciunt adipisci et vel dolorum pariatur ea cum?</b></p>
                                        <p className="">John Dee 32, Bromo</p>
                                    </Col>
                                </Col>

                            
                           </Row>
                        </Carousel.Item>



                        
                        </Carousel>
                </Row>

                <Row className="ContainerSewaMobilTesti justify-content-center">
                    <Col className="sewamobil border col-md-7">
                        <h3>Sewa Mobil di Madiun Sekarang</h3>
                        <p className="descsewa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aspernatur blanditiis ad, sapiente, est nesciunt vitae adipisci sit voluptate veritatis at quasi saepe maiores id inventore mollitia laudantium, quae omnis!</p>
                        
                        {btnSearch.map(({linkbtn}) => {
                            return(
                                <Link to={linkbtn}><Button variant="success" className="btnsewa">Mulai Sewa Mobil</Button></Link>
                            )
                        })}
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonial