import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";


import { login, getAllUsers, getAllPagedUsers, getUserById, createUser } from '../../services/axiosCRUDservice'

const AxiosCrudExample = () => {

    const initialCredentials = {
        email: "",
        password: "",
      };

      const loginSchema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email format")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      });
  
  const authUser = (values) =>{
    login(values.email, values.password)
            .then((response) => {
                if(response.data.token){
                alert(JSON.stringify(response.data.token));
                sessionStorage.setItem('token', response.data.token)
            }else{ 
                sessionStorage.removeItem('token');
                throw new Error('Login fail');
            }
            })
            .catch((error) => { 
                alert(`Something wen wrong: ${error}`)
                sessionStorage.removeItem('token');
            })
            .finally(() => console.log('Login done'))
  }
    
  //CRUD Examples

  const obtainAllUsers = () => {
    getAllUsers()
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            })
            .catch((error) => alert(`Something went wrong`))
  }
  
  const obtainAllPagedUsers = (page) => {
    getAllPagedUsers(page)
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            } )
            .catch((error) => alert(`Something went wrong`))
  }

  const obtainUserById = (id) => {
        getUserById(id)
        .then((response) => {
            if(response.data && response.status === 200) {
                alert(JSON.stringify(response.data.data))
            }else{
                throw new Error ('User not found')
            }        } )
        .catch((error) => alert(`Something went wrong`))
  }
  
  const createNewUser = (name, job) =>{
    createUser(name, job).then((response) => {
        if(response.data && response.status === 201) {
            alert(JSON.stringify(response.data))
        }else{
            throw new Error ('User not created')
        }
        
    })
    .catch((error) => alert(`Something went wrong: ${error}`))
  }

    return (
    // <div>
    //     AxiosCrudExample

    //     <button onClick={authUser}>CRUD</button>
    // </div>
    <div>
      <h1>Formik</h1>
      <Formik
        //Initial values
        initialValues={initialCredentials}
        // yup Validation Schema
        validationSchema={loginSchema}
        // onSubmit Event
        onSubmit={async (values) => {
          authUser(values)
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
      {/* Example button test API responses */}
        <div>
            <button onClick={obtainAllUsers}>
                Get all users
            </button>
            <button onClick={() => obtainAllPagedUsers(1)}>
                Get all paged (1) users
            </button>
            <button onClick={() => obtainUserById(1)}>
                Obtain (1) users
            </button>
            <button onClick={() => createNewUser('morpheus', 'leader')}>
                Create User
            </button>
        </div>
    </div>
  )
}

export default AxiosCrudExample