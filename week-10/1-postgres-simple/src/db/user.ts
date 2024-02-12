import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    try{
        await client.connect();
        const query="Insert into users(username, password, name) values ($1, $2, $3)";
        const values=[username, password, name];
        const result=await client.query(query, values);
        return {username, password, name};
    }
    catch(err){
        return err;
    }
    finally{
        await client.end();
    }

}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try{
        await client.connect();
        const query="Select * from users where userId=$1"
        const result=await client.query(query, [userId]);
        if(result.rows.length>0)
            return result.rows[0];
        else
            return -1;
    }
    catch(err){
        return err;
    }
    finally{
        await client.end();
    }
}
