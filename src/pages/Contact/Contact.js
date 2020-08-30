import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className="container">
            <h1 className="brand"><span>Acme</span>Web Design</h1>
            <div className="wrapper animated bounceInLeft">
                <div className="company-info">
                    <h3>Acme Web Design</h3>
                    <ul>
                        <li><i className="fa fa-road"></i> 44 Something Street</li>
                        <li><i className="fa fa-phone"></i>(555) 555 - 5555</li>
                        <li><i className="fa fa-envelope"></i>test@acme.test</li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Email Us</h3>
                    <form action="send" method="post">
                        <p>
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" />
                        </p>
                        <p>
                            <label htmlFor="">Company</label>
                            <input type="text" name="company" />
                        </p>
                        <p>
                            <label htmlFor="">Email Address</label>
                            <input type="email" name="email" />
                        </p>
                        <p>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" name="phone" />
                        </p>
                        <p className="full">
                            <label htmlFor="">Message</label>
                            <textarea name="message" cols="30" rows="10"></textarea>
                        </p>
                        <p className="full"><button type="submit">Submit</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
