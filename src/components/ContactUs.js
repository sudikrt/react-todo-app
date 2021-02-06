import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <div class="heading-wrapper">
                <h1>Contact Us</h1>
                <img class="text-sep" src="https://d33wubrfki0l68.cloudfront.net/a2344e48fa9ccf9d4a8e2a85bd3e5a8780fbc774/5063b/images/text-sep.png" alt="site component"></img>
            </div>
            <div className="wrapper">
                <div class="contact-us-img-wrapper">
                    <img src="https://d33wubrfki0l68.cloudfront.net/0ea8e7a9eec9e9128e9076d5b05ef4c3e30d50b0/70205/images/man.png" alt="contact person"></img>
                </div>
                <div>
                    <div class="form-wrapper">
                        <form id="contactform" name="contact" action="" method="post" autocomplete="on">
                            <div class="form-control">
                                <label for="name"><span>*</span> Name : </label> 
                                <input name="fullName" class="" id="name" placeholder="Name" required="" />
                            </div>
                            <div class="form-control">
                                <label for="email"><span>*</span> Email Id :</label> 
                                <input name="email" type="email" class="" id="email" placeholder="abc@xyz.com" required="" /> 
                            </div>
                            <div class="form-control">
                                <label for="mobile"><span>*</span> Mobile Number :</label> 
                                <input name="mobileNumber" type="tel" class="" id="mobile" placeholder="Mobile Number" required="" /> 
                            </div>
                            <div class="form-control">
                                <label for="message"><span>*</span> Message :</label> 
                                <textarea name="message" value="" class="" id="message" placeholder="Enter your message....." required=""></textarea>
                            </div> 
                            <button type="submit" class="btn submit-button btn-outline-warning c-submit">Submit</button>
                        </form>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default ContactUs
