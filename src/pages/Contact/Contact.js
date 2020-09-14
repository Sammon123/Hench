import React, { useState } from 'react'
import './Contact.css'


const Contact = () => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
    }

    return (
        <div className="container">
            <h1 className="brand"><span>Hench</span>Printworks</h1>
            <div className="wrapper animated bounceInLeft">
                <div className="company-info">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><i className="fa fa-road"></i> 47 Court St</li>
                        <li><i className="fa fa-phone"></i>(603) 507 - 7820</li>
                        <li><i className="fa fa-envelope"></i>petersammon2@gmail.com</li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Email Us</h3>
                    <form>
                        <p>
                            <label htmlFor="">Name</label>
                            <input type="text" name="name"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                        </p>
                        <p>
                            <label htmlFor="">Company</label>
                            <input type="text" name="company"
                                value={subject}
                                onChange={e => setSubject(e.target.value)} />
                        </p>
                        <p>
                            <label htmlFor="">Email Address</label>
                            <input type="email" name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </p>
                        <p>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" name="phone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)} />
                        </p>
                        <p className="full">
                            <label htmlFor="">Message</label>
                            <textarea name="message" cols="30" rows="10"
                                value={message}
                                onChange={e => setMessage(e.target.value)}></textarea>
                        </p>
                        <p className="full"><button type="submit"
                            onClick={handleSubmit}>Submit</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
