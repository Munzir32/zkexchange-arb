import React from 'react';
import Transaction from './Transaction';
import { useQuery } from '@tanstack/react-query';
import { gql, request } from "graphql-request";

// Define the structure of your data
interface SellOrderPlaced {
  currency: string;
  id: string;
  orderId: string;
  seller: string;
  token: string;
  amountInCurrency: string;
  amountInToken: string;
}

interface SellOrderPlacedsData {
  sellOrderPlaceds: SellOrderPlaced[];
}

const Transactions = () => {

  const query = gql`
    {
      sellOrderPlaceds {
        currency
        id
        orderId
        seller
        token
        amountInCurrency
        amountInToken
      }
    }
  `;

  const url = "https://api.studio.thegraph.com/query/88031/zkexchange/v0.0.1";

  const { data, status } = useQuery<SellOrderPlacedsData>({
    queryKey: ['data'],
    async queryFn() {
      return await request(url, query);
    }
  });

  console.log(data?.sellOrderPlaceds, status);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Amount Currency</th>
              <th>Currency</th>
              <th>Token Amount</th>
              <th>Buyer</th>

            </tr>
          </thead>
          {status === 'pending' ? (  
      <div>Loading...</div>  
    ) : status === 'error' ? (  
      <div>Error occurred querying the Subgraph</div>  
    ) : (

        <>
        {(data?.sellOrderPlaceds ?? []).map((item) => 
             (
            <Transaction key={item.orderId} 
            currency={item.currency}
            amountInCurrency={item.amountInCurrency}
            amountInToken={item.amountInToken}
            orderId={item.orderId}
            token={item.token}
            seller={item.seller}  />
            )
        )}
        
        </>
    )}


        </table>
      </div>
    </div>
  );
};

export default Transactions;
