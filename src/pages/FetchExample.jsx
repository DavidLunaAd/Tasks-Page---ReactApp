import React, { useEffect } from 'react'
import { useState } from 'react'
import { getAllPagedUsers, getAllUsers, getUserDetails, login } from '../services/fetchService';


function FetchExample() {
  
  const[users, setUsers] = useState([]);
 const [selectedUser, setSelectedUser] = useState(null);
  const[pages, setPages] = useState(2);
  const [usersPerPage, setUsersPerPage] = useState(6);
  const [totalUsers, setTotalUsers] = useState(12);


  useEffect(() => {
    obtainUsers();
  }, []);

  const obtainUsers = () => {
    getAllUsers()
            .then((response) => {
                console.log('All users', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page)
            })
            .catch((error) => {
                alert('Error: ${error}')
            })
            .finally(() => {
                console.log('Ended obtain users:');
                console.table(users);
            });
  }

  const obtainPagedUsers = (page) => {
    getAllPagedUsers(page)
        .then((response) => {
            console.log('All page users', response.data);
            setUsers(response.data);
            setPages(response.total_pages);
            setTotalUsers(response.total);
            setUsersPerPage(response.per_page)
            })
    .catch((error) => {
        alert('Error: ${error}')
    })
    .finally(() => {
        console.log('Ended obtain users:');
        console.table(users);
    });
  }
  

  const obtainUserDetails = (id) => {
    getUserDetails(id)
        .then((response) => {
            console.log('User', response.data);
            setSelectedUser(response.data)
            })
    .catch((error) => {
        alert('Error: ${error}')
    })
    .finally(() => {
        console.log('Ended obtain users:');
        console.table(selectedUser);
    });
  }

  const authUser = (email, password) => {
    login('eve.holt@reqres.in', 'cityslicka')
    .then((response) => {
        console.log('Token', response.token);
        sessionStorage('token', response.token)
        })
        .catch((error) => {
            alert('Error login: ${error}')
        })
        .finally(() => {
            console.log('Ended login user:');
        });
  }
  
    return (
    <div>
        <h2>Fetch Example</h2>
        {users.map((user, index) =>(
            <p key={index} onClick={() => obtainUserDetails(index)}>
                {user.first_name} {user.last_name}
            </p>))
        }
        <p>Showing {usersPerPage} users of {totalUsers}</p>
        
        <button onClick={() => obtainPagedUsers(1)}>1</button>
        <button onClick={() => obtainPagedUsers(2)}>2</button>

        <div>
            <h3>User Details</h3>
            {selectedUser != null ? (
                <div> 
                    <p>Name: {selectedUser.first_name}</p>
                    <p>Lastname: {selectedUser.last_name}</p>
                    <img alt='Avatar' src={selectedUser.avatar} style={{height:'100px', width:'100px'}}/>
                </div>
                ) : 
                (<h6>Please select a user to see details</h6>)}
        </div>
        {/* Login button  */}
        <button onClick={authUser}>Auth User</button>
    </div>
  )
}

export default FetchExample