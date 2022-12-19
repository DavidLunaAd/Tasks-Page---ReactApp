import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";


import { login, getAllUsers, getAllPagedUsers, getUserById, createUser, updateUser, deleteUser } from '../../services/axiosCRUDservice'

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

  
  const updateUserById = (id, name, job) =>{
    updateUser(id, name, job).then((response) => {
        if(response.data && response.status === 200) {
            alert(JSON.stringify(response.data))
        }else{
            throw new Error ('Failed')
        }
        
    })
    .catch((error) => alert(`Something went wrong: ${error}`))
  }

  const deleteUserById = (id) => {
    deleteUser(id)
    .then((response) => {
        if(response.status === 204) {
            alert(`User with ir: ${id} successfully deleted`)
        }else{
            throw new Error ('Fialed')
        }        } )
    .catch((error) => alert(`Something went wrong`))
}

const navigate = useNavigate();

    return (
    // <div>
    //     AxiosCrudExample

    //     <button onClick={authUser}>CRUD</button>
    // </div>
    <div>
      <div>
      <h5>Axios example</h5>
      <h5>Form whit axios n formik</h5>
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
      </div>
      <br></br>

      {/* Example button test API responses */}
        <div>
        <h5>CRUD Example whit axios</h5>
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
                Create User: 'Morpheus - Leader'
            </button>
            <button onClick={() => updateUserById(2, 'morpheus', 'zion resident')}>
                Update User: 'Morpheus'
            </button>
            <button onClick={() => deleteUserById(2)}>
                Delete User: 'Morpheus - Leader'
            </button>
        </div>
    </div>
  )
}

export default AxiosCrudExample