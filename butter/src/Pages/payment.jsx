import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link as RouterLink } from 'react-router-dom';
  export default function Payment() {
    const [showPassword, setShowPassword] = useState(false);
    const paymentAmt = localStorage.getItem("totalPrice")
    const handelClick=()=>{
        alert("Payment Successfull!")
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Payment By Card
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Amount to be paid : ${paymentAmt}
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="cardno" isRequired>
                <FormLabel>Card Number</FormLabel>
                <Input type="number" placeholder='1234 1234 1234 1234' />
              </FormControl>
              <FormControl id="date" isRequired>
                <FormLabel>Exp Date</FormLabel>
                <Input type="date" placeholder='1234 1234 1234 1234' />
              </FormControl>
                    
              
              <FormControl id="password" isRequired>
                <FormLabel>CVV</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
                  <FormControl id="firstName" isRequired>
                      <FormLabel>Name on Card</FormLabel>
                      <Input type="text" />
                  </FormControl>
                  
                  <FormControl id="firstName" isRequired>
                      <FormLabel>Billing Address</FormLabel>
                      <Input type="text" placeholder='Country' />
                      <Input type="text" placeholder='Address' />
                  </FormControl>
              <Stack spacing={10} pt={2}>
                <RouterLink to="/cart" >
                    <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                        bg: 'blue.500',
                        }}
                        onClick={()=>handelClick()}
                        >
                    Complete Payment
                    </Button>

                </RouterLink>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }