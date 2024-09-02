import React from 'react'
import Transaction from './Transaction'
import { useQuery } from '@tanstack/react-query'
import { gql, request } from "graphql-request"

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
    `

    const url = "https://api.studio.thegraph.com/query/88031/zkexchange/v0.0.1"

    const { data, status } = useQuery({
        queryKey: ['data'],
        async queryFn() {
            return await request(url, query)
        }
    })
    console.log(data, status)
  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Seller</th>
        <th>Buyer Address</th>
        <th>Currency</th>
        <th>Transaction Status</th>
      </tr>
    </thead>
   

   <Transaction />

  </table>
</div>
    </div>
  )
}

export default Transactions