const axios = require('axios');

module.exports={
    fetchTodo:async (todoId)=>{
        try{
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
            return res.data;
        }catch (e) {
            return {
                error:"unable to fetch the todo"
            }
        }

    }
}