import CustomContainer from "./CustomContainer";
import { useState, useEffect } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import { Divider, Link, Text } from "@chakra-ui/react";

export default function Transactions({ user }) {

    const Web3Api = useMoralisWeb3Api()
    const [transactions, setTransactions] = useState([])
    const BASE_URL = "https://rinkeby.etherscan.io/tx/"

    const fetchTransactions = async () => {
        const data = await Web3Api.account.getTransactions({
            chain: "rinkeby",
            address: user.get('ethAddress'),
            limit: 5
        })
        if (data) {
            setTransactions(data.result)
        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    // console.log(transactions)

    return (
        <CustomContainer>
            <Text fontSize="xl" mb="6" fontWeight="bold">
                Last 5 Transactions Made
            </Text>
            {transactions && transactions.map(transaction => (
                <div key={transaction.hash}>
                    <Link href={`${BASE_URL}${transaction.hash}`} isExternal>↔&nbsp; {transaction.hash}</Link>
                    <Divider />
                </div>
            ))}
        </CustomContainer>
    )
}