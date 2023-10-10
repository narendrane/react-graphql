import { API, graphqlOperation} from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListZellerCustomers } from '../graphql/queries';

export const fetchListZellerCustomers = (setCustomers: any) => {
    return new Promise(async(resolve, reject)=>{
         try{
            const customerData: any = await API.graphql<GraphQLQuery<typeof ListZellerCustomers>>(graphqlOperation(ListZellerCustomers))
            const customers = customerData?.data?.listZellerCustomers?.items;
            resolve(setCustomers(customers));        
         }catch(e){
             reject(e);
         }
    });
}