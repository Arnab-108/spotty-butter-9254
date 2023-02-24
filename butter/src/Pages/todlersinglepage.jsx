import { useState , useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./footer";
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
    Skeleton, SkeletonCircle, SkeletonText
  } from '@chakra-ui/react';
  import LocalShippingIcon from '@mui/icons-material/LocalShipping';
//   import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
//   import { MdLocalShipping } from 'react-icons/md';
  
  export default function TodlerSinglePage() {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [err,setErr] = useState(false)
    const {id} = useParams()
    useEffect(()=>{
        getData()
    },[])
    const getData=()=>{
        setLoading(true)
        axios.get(`http://localhost:8080/toddler/${id}`)
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
    if(loading){
        return(
            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
        )
    }
    const handleClick=()=>{
      axios({
        method:"post",
        url:"http://localhost:8080/cart",
        data:{
          title:data.title,
          image:data.image,
          color:data.color,
          price:data.price,
          price_2:data.price_2,
          description:data.description,
          features1:data.features1,
          features2:data.features2,
          features3:data.features3
        }
      }).then((res)=>{
        alert("Successfully Added!")
        console.log(res)
      })
    }
    console.log(data)
    return (
      <>
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
                            color='gray.900'
                            fontWeight={300}
                            fontSize={'md'}
                            textDecoration={'line-through'}
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
                    color='gray.900'
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
                    color='gray.900'
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
                      borderColor='gray.200'
                    />
                  }
                  >
                  <VStack spacing={{ base: 4, sm: 6 }} >
                    <Text
                      color='gray.500'
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
                      color='yellow.500'
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
                      color='yellow.500'
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
                  bg='gray.900'
                  color='white'
                  textTransform={'uppercase'}
                  _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: 'lg',
                  }}
                  onClick={handleClick}
                  >
                  Add to cart
                </Button>
      
                <Stack direction="row" alignItems="center" justifyContent={'center'}>
                  <LocalShippingIcon />
                  <Text>2-3 business days delivery</Text>
                </Stack>
              </Stack>
            </SimpleGrid>
          </Container>
          <Footer />
      </>
    );
  }