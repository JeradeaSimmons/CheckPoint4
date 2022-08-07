import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/ToDosService.js";
import { Pop } from "../Utils/Pop.js";




function _drawTodos() {
    let template = ''
    let todos = ProxyState.todos
    todos.forEach(t => template += t.Template)
    document.getElementById('todos').innerHTML = template

    document.getElementById('todosTop').innerHTML = `
     <p> <h4>Honey TO-DO's <br>

     <b>
     ${ProxyState.todos.filter(t => t.completed).length} /
      ${ProxyState.todos.length}
     

          

           


        </h4>
        </p>
     <input class="form-control" required type="text" name="todos">
     <button class="btn btn-small bg-dark btn-outline-light">ADD</button>



`


}



export class TodosController {

    constructor() {
        ProxyState.on('todos', _drawTodos)
        this.getTodos()

    }

    viewTodos() {
        _drawTodos()
        this.getTodos

    }
    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            console.error('[Get Todos]', error)
            Pop.error(error)
        }
    }

    async createTodos() {
        try {
            window.event.preventDefault()
            let form = window.event.target

            let newTodos = {
                description: form.todos.value

            }
            console.log(newTodos);
            await todosService.createTodos(newTodos)
            form.reset()
        }
        catch (error) {
            console.error('[Create TODoS]', error)
            Pop.error(error)
        }
    }

    adjustTodos(Id) {
        let todos = ProxyState.todos.find(t => t.id == Id)
        document.getElementById('form').innerHTML = getTodosForm(todos)
    }



    async deleteTodos(Id) {
        try {
            if (await Pop.confirm())
                todosService.deleteTodos(Id)
        } catch (error) {
            console.error('[Delete Todos]', error)
            Pop.error(error)
        }
    }


    async toggleComplete(todosId) {
        try {
            await todosService.toggleComplete(todosId)
        } catch (error) {
            console.error('[Toggle complete]', error)
            Pop.error(error)
        }
    }






}