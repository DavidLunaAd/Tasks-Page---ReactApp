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
    setTimeout(() => {
        setLoading(false)
    },2000);
    return () => {
        console.log('TaskList component is going to unmount')
    };
}, [tasks]);

    function completeTask(task){
        console.log('Complete this task', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Delete this task', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Add this task', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);

    }

    const Table = () => {
        return(
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
                            task={ task }
                            complete={completeTask}
                            remove={deleteTask}>
                        </TaskComponent>
                    )
                })}                                
                </tbody>
            </table>
        )
    }

    let tasksTable

    if (tasks.length > 0){
        tasksTable = <Table></Table>
    }else{
        tasksTable = (
        <div>
            <h3>No hay tareas que mostrar</h3>
            <h4>Puedes crear nuevas tareas </h4>
        </div>)
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '20px',
        fontWeight: 'bold'

    }

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
                        {loading ? <p style={loadingStyle}>Cargando tareas...</p> : tasksTable}
                    </div>
                </div>                
            </div>        
            <TaskForm add={addTask} lenght={tasks.length}></TaskForm>
        </div>
    );
};




export default TaskListComponent;
