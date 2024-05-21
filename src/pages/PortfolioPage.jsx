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
                            <Card.Img variant="top" src="group_project.png" />
                            <Card.Body className='padding30'>
                                <Card.Title className='text-white'>Group Project - ChangeMate - Deployed</Card.Title>
                                <Card.Text className='text-white'>Introducing ChangeMate, a collaborative endeavor developed during my immersive experience at Code Platoon. As part of a group project, we conceptualized and crafted this application to showcase our proficiency in full-stack software development while addressing a societal need.</Card.Text>
                                <Card.Text className='text-white'>ChangeMate serves as a testament to our capabilities in designing and implementing robust, user-centric software solutions. Modeled after social media platforms like Meetup, ChangeMate distinguishes itself by prioritizing volunteerism and social impact. Through intuitive features and seamless functionality, users can discover, join, and create volunteer events with ease, fostering connections and amplifying their impact on communities.</Card.Text>
                                <Card.Text className='text-white'>In this project, we split into two teams, front-end and back-end, and I was on the front-end team. By collaborating closely with my team and group and leveraging the principles learned at Code Platoon, we successfully delivered a polished application that embodies our commitment to excellence in software development and our dedication to making a positive difference in the world.</Card.Text>
                                <Card.Text className='text-white'>ChangeMate stands as a testament to my ability to translate concepts into tangible solutions and showcases my aptitude for working within a team to achieve shared goals. Explore this project further to gain insights into my technical prowess and collaborative spirit.</Card.Text>
                                <Container className='padding-bottom10'>
                                    <Row>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>CSS</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>Bootstrap</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>Django</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>HTML</Badge>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>JavaScript</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>PostgreSQL</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>Python</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>React</Badge>
                                        </Col>
                                    </Row>
                                </Container>
                                <Container>
                                    <Row>
                                        <Col></Col>
                                        <Col>
                                            <Button variant="dark" href='https://github.com/crystaljobe/change-mate' target='blank'>View Project</Button>
                                        </Col>
                                        <Col>
                                            <Button variant="dark" href='https://www.youtube.com/watch?v=aaU94KcA4qU' target='blank'>View Demo</Button>
                                        </Col>
                                        <Col>
                                            <Button variant="dark" href='https://changem8.com/' target='blank'>Visit Site</Button>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card className='padding10 bg-gradient-black-green'>
                            <Card.Img variant="top" src="shadows_of_mordor.png" />
                            <Card.Body className='padding30'>
                                <Card.Title className='text-white'>Personal Project - Shadows of Mordor</Card.Title>
                                <Card.Text className='text-white'>Enter the realm of Shadows of Mordor, an ambitious personal project that delves into the rich tapestry of J.R.R. Tolkien's Middle-earth. Conceived as a labor of love and a testament to my passion for both game development and the Lord of the Rings universe, Shadows of Mordor represents a journey of exploration and learning.</Card.Text>
                                <Card.Text className='text-white'>As an aspiring game developer, I embarked on this endeavor to hone my skills in game design, programming, and storytelling. Drawing inspiration from the iconic lore of Middle-earth, Shadows of Mordor aimed to immerse players in an epic RPG experience.</Card.Text>
                                <Card.Text className='text-white'>While the project remains in a partially complete state and will not be deployed, it stands as a valuable learning experience. Working with technologies like React Three Fiber, I gained insights into the complexities of game development within a web environment. However, I also encountered limitations inherent in this approach, particularly in comparison to dedicated game engines like Unity.</Card.Text>
                                <Card.Text className='text-white'>Despite the decision not to continue with Shadows of Mordor, the project serves as a testament to my dedication to mastering new technologies and my willingness to tackle ambitious creative endeavors. It underscores my commitment to continuous learning and growth as a developer, as well as my ability to recognize and adapt to the challenges inherent in the development process.</Card.Text>
                                <Card.Text className='text-white'>While Shadows of Mordor may remain unfinished, its legacy lives on as a milestone in my journey as a game developer. Explore this project to glimpse the passion and dedication I bring to every endeavor, and join me as I continue to pursue new horizons in the world of game development.</Card.Text>
                                <Container className='padding-bottom10'>
                                    <Row>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>CSS</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>Bootstrap</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>Django</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>HTML</Badge>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>JavaScript</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>PostgreSQL</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>Python</Badge>
                                        </Col>
                                        <Col>
                                            <Badge pill bg='light' text='dark'>React</Badge>
                                        </Col>
                                    </Row>
                                </Container>
                                <Container>
                                    <Row>
                                        <Col></Col>
                                        <Col>
                                            <Button variant="dark" href='https://github.com/ReginaFera13/lotr-game' target='blank'>View Project</Button>
                                        </Col>
                                        <Col>
                                            <Button variant="dark" href='https://youtu.be/0QFWKv4raN4' target='blank'>View Demo</Button>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </Container>                                
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
  }
  
  export default PortfolioPage;