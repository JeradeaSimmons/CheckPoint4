import { ProxyState } from "../AppState.js";
import { Todos } from "../Models/Todos.js";
import { SandboxApi } from "./AxiosService.js";





class TodosService {


    async toggleComplete(todosId) {
        let todos = ProxyState.todos.find(t => t.id == todosId)

        if (!todos) {
            throw new Error('Bad todos id')
        }

        todos.completed = !todos.completed
        let todosIndex = ProxyState.todos.indexOf(todos)


        let res = await SandboxApi.put(`/jeradea/todos/${todosId}`, todos)

        let updatedTodos = new Todos(res.data)
        console.log("UPDATED RES DATA", res.data);

        ProxyState.todos.splice(todosIndex, 1, updatedTodos)
        console.log("TO DOS UPDATED", updatedTodos);
        ProxyState.todos = ProxyState.todos
        console.log('PROXY STATE', ProxyState.todos);

    }





    async getTodos() {
        let res = await SandboxApi.get('/jeradea/todos')
        ProxyState.todos = res.data.map(t => new Todos(t))
        console.log(ProxyState.todos);
    }

    async createTodos(todosFormData) {
        let res = await SandboxApi.post('/jeradea/todos', todosFormData)
        let todos = new Todos(res.data)

        ProxyState.todos = [...ProxyState.todos, todos]
    }

    async deleteTodos(Id) {
        let url = `/jeradea/todos/${Id}`
        await SandboxApi.delete(url)
        ProxyState.todos = ProxyState.todos.filter(t => t.id != Id)
        console.log(ProxyState.todos);
    }
}

export const todosService = new TodosService()