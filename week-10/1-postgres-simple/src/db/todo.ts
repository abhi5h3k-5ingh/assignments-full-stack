import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    try{
        await client.connect();
        const query="Insert into todo(userId, title, description) values($1, $2, $3)";
        const values=[userId, title, false, description];
        const result=client.query(query, values);
        return result;
    }
    catch(err){
        return err;
    }
    finally{
        client.end();
    }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try{
        await client.connect();
        const query="select * from users where id=$1";
        const result=await client.query(query, [todoId]);
        if(result.rows.length>0){
            result.rows[0].done=true;
            return result;
        }
        else   
            return -1;
    }
    catch(err){
        return err;
    }
    finally{
        client.end();
    }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    try{
        await client.connect();
        const query="select * from users where id=$1";
        const result=await client.query(query, [userId]);
        return result;
    }
    catch(err){
        return err;
    }
    finally{
        client.end();
    }
}