import React from 'react'
import "./contact.css"

const Contact = () => {
    return (
        <div id="contact" className='section'>
            <h2 className='heading'>Contact Me</h2>
            <p className='sub-heading center'>Here's how you can contact me: </p>
            <div className='fb-form'>
                <div className="form-container">
                    <form className="form" action="https://formbold.com/s/oz8mY" method="POST">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="textarea">How May I Help You?</label>
                            <textarea name="feedback" id="textarea" rows="10" cols="50" required=""></textarea>
                        </div>
                        <button className="cssbuttons-io" type="submit">
                            <span>
                                Submit
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact