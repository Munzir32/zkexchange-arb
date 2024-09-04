import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { gql, request } from "graphql-request"
import { truuncateAddress } from '~~/helpers/truncateAddress'
import { useScaffoldWriteContract } from '~~/hooks/scaffold-eth';


interface SellOrderPlaced {
    currency: string;

    orderId: any;
    seller: string;
    token: string;
    amountInCurrency: string;
    amountInToken: string;
}

interface OrderAccepted {
    blockNumber: string;
    blockTimestamp: string;
    buyer: string;
    id: string;

}

interface OrderAcceptedData {
    orderAccepteds: OrderAccepted[]
}

const Transaction = ({ seller, currency, orderId, amountInCurrency, amountInToken }: SellOrderPlaced) => {

    const query = gql`
    {
        orderAccepteds(where: {orderId: "${orderId}"}) {
    blockNumber
    blockTimestamp
    buyer
    id
  }
    }
    `

    const url = "https://api.studio.thegraph.com/query/88031/zkexchange/v0.0.1"

    const { data, status } = useQuery<OrderAcceptedData>({
        queryKey: ['data', orderId],
        async queryFn() {
            return await request(url, query)
        }
    })

    console.log(data?.orderAccepteds?.[0]?.buyer, status, "details");

    const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("Zkexchange");
    const acceptorder = async (e: any) => {
        e.preventDefault();

        try {
            await writeYourContractAsync({
                functionName: "acceptOrder",
                args: [orderId],
            });


        } catch (error) {

            console.log(error)
        }
    }

    const firstOrderAccepted = data?.orderAccepteds?.[0];
    const buyer = firstOrderAccepted?.buyer;
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
                    {buyer === undefined ? (
                        <td onClick={acceptorder} className='btn'>Accept order</td>
                    ) : (
                        <td>{truuncateAddress(buyer)}</td>
                    )}
                </tr>

            </tbody>
        </>
    )
}

export default Transaction