import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({task}) => {

    const completed = () =>(<i className="bi-toggle-on" style={{color: 'green' , fontWeight: 'bold'}}></i>);
    const pending = () => (<i className="bi-toggle-off" style={{color: 'grey'}}></i>);


    function taskLevelBadge(){
        switch (task.level){
            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            Normal
                        </span>
                    </h6>
                )
                case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            Urgent
                        </span>
                    </h6>
                )
                case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            Blocking
                        </span>
                    </h6>
                )
                default:
                    break;
        }
    }

    return (

        <tr>
            <td className='fw-normal'>
                <span>{task.name}</span>
            </td>
            <td className='ms-2'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
               {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {task.completed ? completed() : pending()}
                <i className='bi bi-trash' style={{color: 'tomato'}}></i>
            </td>

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
