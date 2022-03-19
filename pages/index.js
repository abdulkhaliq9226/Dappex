import { Box, Button, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import Head from "next/head"
import { useMoralis } from "react-moralis"
import Balance from "../components/Balance"
import Header from "../components/Header"
import Nft from "../components/Nft"
import Profile from "../components/Profile"
import Send from "../components/Send"
import Transactions from "../components/Transactions"

export default function Home() {

  const { isAuthenticated, authenticate, user, logout, isLoggingOut } = useMoralis()
  // console.log(isAuthenticated)
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Login | Dappex</title>
        </Head>
        <Flex direction="column" justifyContent="center" alignItems="center" width="100vw" height="100vh" bgGradient="linear(to-br, teal.400, orange.300)">
          <Text fontSize="5xl" fontWeight="bold" color="white">
            Dappex
          </Text>
          <Button
            onClick={() => authenticate({
              signingMessage: "Would you like to sign in to Dappex"
            })}
            colorScheme="orange" size="lg" mt="6"
          >
            Login with your Metamask Wallet
          </Button>
        </Flex>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Dappex</title>
      </Head>
      <Flex direction="column" width="100vw" height="100vh">
        <Header user={user} logout={logout} isLoggingOut={isLoggingOut} />
        <Box flex="1" bg="orange.100" px="44" py="20">
          <Tabs size="lg" colorScheme="orange" align="center" variant="enclosed">
            <TabList>
              <Tab fontWeight="bold">Your Profile</Tab>
              <Tab fontWeight="bold">Balance</Tab>
              <Tab fontWeight="bold">Your Transactions</Tab>
              <Tab fontWeight="bold">NFTs</Tab>
              <Tab fontWeight="bold">Send ETH</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Profile user={user} />
              </TabPanel>
              <TabPanel>
                <Balance user={user} />
              </TabPanel>
              <TabPanel>
                <Transactions user={user} />
              </TabPanel>
              <TabPanel>
                <Nft user={user} />
              </TabPanel>
              <TabPanel>
                <Send />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  )
}
