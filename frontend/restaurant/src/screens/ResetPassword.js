import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import './signup.css'

function ResetPassword() {
    let navigate = useNavigate();

    const initialValues = {
        security_question_1: "",
        security_question_2: "",
        password: "",
        passwordConfirmation: "",
    };

    const validationSchema = Yup.object().shape({
        security_question_1: Yup.string().min(1).required(),
        security_question_2: Yup.string().min(1).required(),
        password: Yup.string().min(4).max(20).required(),
        passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    });

    const resetPassword = (data) => {
        axios.put(
            "http://localhost:3001/resetpassword/reset",
            data,
            {
                headers: {
                    resetToken: sessionStorage.getItem("resetToken"),
                },
            }
        ).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
                navigate('/login');
            } else {
                alert("Your password has been changed.");
                navigate('/');
            }
        });
  };

    return (
        <div className="reset-password-page" >
            <Formik
                initialValues={initialValues}
                onSubmit={resetPassword}
                validationSchema={validationSchema}
            >
                <Form className="formContainerPassword">
                    <h2>Password Reset</h2>
        
                    <div className="formBody">
                    
                    <p>Please answer the following security questions.</p>
                    <h1>Question 1</h1>
                    <ErrorMessage name="security_answer_1" component="span" style={{ color: 'red'}} />
                    <Field
                        autoComplete="off"
                        id="security_question_1"
                        name="security_question_1"
                        placeholder="Answer 1"
                        className="input-field-pswd"
                    />
                    <h1>Question 2</h1>
                    <ErrorMessage name="security_answer_2" component="span" style={{ color: 'red'}} />
                    <Field
                        autoComplete="off"
                        id="security_question_2"
                        name="security_question_2"
                        placeholder="Answer 2"
                        className="input-field-pswd"
                    />
                    
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