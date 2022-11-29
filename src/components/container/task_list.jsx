import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'

const TaskListComponent = () => {

const defaultTask = new Task('Example', 'Default descrption', false, LEVELS.NORMAL)

    return (
        <div>
            <div>
                <h1>Your task:</h1>
            </div>        
            <TaskComponent task={ defaultTask }></TaskComponent>    
        </div>
    );
};




export default TaskListComponent;
