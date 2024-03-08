
function Testimonials(props){
    return(props.triggerPopup) ? (
        <section id='testimonialSection'>
            <h3>What My Clients are Saying...</h3>

            Client Reviews Here.


            <button onClick={() => props.setTriggerPopup(false)}>Close</button>
        </section>
    ) : null ;
}



export default Testimonials;