import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'

const TaskListComponent = () => {

const defaultTask = new Task('Example', 'default description', false, LEVELS.NORMAL)

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
                                {/* TODO: iterar sobre una lista de tareas */}
                                <TaskComponent task={ defaultTask }></TaskComponent>
                            </tbody>
                        </table>
                    </div>
                </div>                
            </div>        
            <TaskComponent task={ defaultTask }></TaskComponent>    
        </div>
    );
};




export default TaskListComponent;
