import { ProxyState } from "../AppState.js"





export class Todos {
  constructor(data) {
    this.completed = data.completed
    this.id = data.id
    this.description = data.description




  }



  get Template() {
    return `
        
    
    


      <section>
        <input type="checkbox" ${this.completed ? 'checked' : ''}
          onchange="app.todosController.toggleComplete('${this.id}')">
        <b> ${this.description} </b>
        <i class="no-select selectable px-2"
          onclick="app.todosController.deleteTodos('${this.id}')">❌</i>
      </section>


    
  

            
  

  
  
  
              
            
          
        `
  }


}