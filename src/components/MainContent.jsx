import NavLinks from './NavLinks';
import About from './About';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';
import '../component-css/mainContent.css';


import {useState} from 'react';



function MainContent(){
    //state hook for learn more click event
    const [learnMore, setLearnMore] = useState(false);
    //state hook for about popup click event
    const [aboutDisp, setAboutDisp] = useState(false);
    // state hook for projects popup click event
    const [projectDisp, setProjectDisp] = useState(false);
    // state hook for testimonials popup click event 
    const [testimonyPop, setTestimonyPop] = useState(false);
    // state hook for contact popup click event
    const [contactPop, setContactPop] = useState(false);

// Learn more handleClick function
    const handleClick = () => {
        if(learnMore == false){
            setLearnMore(true);
        }else{
            setLearnMore(false);
        }
    }

    

    // jsx code
    return(
        <main className='Main-section'>
            <div className='main-intro'>
                <h1>Hi there! <br/>I'm Victor Nwulu</h1>
                <p className='lead'>Front End Engineer from Nigeria. </p>
                <button className='cta-btn' onClick={handleClick}>Learn More</button>
                {
                    learnMore ? (
                    <NavLinks>
                        <li>
                            <a href='#' id='bout-link' onClick={() => setAboutDisp(true)}>About me</a>
                        </li>
                        <li>
                            <a href="#" id='projects-link' onClick={() => setProjectDisp(true)}>My Projects</a>
                        </li>
                        <li>
                            <a href="#" id='testimony-link' onClick={() => setTestimonyPop(true)}>Testimonials</a>
                        </li>
                        <li>
                            <a href="#" id='contact-link' onClick={() => setContactPop(true)}>Contact</a>
                        </li>

                    </NavLinks> ) : null
                }

                <About trigger={aboutDisp} setTrigger={setAboutDisp}/>
                <Projects trigger={projectDisp} setTrigger={setProjectDisp} /> 
                <Testimonials triggerPopup={testimonyPop} setTriggerPopup={setTestimonyPop} />
                <Contact popupTrigger={contactPop} setPopupTrigger={setContactPop} />
                
            </div>
            
        </main>
    )
}


export default MainContent;