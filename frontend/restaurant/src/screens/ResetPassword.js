import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import './signup.css'

function ResetPassword() {
    const initialValues = {
        password: "",
        passwordConfirmation: "",
    };

    const validationSchema = Yup.object().shape({
        password: Yup.string().min(4).max(20).required(),
        passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/resetpassword", data).then(() => {
            console.log(data);
        });
    };

    return (
        <div className="reset-password-page" >
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="formContainerPassword">
                    <h2>Password Reset</h2>
        
                    <div className="formBody">
                    <p>Please enter and confirm your new password.</p>

                    <ErrorMessage name="password" component="span" style={{ color: 'red'}}/>
                    <Field
                        autoComplete="off"
                        type="password"
                        id="input_password"
                        name="password"
                        placeholder="Enter New Password"
                        className="input-field-pswd"
                    />
                    <ErrorMessage name="passwordConfirmation" component="span"/>
                    <Field
                        autoComplete="off"
                        type="password"
                        id="input_confirm"
                        name="passwordConfirmation"
                        placeholder="Confirm New Password"
                        className="input-field-pswd"
                    />
                    </div>
                    <button className="login-btn-password" type="submit">Reset Password</button>
                </Form>
            </Formik>
        </div>
    );
}

export default ResetPassword;