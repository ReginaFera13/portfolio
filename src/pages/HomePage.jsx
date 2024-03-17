import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function HomePage() {
    return (
        <div className="flex-center-column">
            <div className="main">
            <div className="flex-center-column">
                    <h1>Shawn Smith: Full-Stack Software Engineer</h1>
                    <Image src="src/images/shawn_smith.jpeg" fluid rounded />
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
                            <Card.Body className='height300 bg-gradient-black-green'>
                                <Card.Title className='center-text text-white'>Front-End</Card.Title>
                                <Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item className='center-text'>CSS</ListGroup.Item>
                                        <ListGroup.Item className='center-text'>HTML</ListGroup.Item>
                                        <ListGroup.Item className='center-text'>React.js</ListGroup.Item>
                                        <ListGroup.Item className='center-text'>Responsive Web Design</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className='height300 bg-gradient-black-green'>
                                <Card.Title className='center-text text-white'>Back-End</Card.Title>
                                <Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item className='center-text'>Node.js</ListGroup.Item>
                                        <ListGroup.Item className='center-text'>Python</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className='height300 bg-gradient-black-green'>
                                <Card.Title className='center-text text-white'>Databases</Card.Title>
                                <Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item className='center-text'>PostgeSQL</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className='height300 bg-gradient-black-green'>
                                <Card.Title className='center-text text-white'>Frameworks/Libraries</Card.Title>
                                <Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item className='center-text'>Bootstrap</ListGroup.Item>
                                        <ListGroup.Item className='center-text'>Django</ListGroup.Item>
                                        <ListGroup.Item className='center-text'>Flask</ListGroup.Item>
                                        <ListGroup.Item className='center-text'>React</ListGroup.Item>
                                        <ListGroup.Item className='center-text'>Tailwind</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className='height300 bg-gradient-black-green'>
                                <Card.Title className='center-text text-white'>Version Control</Card.Title>
                                <Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item className='center-text'>Git</ListGroup.Item>
                                        <ListGroup.Item className='center-text'>Github</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className='height300 bg-gradient-black-green'>
                                <Card.Title className='center-text text-white'>Testing</Card.Title>
                                <Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item className='center-text'>Cypres</ListGroup.Item>
                                        <ListGroup.Item className='center-text'>Jest</ListGroup.Item>
                                        <ListGroup.Item className='center-text'>Pytest</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body className='height300 bg-gradient-black-green'>
                                <Card.Title className='center-text text-white'>Other</Card.Title>
                                <Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item className='center-text'>APIs</ListGroup.Item>
                                        <ListGroup.Item className='center-text'>Docker</ListGroup.Item>
                                        <ListGroup.Item className='center-text'>VSCode</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
            </div>
            <div className="flex-center-column">
                    <h2>Work Experience</h2>
                    <div>
                        <h3>United States Air Force</h3>
                        <p className='center-text italisize'>January 5, 2016 - January 4, 2022</p>
                        <div>
                            <h5>Radio Frequency Technician (AFSC 3D1X3)</h5>
                            <p className='center-text italisize'>January 2016 - December 2020</p>
                            <p className='center-text italisize'>Location: RAF Croughton, UK and Ghedi AB, Italy</p>
                            <ul>
                                <li>I performed preventative maintenance on equipment to secure system longevity for a $52M Weapons Storage Security System (WS3), a $23B Nuclear Command, Control & Communications System (NC3), a $1.9B Defense Information Systems Agency (DISA) Satellite Communication (SATCOM) Network, and a $1.1M Land Mobile Radio (LMR) Program, and I was awarded a quarterly award</li>
                                <li>I led a team to implement a European Command (EUCOM) Nuclear Command, Control & Communications System (NC3) system initiative, I performed tests and certified point-to-point Emergency Action Messages (EAMs) and checklists for 4 organizations, my team and I validated "Proof of Concept" and was 1st in United States Air Forces in Europe (USAFE) to accomplish this mission</li>
                                <li>I troubleshot system faults by utilizing technical orders, drawings, schematics, and pictorial diagrams to solve maintenance problems, I maintained 99% uptime for mission critical security and communication systems enabling real-time $6.1B Protection Level 1 asset surveillance and Emergency Action Message (EAM) capabilities from the President of the United States</li>
                                <li>I maintained additional programs assigned to me and ensured compliance, and I guaranteed maintenance is done in compliance with technical publications and regulations - I aided in achieving Superior Team Award and best organizational score ever for a United States Air Forces in Europe (USAFE) Nuclear Surety Inspection (NSI)</li>
                                <li>I conducted tests, calibrations, and adjustments on equipment and systems to ensure proper utilization for the safety of Nuclear certified systems</li>
                                <li>I used cryptographic equipment responsibly, incurring zero Communications Security (COMSEC) incidents </li>
                            </ul>
                        </div>
                        <div>
                            <h5>Radio Frequency Transmissions Systems Work Center Manager (Non-Commissioned Officer in Charge) (AFSC 3D1X3)</h5>
                            <p className='center-text italisize'>December 2020 - January 2022</p>
                            <p className='center-text italisize'>Location: Ghedi AB, Italy</p>
                            <ul>
                                <li>I organized work for the day, allocated personnel and resources to daily jobs, and I planned and created weekly and monthly schedules for upcoming maintenance actions on a $52M Weapons Storage Security System (WS3), a $23B Nuclear Command, Control & Communications System (NC3), and a $1.1M Land Mobile Radio (LMR) Program</li>
                                <li>I completed annual performance reports for subordinates, and I provided regular feedback sessions that communicate standards and expectations while encouraging two-way feedback</li>
                                <li>I briefed upper leadership to ensure they are aware of the daily operations, and I coordinated with other organizations for cross-organizational projects</li>
                                <li>I maintained documentation of work completed for record keeping and proving compliance, I oversaw use, storage and handling of cryptographic equipment assigned to my team, and I performed in-house inspections of programs to confirm compliance for future organized inspections</li>
                                <li>I designed the work center training program to accommodate the upgrade to our Weapons Storage Security System (WS3), I trained personnel on my team and updated their records, ensuring they achieved job qualification prior to working on the new system</li>
                                <li>I verified funding and order requests are placed for equipment parts and supplies for system repairs, I arranged turn-in of broken parts and equipment for proper disposal, and I confirmed tests and calibrations on tools were accomplished</li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="flex-center-column">
                    <h2>Education</h2>
                    <div className='flex-wrap-row'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className='height175 bg-gradient-black-green'>
                            <Card.Title className='center-text text-white'><a className='text-white' href='https://www.airuniversity.af.edu/Barnes/CCAF/' target='blank'>Community College of the Air Force</a></Card.Title>
                            <Card.Subtitle className="mb-2 center-text italisize text-white">2017 - 2018</Card.Subtitle>
                            <Card.Text className='center-text text-white'>Associate's Degree, Electronic Systems Technology</Card.Text>
                        </Card.Body>
                    </Card> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Body className='height175 bg-gradient-black-green'>
                            <Card.Title className='center-text'><a className='text-white' href='https://www.codeplatoon.org/' target='blank'>CodePlatoon</a></Card.Title>
                            <Card.Subtitle className="mb-2 center-text italisize text-white">January 29, 2024 - May 10, 2024</Card.Subtitle>
                            <Card.Text className='center-text text-white'>Full-stack Software Engineering: Immersive</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
            </div>
            <div className="flex-center-column">
                    <h2>My Passion for Software Engineering</h2>
                    <p>I'm deeply passionate about software engineering because it allows me to blend my creativity with my love for problem-solving. I'm fascinated by the endless possibilities that technology offers and the ability to create solutions that have a real impact on people's lives. Whether it's building user-friendly interfaces or optimizing backend systems for performance, I'm motivated by the opportunity to continuously learn, grow, and make a positive difference through code.</p>
            </div>
            <div className="flex-center-column">
                    <h2>Let's Connect</h2>
                    <p>I'm eager to connect with like-minded individuals who share my passion for software engineering and technology. Whether you're interested in discussing potential collaborations, sharing insights, or simply exchanging ideas, I'd love to hear from you. Feel free to reach out via email or connect with me on LinkedIn. Let's embark on this journey together and create something amazing!</p>
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