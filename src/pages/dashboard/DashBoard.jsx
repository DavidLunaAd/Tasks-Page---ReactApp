import React from 'react';
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';
import { useNavigate  } from 'react-router-dom';

const DashBoardPage = () => {

  const history = useNavigate();

  const logout = () => {
    history('/login');
  }

  return (
    <div><h2>DashBoard</h2>
        <Button variant="contained" onClick={logout}>Logout</Button>
        <Copyright></Copyright>
    </div>
  );
}

export default DashBoardPage;