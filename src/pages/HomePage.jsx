import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';

function HomePage() {
    return (
        <div className="flex-center-column">
            <div className="main">
            <div className="flex-center-column">
                    <h1>Shawn Smith: Full-Stack Software Engineer</h1>
                    <Image src="shawn_smith.jpeg" fluid rounded />
            </div>
            <div className="flex-center-column">
                    <h2>Welcome To My Portfolio Website!</h2>
                    <p>I'm excited to share my journey and showcase my skills as a junior full-stack software engineer. Here, you'll find a collection of projects and experiences that highlight my passion for coding and problem-solving. Whether you're a potential employer, fellow developer, or simply curious about my work, I invite you to explore and learn more about what I have to offer.</p>
            </div>
            <div className="flex-center-column">
                    <h2>About Me</h2>
                    <p>I'm Shawn, an Air Force veteran and junior full-stack software engineer with a strong foundation in both front-end and back-end development. My time in the AirForce was spent as a radio and satellite communications technician. After leaving the Air Force, I made a career transition and completed an intensive full-stack coding bootcamp with CodePlatoon. Since then, I've been eager to apply my newfound skills and contribute to impactful projects in the tech industry. With a keen eye for detail and a passion for learning, I'm driven to continuously improve and grow as a developer.</p>
            </div>
            <div className="flex-center-column">
                    <h2>Technical Proficiencies</h2>
                    <div className='flex-wrap-row'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className='height250 bg-gradient-black-green flex-center-column remove-padding remove-margin'>
                                <Card.Title className='center-text text-white'>Front-End</Card.Title>
                                < Card.Text className='center-text text-white'>CSS</Card.Text>
                                < Card.Text className='center-text text-white'>HTML</Card.Text>
                                < Card.Text className='center-text text-white'>React.js</Card.Text>
                                < Card.Text className='center-text text-white'>Responsive Web Design</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className='height250 bg-gradient-black-green flex-center-column remove-padding remove-margin'>
                                <Card.Title className='center-text text-white'>Back-End</Card.Title>
                                <Card.Text className='center-text text-white'>Node.js</Card.Text>
                                <Card.Text className='center-text text-white'>Python</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className='height250 bg-gradient-black-green flex-center-column remove-padding remove-margin'>
                                <Card.Title className='center-text text-white'>Databases</Card.Title>
                                <Card.Text className='center-text text-white'>PostgeSQL</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className='height250 bg-gradient-black-green flex-center-column remove-padding remove-margin'>
                                <Card.Title className='center-text text-white'>Frameworks/Libraries</Card.Title>
                                <Card.Text className='center-text text-white'>Bootstrap</Card.Text>
                                <Card.Text className='center-text text-white'>Django</Card.Text>
                                <Card.Text className='center-text text-white'>Flask</Card.Text>
                                <Card.Text className='center-text text-white'>React</Card.Text>
                                <Card.Text className='center-text text-white'>Tailwind</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className='height250 bg-gradient-black-green flex-center-column remove-padding remove-margin'>
                                <Card.Title className='center-text text-white'>Version Control</Card.Title>
                                <Card.Text className='center-text text-white'>Git</Card.Text>
                                <Card.Text className='center-text text-white'>Github</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className='height250 bg-gradient-black-green flex-center-column remove-padding remove-margin'>
                                <Card.Title className='center-text text-white'>Testing</Card.Title>
                                <Card.Text className='center-text text-white'>Cypres</Card.Text>
                                <Card.Text className='center-text text-white'>Jest</Card.Text>
                                <Card.Text className='center-text text-white'>Pytest</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className='height250 bg-gradient-black-green flex-center-column remove-padding remove-margin'>
                                <Card.Title className='center-text text-white'>Other</Card.Title>
                                <Card.Text className='center-text text-white'>APIs</Card.Text>
                                <Card.Text className='center-text text-white'>Docker</Card.Text>
                                <Card.Text className='center-text text-white'>VSCode</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
            </div>
            <div className="flex-center-column">
                <h2>Experience and Skills</h2>
                <p className='text-bold'>Organizational Leadership and Management</p>
                <ul>
                    <li>Promoted from within the command to Systems Operation Supervisor, responsible for the team managing a $23B Nuclear Command, Control & Communications (NC3) System, a $52M Weapons Storage Security System (WS3), and a $1.1M Land Mobile Radio (LMR) Program.</li>
                    <li>Led the first team in U.S. Air Forces Europe (USAFE) to achieve successful implementation of the Nuclear Command, Control & Communications (NC3) initiative.</li>
                    <li>Provided comprehensive briefings to upper leadership on daily operations, fostering transparency and alignment with organizational objectives.</li>
                    <li>Coordinated with external stakeholders for cross-organizational projects, ensuring seamless integration and collaboration.</li>
                </ul>
                <p className='text-bold'>Technical Delivery and Application</p>
                <ul>
                    <li>Maintained 99% uptime for mission-critical security and communication systems, facilitating real-time $6.1B Protection Level 1 asset surveillance and Emergency Action Message (EAM) capabilities from the President of the United States.</li>
                    <li>Designed and implemented a tailored training program to support the transition to the upgraded Weapons Storage Security System (WS3), ensuring eight team members across two teams were fully qualified and prepared for system deployment.</li>
                    <li>Key member of the group achieving the Superior Team Award and the best organizational score ever for a United States Air Forces in Europe (USAFE) Nuclear Surety Inspection (NSI).</li>
                    <li>Developed a full-stack web application independently, showcasing competency in problem-solving, software design, and implementation using technologies learned during the bootcamp.</li>
                    <li>Collaborated with a team to deliver a complex full-stack application, demonstrating effective teamwork, communication, and project management skills.</li>
                </ul>
                <p className='text-bold'>Continuous Learning and Development</p>
                <ul>
                    <li>Developed proficiency in programming languages such as Python and JavaScript, mastering concepts of object-oriented and functional programming.</li>
                    <li>Practiced Test-Driven Development (TDD) methodologies, writing unit tests and conducting test suites to ensure code reliability and maintainability.</li>
                    <li>Demonstrated proficiency in version control using Git/GitHub, collaborating with team members on codebases and managing project repositories.</li>
                    <li>Designed and implemented front-end interfaces and server-side logic and data handling, utilized front-end libraries and frameworks, and achieved proficiency in designing and managing relational databases.</li>
                </ul>
            </div>
            <div className="flex-center-column">
                    <h2>Professional History</h2>
                    <div>
                        <h3>United States Air Force</h3>
                        <p className='center-text italisize'>January 5, 2016 - January 4, 2022</p>
                        <Carousel variant="dark" fade>
                            <Carousel.Item >
                                <div className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
                                    <Image src="tech_school_graduation.jpg" rounded style={{ maxHeight: '100%' }} />
                                </div>
                                <Carousel.Caption className="caption">
                                    <h3>Tech School Graduation</h3>
                                    <p>Radio Frequency Transmission Systems - Keesler AFB, Biloxi, MS</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item >
                                <div className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
                                    <Image src="cheif_master_sergeant_wright.jpg" rounded style={{ maxHeight: '100%' }} />
                                </div>
                                <Carousel.Caption className="caption">
                                    <h3>Meeting the now retired Chief Master Sergeant of the Air Force Kaleth O. Wright</h3>
                                    <p>RAF Croughton, United Kingdom</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
                                    <Image src="honor_guard.jpg" rounded style={{ maxHeight: '100%' }} />
                                </div>
                                <Carousel.Caption className="caption">
                                    <h3>Serving on the Base Honor Guard Team</h3>
                                    <p>RAF Croughton, United Kingdom</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item >
                                <div className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
                                    <Image src="als_graduation.jpg" rounded style={{ maxHeight: '100%' }} />
                                </div>
                                <Carousel.Caption className="caption">
                                    <h3>Airman Leadership School Graduation</h3>
                                    <p>RAF Feltwell, United Kingdom</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <div>
                            <h5>Radio Frequency Transmissions Systems (AFSC 3D1X3)</h5>
                            <p className='center-text text-bold remove-margin'>RAF Croughton, United Kingdom</p>
                            <p className='center-text italisize remove-margin'>Achievements:</p>
                            <ul className='center-text no-bullets'>
                                <li>Promoted to Shift Supervisor</li>
                                <li>Appointed Honor Guard Trainer</li>
                                <li>Awarded Wing Honor Guard Member of the Quarter</li>
                            </ul>
                            <p className='center-text text-bold remove-margin'>Ghedi AB, Italy</p>
                            <p className='center-text italisize remove-margin'>Achievements:</p>
                            <ul className='center-text no-bullets remove-margin-bottom'>
                                <li>Awarded Squadron Airman of the Quarter</li>
                                <li>Promoted to Operations Supervisor (NCOIC)</li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="flex-center-column">
                    <h2>Education</h2>
                    <div className='flex-wrap-row'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className='height175 bg-gradient-black-green flex-center-column remove-padding remove-margin'>
                            <Card.Title className='center-text text-white'><a className='text-white' href='https://www.keesler.af.mil/Units/81st-Training-Wing/' target='blank'>Air Force Technical Training School</a></Card.Title>
                            <Card.Subtitle className="mb-2 center-text italisize text-white">2017</Card.Subtitle>
                            <Card.Text className='center-text text-white'>Radio Frequency Transmissions Certificate</Card.Text>
                        </Card.Body>
                    </Card> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className='height175 bg-gradient-black-green flex-center-column remove-padding remove-margin'>
                            <Card.Title className='center-text text-white'><a className='text-white' href='https://www.airuniversity.af.edu/Barnes/CCAF/' target='blank'>Community College of the Air Force</a></Card.Title>
                            <Card.Subtitle className="mb-2 center-text italisize text-white">2017 - 2018</Card.Subtitle>
                            <Card.Text className='center-text text-white'>Associate's Degree, Electronic Systems Technology</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className='height175 bg-gradient-black-green flex-center-column remove-padding remove-margin'>
                            <Card.Title className='center-text text-white'><a className='text-white' href='https://www.lakenheathfss.com/mathies-airman-leadership-school' target='blank'>Airman Leadership School</a></Card.Title>
                            <Card.Subtitle className="mb-2 center-text italisize text-white">2019</Card.Subtitle>
                            <Card.Text className='center-text text-white'>Supervisory and Leadership Certificate</Card.Text>
                        </Card.Body>
                    </Card>  
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className='height175 bg-gradient-black-green flex-center-column remove-padding remove-margin'>
                            <Card.Title className='center-text'><a className='text-white' href='https://www.codeplatoon.org/' target='blank'>CodePlatoon</a></Card.Title>
                            <Card.Subtitle className="mb-2 center-text italisize text-white">2024</Card.Subtitle>
                            <Card.Text className='center-text text-white'>Full-stack Software Engineering: Immersive</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
            </div>
            <div className="flex-center-column">
                    <h2>My Passion for Software Engineering</h2>
                    <p className='remove-margin-bottom'>I'm deeply passionate about software engineering because it allows me to blend my creativity with my love for problem-solving. I'm fascinated by the endless possibilities that technology offers and the ability to create solutions that have a real impact on people's lives. Whether it's building user-friendly interfaces or optimizing backend systems for performance, I'm motivated by the opportunity to continuously learn, grow, and make a positive difference through code.</p>
            </div>
            <div className="flex-center-column">
                    <h2>Beyond the Code</h2>
                    <p>Outside of coding, I enjoy crafting (woodworking, knitting, and cross-stitching), learning foreign languages (I know a little Spanish and Levantine Arabic), and playing video games (I love games fantasy RPGs such as Skyrim and similar games). I'm also an avid reader and love diving into books on psychology. I also enjoy fantasy novels and am a huge J.R.R. Tolkein fan. I believe in the importance of maintaining a healthy work-life balance and finding inspiration in diverse experiences both inside and outside the world of technology.</p>
            </div> 
            </div>
        </div>
    )
};

export default HomePage