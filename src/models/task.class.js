import { LEVELS } from "./levels.enum";


export class Task {
    name = '';
    descripcion = '';
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, descripcion, level){

        this.name = name;
        this.descripcion = descripcion;
        this.completed = this.completed;
        this.level = level

    }
}