import React from 'react'
import "./contact.css"

const Contact = () => {
    return (
        <div id="contact" className='section'>
            <h2 className='heading'>Contact Me</h2>
            <p className='sub-heading center'>Here's how you can contact me: </p>
            <div class='fb-form'>
                <div class="form-container">
                    <form class="form" action="https://formbold.com/s/oz8mY" method="POST">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required="" />
                        </div>
                        <div class="form-group">
                            <label for="textarea">How May I Help You?</label>
                            <textarea name="feedback" id="textarea" rows="10" cols="50" required=""></textarea>
                        </div>
                        <button class="cssbuttons-io" type="submit">
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