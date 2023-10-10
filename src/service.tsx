import { API, graphqlOperation} from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListZellerCustomers } from './graphql/queries';

export const fetchListZellerCustomers = (setCustomers: any) => {
    return new Promise(async(resolve, reject)=>{
         try{
            const todoData: any = await API.graphql<GraphQLQuery<typeof ListZellerCustomers>>(graphqlOperation(ListZellerCustomers))
            const todos = todoData?.data?.listZellerCustomers?.items;
            console.log(todos);
            resolve(setCustomers(todos));        
         }catch(e){
             reject(e);
         }
    });
}