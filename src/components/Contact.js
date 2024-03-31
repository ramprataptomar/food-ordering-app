function Contact() {
    return (
        <div className="contact">
            <div className="contact-left">Have any query ?</div>
            <div className="contact-right">
                <textarea placeholder="Ask anything"></textarea>
                <input type="email" placeholder="Enter your mail"/>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Contact;