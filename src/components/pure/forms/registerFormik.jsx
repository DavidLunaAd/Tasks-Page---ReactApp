import React from 'react';
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from 'formik'
import * as Yup from 'yup';

//Models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

let user = new User();

const initialValues = {
    username : '',
    email : '',
    password : '',
    confirm: '',
    role: ROLES.USER
}

const registerSchema = Yup.object().shape(

    {
        username: Yup.string()
                .min(6, 'Name too short')
                .max(12, 'Username too long')
                .required('Is required'),
        email: Yup.string()
                .email("Invalid email format")
                .required("Email is required"),
        role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'Your must select a Role')
                .required('Role is required'),
        password: Yup.string()
                .min(8,'Password to short')
                .required("Password is required"),
        confirm: Yup.string()
                .when("password", {
                    is: value => ( value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'Passwords must match'
                    )
                }).required('You must confirm the password')

    }

);

const submit = (values) => {
    alert('Register user')
};

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                // yup Validation Schema
                validationSchema={registerSchema}
                //onsubmitEvent
                onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 1000));
                alert(JSON.stringify(values, null, 2))
               }}
            >
              {({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
                <Form>
                <label htmlFor="username">Username</label>
                    <Field
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Your username"
                    />
                    {/* Username errors */}
                    {errors.username && touched.username && (
                    <ErrorMessage name="username" component= 'div'/>
                    
                    )}
                <label htmlFor="email">Email</label>
                    <Field
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    />
                    {/* Email errors */}
                    {errors.email && touched.email && (
                    <ErrorMessage name="email" component= 'div'/>
                    )}
                 
                <label htmlFor="password">Password</label>
                    <Field
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    />

                    {/* Password errors */}
                    {errors.password && touched.password && (
                    
                    <ErrorMessage name="password" component= 'div'/>
                    )}

                <label htmlFor="confirm">Confirm Password</label>
                    <Field
                    id="confirm"
                    type="password"
                    name="confirm"
                    placeholder="Confirm password"
                    />

                    {/* Confirm password errors */}
                    {errors.confirm && touched.confirm && (
                    
                    <ErrorMessage name="confirm" component= 'div'/>
                    )}

                <button type="submit">Register user</button>
                    {isSubmitting ? (<p>Sending your credentials</p>) : null}
                </Form>
              )}

            </Formik>
            
        </div>
    );
}

export default RegisterFormik;
