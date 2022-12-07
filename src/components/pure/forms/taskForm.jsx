import React, { useRef } from 'react';
import propTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import TaskListComponent from '../../container/task_list';

const TaskForm = ({add, lenght}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }

    const urgentStyle = {
        color: 'yelow',
        fontWeight: 'bold'
    }

    const bloquingStyle = {
        color: 'red',
        fontWeight: 'bold'
    }
        
    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input placeholder='Name' ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus></input>
                <input placeholder='Description' ref={descriptionRef} id= 'inputDescription' type='text' className='form-control form-control-lg' required></input>
                
                <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option style={normalStyle} value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option style={urgentStyle} value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option style={bloquingStyle} value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-4'>{lenght == 0 ? 'Create your first task' : 'Add task'}</button>
            </div>
        </form>
    );
}

TaskForm.propTypes = {
    add: propTypes.func.isRequired,
    lenght: propTypes.number.isRequired
}

export default TaskForm;