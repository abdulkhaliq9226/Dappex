import { Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Header({ user, logout, isLoggingOut }) {

    return (
        <header>
            <Flex justifyContent="space-between" bg="orange.400" color="white" px="10" py="6">
                <Center>
                    <Text fontSize="xl" fontWeight="bold">
                        Welcome to Dappex
                    </Text>
                </Center>
                <Center>
                    <Text>{user.getUsername()}</Text>
                    <Button
                        ml="4" colorScheme="orange"
                        onClick={logout}
                        disabled={isLoggingOut}
                    >
                        LogOut
                    </Button>
                </Center>
            </Flex>
        </header>
    )
} 
