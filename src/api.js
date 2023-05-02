const baseURL = 'http://localhost:3001'

export const api = {

    addNewTask: async (task)=>{
        console.log('a tesk em questao é : ', task)
        const response = await fetch('http://localhost:3001/task',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        const json = await response.json()
        console.log(json)
        return [json]
    },

    getTasksByTypes: async (type)=>{
        const response = await fetch(`http://localhost:3001/task/${type}`)
        const json = await response.json()
        return json

    },

    removeTaskById: ()=>{

    },
    changeTaskType: ()=>{

    }


}