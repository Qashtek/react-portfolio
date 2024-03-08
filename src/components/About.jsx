import '../component-css/about.css';
import profilePic from '../assets/victor.jpg'


export default function AboutContent(props){
    return (props.trigger) ? (
        <section id='aboutSection'>
            <div className='about-inner'>

                
                <ProfileHeader />

                <div className='profile-body'>
                        <div className='bio'>
                            <h3 className='sub-heading'>Bio</h3>
                            <p>
                            Frontend engineer by day, problem-solver by nature. Making the web a more user-friendly place, one line of code at a time.
                            </p>

                        </div>

                        <div className='education'>
                            <h3 className='sub-heading'>Education</h3>
                            <p>Bachelor of Computer Engineering <br/> <small>Michael Okpara University Of Agriculture, Umudike [ 2014 - 2024 ]</small></p>
                        </div>
                </div>

                

                <div className='profile-footer'>
                        <h3 className='sub-heading'>Relevant Experience <a href='/' id='dl-cv'>Download CV</a> </h3>
                        <p>
                            <b>Freelance Front End Developer</b> <br />
                            <small>
                            I turn pixels into experiences, bridging the gap between design and development for my clients and corporate organizations. 
                            </small>
                            <br/> <br/>
                            <b>Front End Developer Intern - Innovation Growth Hub [Aug 2022 - Dec 2022] </b> <br />
                            <small>
                            Developed beautiful and elegant responsive UIs with a passion for clean code. Networked with cross functional teams of professionals, learning workplace ethics and modern web development best practises. 
                            </small>
                        </p>
                </div>



                <button title="Exit Profile Page" className='exit-btn' onClick={() => props.setTrigger(false)}>X</button>
            </div>
        
        </section> ) : null ;
}





















function ProfileHeader(props){
    return(
        <header className='profile-header'>
            <div className='avatar-box'>
                <img src={profilePic} alt="profile-avatar" /> 
            </div>
            <div className='profile-highlight'>
                <h2>Victor Nwulu</h2>
                <div className="socials">
                    twitter| git | email |phone
                </div>
                <div className='role-and-experience'>
                    <span className="role"> <strong>Role:</strong>Front End Engineer</span>
                    <span className="experience"><strong>Experience:</strong>2 years</span>
                </div>
                <div className='skillset'>
                    <span className="skill">HTML5</span>
                    <span className="skill">CSS3</span>
                    <span className="skill">JavaScript</span>
                    <span className="skill">React</span>
                    <span className="skill">Git</span>
                    <span className="skill">NodeJS</span>
                </div>
            </div>
        </header>
    )
}