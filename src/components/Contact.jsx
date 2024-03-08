
function Contact(props) {

    return(props.popupTrigger) ? (
        <section id='contactSection'>
            <form>
                
                <h3>Say Hello!</h3>

                <div className="fieldWrap">
                    <input type='text' className='input-field'placeholder='Your Name' />
                </div>
                <div className="fieldWrap">
                    <input type='email' className='input-field'placeholder='Your Email Address' />
                </div>
                <div className="fieldWrap">
                    <textarea name="message" id="message-box" placeholder='Write a message...' cols="30" rows="10"></textarea>
                </div>

                <button type='submit'>Send</button> 
                <button className='exit-btn' onClick={() => props.setPopupTrigger(false) }>close</button>
            </form>
        </section>
    ) : null ;
}


export default Contact;

