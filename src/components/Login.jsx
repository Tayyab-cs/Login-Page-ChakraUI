import React from "react";
import { Flex, Box, IconButton, useColorMode, Heading, Text, Link, FormControl, FormLabel, FormHelperText, Input, HStack, Checkbox, Button } from "@chakra-ui/react";

export default function Login() {
    return (
        <Flex minHeight={'100vh'} align={"center"} justifyContent={"center"}>
            <Box width={"full"} maxWidth={'600px'} borderWidth={1} padding={8} rounded={"lg"} boxShadow={"outline"} p={6}>
                <ThemeSelector/>
                <Box>
                    <LoginHeader/>
                    <LoginForm/>
                </Box>
            </Box>
        </Flex>
    )
}

var COLOR_VARIENT = 'teal';
const ThemeSelector = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box textAlign={"right"}>
            <IconButton icon={colorMode === 'light' ? 'moon' : 'sun'} onClick={toggleColorMode}/>
        </Box>
    )
}

const LoginHeader = () => {
    return(
        <Box textAlign={"center"}>
            <Heading>Sign In to Your Account</Heading>
            <Text align={"center"}>
                Or <Link color={`${COLOR_VARIENT}.500`}>start your 14 days trial</Link>
            </Text>
        </Box>
    )
}

const LoginForm = () => {
    return(
        <Box my={8}>
            <form>
                <FormControl>
                    <FormLabel>Email Address</FormLabel>
                    <Input type="email" placeholder="email address" />
                    <FormHelperText>Enter your email address.</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="password" />
                    <FormHelperText>Enter your password.</FormHelperText>
                </FormControl>
                <HStack justifyContent={"space-between"} mt={2}>
                    <Box>
                        <Checkbox>Remember me</Checkbox>
                    </Box>
                    <Box>
                        <Link color={`${COLOR_VARIENT}.500`}>Forget password?</Link>
                    </Box>
                </HStack>
                <Button width={"full"} mt={6} p={6} colorScheme='teal' variant='solid'>Sign In</Button>
            </form>
        </Box>
    )
}