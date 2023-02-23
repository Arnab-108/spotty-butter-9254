import { useState , useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Spacer,
  } from '@chakra-ui/react';
  import LocalShippingIcon from '@mui/icons-material/LocalShipping';
//   import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
//   import { MdLocalShipping } from 'react-icons/md';
  
  export default function BabySinglePage() {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [err,setErr] = useState(false)
    const {id} = useParams()
    useEffect(()=>{
        getData()
    },[])
    const getData=()=>{
        setLoading(true)
        axios.get(`http://localhost:8080/baby/${id}`)
        .then((res)=>{
            console.log(res)
            setData(res.data)
            setLoading(false)
        })
        .catch(()=>{
            setLoading(false)
            setErr(true)
        })
    }
    console.log(data)
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={data?.image}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box >
                <Flex gap={3} justifyContent="left" >
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                        ${data?.price}
                    </Heading>
                    <Text
                        color={useColorModeValue('gray.900', 'gray.400')}
                        fontWeight={300}
                        fontSize={'md'}
                        as='s'
                        >
                        ${data?.price_2}
                    </Text>
                </Flex>
              
              <Text
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '3xl' }}
                mt="4vh"
                textAlign="left"
                >
                {data?.title}
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'sm'}
                textAlign="left"
                >
                Doorbuster
              </Text>
              {/* <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'md'}
                as='s'
                >
                ${data?.price_2}
              </Text> */}
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={600}
                fontSize={'lg'}
                // mt="3vh"
                textAlign="left"
                >
                Color: {data?.color}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }
              >
              <VStack spacing={{ base: 4, sm: 6 }} >
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}
                //   mb="2vh"
                  textAlign="left"
                  >
                  {data?.description}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem fontSize="sm">1st</ListItem>
                    <ListItem fontSize="sm">2nd</ListItem>{' '}
                    <ListItem fontSize="sm">3rd</ListItem>
                  </List>
                  <List spacing={1}>
                    <ListItem fontSize="sm" >{data?.features1}</ListItem>
                    <ListItem fontSize="sm">{data?.features2}</ListItem>
                    <ListItem fontSize="sm">{data?.features3}</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Between lugs:
                    </Text>{' '}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Bracelet:
                    </Text>{' '}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case:
                    </Text>{' '}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case diameter:
                    </Text>{' '}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dial color:
                    </Text>{' '}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Crystal:
                    </Text>{' '}
                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                    treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    5 bar (50 metres / 167 feet){' '}
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <LocalShippingIcon />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }