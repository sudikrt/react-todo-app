import React from 'react'
import axios from 'axios';

const ContactUs = ({ initialValues, validate }) => {
    const [values, setValues] = React.useState(initialValues);
    const [errors, setErrors] = React.useState({});
    const [touched, setTouched] = React.useState({});

    const handleBlur = evt => {
        const { name, value } = evt.target;

        const { [name] : removedError, ...rest } = errors;

        const error = validate[name](value);

        // validate the field if the value has been touched
        setErrors({
            ...rest,
            ...(error && { [name]: touched[name] && error }),
        });
    }

    const handleChange = evt => {
        const { name, value: newValue, type } = evt.target;

        // keep number fields as numbers
        const value = type === 'number' ? +newValue : newValue;

        // save field values
        setValues({
            ...values,
            [name]: value,
        });
    
        // was the field modified
        setTouched({
            ...touched,
            [name]: true,
        });

    }
    const handleSubmit = evt => {
        evt.preventDefault ();

        const formValidation = Object.keys (values).reduce (
            (acc, key) => {
                const newError = validate[key](values[key]);
                const newTouched = { [key]: true };

                return {
                    errors : {
                        ...acc.errors,
                        ...(newError && { [key]: newError })
                    },
                    touched : {
                        ...acc.touched,
                        ...newTouched
                    }
                };
            },
            {
                errors : {...errors},
                touched : {...touched}
            }
        );
        setErrors (formValidation.errors);
        setTouched (formValidation.touched);
        if (
            !Object.values(formValidation.errors).length && // errors object is empty
            Object.values(formValidation.touched).length ===
              Object.values(values).length && // all fields were touched
            Object.values(formValidation.touched).every(t => t === true) // every touched field is true
        ) {
            alert(JSON.stringify(values, null, 2));
            const  headers =  {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json;odata.metadata=full',
              }
            axios.post(`https://api.altreality.co/dev/contact-us`, values, {headers})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        }
    }
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
                        <form id="contactform" name="contact" onSubmit={handleSubmit} autocomplete="off">
                            <div class="form-control">
                                <label for="name"><span>*</span> Name : </label> 
                                <input name="name" class="" id="name" 
                                    placeholder="Name" required="" 
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}/>
                                {touched.name && <span className="error-message">{errors.name}</span>}    
                            </div>
                            <div class="form-control">
                                <label for="email"><span>*</span> Email Id :</label> 
                                <input name="email" type="email" class="" id="email" placeholder="abc@xyz.com"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required="" />
                                {touched.email && <span className="error-message">{errors.email}</span>} 
                            </div>
                            <div class="form-control">
                                <label for="mobile"><span>*</span> Mobile Number :</label> 
                                <input name="phone" type="tel" class="" id="phone" placeholder="Mobile Number" required="" 
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                /> 
                                {touched.phone && <span className="error-message">{errors.phone}</span>}
                            </div>
                            <div class="form-control">
                                <label for="message"><span>*</span> Message :</label> 
                                <textarea name="message" class="" id="message" 
                                placeholder="Enter your message....." required=""
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                ></textarea>
                                {touched.message && <span className="error-message">{errors.message}</span>}
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
