import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';


const TaskComponent = ({task}) => {
    return (

        <tr className='fw-normal'>
            <th>
                <span>{task.name}</span>
            </th>
            <th className='ms-2'>
                <span>{task.description}</span>
            </th>
            <th className='align-middle'>
                <span>{task.level}</span>
            </th>
            <th className='align-middle'>
                <span>{task.completed}</span>
            </th>

        </tr>




        // <div>
        // <h2 className='task-name'>Nombre: { task.name }</h2>
        // <h3>Descripción: { task.descripcion }</h3>
        // <h4>Level: { task.level }</h4>
        
        // <h5>This task is: { task.completed ? 'COMPLETED': 'PENDING' }</h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent;
