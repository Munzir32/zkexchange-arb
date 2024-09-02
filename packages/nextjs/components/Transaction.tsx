// import { useQuery } from '@tanstack/react-query'
import React from 'react'
// import { gql, request } from "graphql-request"


const Transaction = () => {

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
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                </tr>
            </tbody>
        </>
    )
}

export default Transaction