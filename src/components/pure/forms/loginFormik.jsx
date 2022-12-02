import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <div>
      <h1>Formik</h1>
      <Formik
        //Initial values
        initialValues={initialCredentials}
        // yup Validation Schema
        validationSchema={loginSchema}
        // onSubmit Event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 2000));
          alert(JSON.stringify(values, null, 2));
          //We save the data in the localStorage
          localStorage.setItem('credentials', values)
        }}
      >

        {({ errors, touched, isSubmitting, handleChange, handleBlur }) => (
            <Form>
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

            {/* Email errors */}
            {errors.password && touched.password && (
             
              <ErrorMessage name="password" component= 'div'/>
             
            )}

            <button type="submit">Submit</button>
            {isSubmitting ? (<p>Login your credentials</p>) : null}
          </Form>
        )
        }

      </Formik>
    </div>
  );
};

export default LoginFormik;
