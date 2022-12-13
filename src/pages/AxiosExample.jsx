import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {getRandomUser} from '../services/axios-service'

getRandomUser()

const AxiosExample= () => {

const [user, setUser] = useState(null);

useEffect(() => {
    getRandomUser()
        .then((response) => {
            if(response.status === 200){
                setUser(response.data.results)
            } 
        })
        .catch((error) => {
            alert(`Error ${error}`);
        })
},[]);

  return (
    <div><h3>AxiosExample</h3>
          {user != null ?
            (
                <div>
                    <h3>User:</h3>
                    <h3>{user.title} {user.first}</h3>
                </div>
            )
            :
            (
                <h4>Generate new user</h4>
            )
            }
        
    </div>
  );
}

export default AxiosExample