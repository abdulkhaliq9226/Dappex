import { useNFTBalances } from "react-moralis";
import CustomContainer from "./CustomContainer";
import { useEffect } from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export default function Nft({ user }) {

    const { getNFTBalances, data } = useNFTBalances()

    useEffect(() => {
        getNFTBalances({
            params: {
                chain: "rinkeby",
                address: user.get('ethAddress')
            }
        })
    }, [])

    console.log(data)

    return (
        <CustomContainer>
            <Text fontSize="xl" fontWeight="bold">
                Your NFTs
            </Text>
            {data && data.result.map(nft => (
                <Box mt="4" px="2" py="2" borderWidth="1px" borderRadius="md" key={nft.token_uri}>
                    {nft.image && <Image src={nft.image} alt="" />}
                    <p>{nft.token_uri}</p>
                </Box>
            ))}
        </CustomContainer>
    )
}