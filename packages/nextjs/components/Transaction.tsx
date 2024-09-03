// import { useQuery } from '@tanstack/react-query'
import React from 'react'
// import { gql, request } from "graphql-request"
import { truuncateAddress } from '~~/helpers/truncateAddress'

interface SellOrderPlaced {
    currency: string;
    
    orderId: string;
    seller: string;
    token: string;
    amountInCurrency: string;
    amountInToken: string;
  }

const Transaction = ({ seller, currency, orderId, amountInCurrency, amountInToken }: SellOrderPlaced) => {

//     const query = gql`
//     {
//         sellOrderPlaceds {
//     currency
//     id
//     orderId
//     seller
//     token
//     amountInCurrency
//     amountInToken
//   }
//     }
//     `

//     const url = "https://api.studio.thegraph.com/query/88031/zkexchange/v0.0.1"

//     const { data, status } = useQuery({
//         queryKey: ['data'],
//         async queryFn() {
//             return await request(url, query)
//         }
//     })
    return (
        <>

            <tbody>
                {/* row 1 */}
                <tr>
                    <th>{orderId}</th>
                    <td>{truuncateAddress(seller)}</td>
                    <td>{amountInCurrency}</td>
                    <td>{currency}</td>
                    <td>{amountInToken}</td>
                </tr>
                
            </tbody>
        </>
    )
}

export default Transaction