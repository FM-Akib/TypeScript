{
    const createPromise = () =>{
        return new Promise((resolve, reject) =>{
            const data:string = "Something"
          if(data){
            resolve(data)
          }
          else {
            reject("Failed To Load Data!")
          }
        })

    }

    const showData = async () => {
        const data = await createPromise()
        console.log(data)
    }
    showData()


    //To bring Data from API 
    type Todo = {
        id: number;
        title: string;
        completed: boolean;
    }
    

    const getToDo = async () :Promise<Todo> => {
        const response = await fetch(`https://api.com`)
        const todo: Todo = await response.json();
        return todo;
    }
    getToDo()

    //else
  
    
    const getToDo2 = async (): Promise<Todo> => {
        try {
            const response = await fetch(`https://api.com/todos/1`);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const todo: Todo = await response.json();
            return todo;
        } catch (error) {
            console.error("Failed to fetch the to-do item:", error);
            throw error;
        }
    };
    
    getToDo2().then(todo => console.log(todo)).catch(error => console.error(error));
    
}