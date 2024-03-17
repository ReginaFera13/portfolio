import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PortfolioPage() {
    return (
        <div className="flex-center-column">
            <div className="main">
                <div className="flex-center-column">
                    <h1>My Portfolio</h1>
                </div>
                <Carousel fade>
                    <Carousel.Item>
                        <Card className='padding10 bg-gradient-black-green'>
                            <Card.Img variant="top" src="src/images/code_img.png" />
                            <Card.Body className='padding30'>
                                <Card.Title className='text-white'>Project 1</Card.Title>
                                <Card.Text className='text-white'>Some text describing the project. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fuga nobis incidunt vitae laborum, pariatur, labore hic voluptatum animi nihil atque, numquam dolore temporibus error! Quas deleniti aut est eligendi!
                                </Card.Text>
                                <Container className='padding-bottom10'>
                                    <Row>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>CSS</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>HTML</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>JavaScript</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>Python</Badge>
                                        </Col>
                                    </Row>
                                </Container>
                                <Button variant="dark">View Project</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className='padding10 bg-gradient-black-green'>
                            <Card.Img variant="top" src="src/images/code_img.png" />
                            <Card.Body className='padding30'>
                                <Card.Title className='text-white'>Project 2</Card.Title>
                                <Card.Text className='text-white'>Some text describing the project. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fuga nobis incidunt vitae laborum, pariatur, labore hic voluptatum animi nihil atque, numquam dolore temporibus error! Quas deleniti aut est eligendi!
                                </Card.Text>
                                <Container className='padding-bottom10'>
                                    <Row>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>CSS</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>HTML</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>JavaScript</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>Python</Badge>
                                        </Col>
                                    </Row>
                                </Container>
                                <Button variant="dark">View Project</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className='padding10 bg-gradient-black-green'>
                            <Card.Img variant="top" src="src/images/code_img.png" />
                            <Card.Body className='padding30'>
                                <Card.Title className='text-white'>Project 3</Card.Title>
                                <Card.Text className='text-white'>Some text describing the project. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fuga nobis incidunt vitae laborum, pariatur, labore hic voluptatum animi nihil atque, numquam dolore temporibus error! Quas deleniti aut est eligendi!
                                </Card.Text>
                                <Container className='padding-bottom10'>
                                    <Row>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>CSS</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>HTML</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>JavaScript</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>Python</Badge>
                                        </Col>
                                    </Row>
                                </Container>
                                <Button variant="dark">View Project</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
  }
  
  export default PortfolioPage;