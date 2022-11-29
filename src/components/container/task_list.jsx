import React, { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

const defaultTask1 = new Task('Example1', 'default description', true, LEVELS.BLOCKING);
const defaultTask2 = new Task('Example2', 'default description', false, LEVELS.NORMAL);
const defaultTask3 = new Task('Example3', 'default description', false, LEVELS.URGENT);



const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    setLoading(false)
    return () => {
        console.log('TaskList component is going to unmount')
    };
}, [tasks]);


    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                {/* Card header */}
                    <div className='card-header p-3'>
                        <h5>Your task</h5>
                    </div>
                    {/* Card Body */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ { position: 'relative', height: '400px'}}>
                        <table>
                            <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                            </thead>
                            <tbody>

                            {tasks.map((task, index) => {
                                return(
                                    <TaskComponent key ={index} 
                                        task={ task }>
                                    </TaskComponent>
                                )
                            })}                                
                            </tbody>
                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>                
            </div>        
        </div>
    );
};




export default TaskListComponent;
