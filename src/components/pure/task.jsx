import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({task, complete, remove}) => {

    const completed = () =>(<i onClick={() => complete(task)}className="bi-toggle-on task-action" style={{color: 'green' , fontWeight: 'bold'}}></i>);
    const pending = () => (<i onClick={() => complete(task)} className="bi-toggle-off task-action" style={{color: 'grey'}}></i>);


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


    const taskCompleted = {
        color: 'grey',
        textDecoration: 'line-through'
    }

    const taskPending = {
        fontWeight: 'bold',
        color: 'tomato'
    }



    return (

        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <td >
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
                <i onClick={() => remove(task)} className='bi bi-trash task-action' style={{color: 'tomato'}}></i>
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
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default TaskComponent;
