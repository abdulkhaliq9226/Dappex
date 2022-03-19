import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import CustomContainer from "./CustomContainer";
import { useState } from "react";
import { useMoralis } from "react-moralis";

export default function Profile({ user }) {

    const [input, setInput] = useState()
    // console.log(input)
    const { setUserData, isUserUpdating } = useMoralis()

    return (
        <CustomContainer>
            <Text><b>📛 &nbsp;UserName: </b>{user.getUsername()}</Text>
            <Text><b>🦊 &nbsp;WalletAddress:</b> {user.get('ethAddress')}</Text>
            <form onSubmit={e => {
                e.preventDefault();
                if (input.trim() !== '') {
                    setUserData({
                        username: input,
                    }).then(() => setInput(''))
                }
            }}>
                <FormControl mt="6" mb="6">
                    <FormLabel htmlFor="username">Set a new UserName</FormLabel>
                    <Input
                        id="username"
                        type="text"
                        placeholder="Enter your new UserName"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                </FormControl>
                <Button type="submit" colorScheme="orange" disabled={isUserUpdating}>✔ &nbsp; Change your UserName</Button>
            </form>
        </CustomContainer>
    )
}