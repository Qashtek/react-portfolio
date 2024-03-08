
function Projects(props){
    return (props.trigger) ? (
        <section id='projectSection'>
            <h3>My Most recent Projects </h3>
            <p className='lead'>Get a feel of what I'm capable of...</p>


            <h4>Project files go here</h4>


            <button onClick={() => props.setTrigger(false)}>Close</button>

        </section>
    ) : null ;
}


export default Projects;