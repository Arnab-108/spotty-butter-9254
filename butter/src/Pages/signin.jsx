import { authProvider } from "../Authentication/authcontextprovider";
import { useContext, useState } from "react";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,

  } from '@chakra-ui/react';
  import { Navigate } from "react-router-dom";
  export default function Login() {
    
    const {Login , isAuth} = useContext(authProvider)
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    

    const handelSubmit=()=>{
      const userDetails = {
        email,
        password,
      }
      fetch("https://reqres.in/api/login",{
            method:"POST",
            body: JSON.stringify(userDetails),
            headers:{
                "Content-Type" : "application/json",
            },
        })
        .then((res)=>res.json())
        .then((res) => {
            alert("Login Successfull")
            Login()
            console.log(res)
        })
        .catch(()=>{
            console.log("error")
            alert("Something went wrong")
        })
    }
    if(isAuth){
      return <Navigate to="/" />
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg='gray.50'>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Babybags Welcomes You!</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg= 'white'
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={(e)=>setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handelSubmit}
                  >
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }