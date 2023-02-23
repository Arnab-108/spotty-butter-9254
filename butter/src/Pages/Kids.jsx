import { Box, Grid, GridItem, Heading,Text ,Image, Flex, Divider, Avatar, ButtonGroup, Button,Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react"
import { useReducer, useEffect , useState } from "react"
import axios from "axios"
import KidsCard from "./kidscard"
import Footer from "./footer"
const initState = {
    products:[],
    isLoading:false,
    isErr:false,
}



const reducer = (state,action)=>{
    switch(action.type){
        case "FETCH_REQUEST":
            return {
                ...state,
                isLoading:true,
                isErr:false
            }
        case "FETCH_SUCCESS":
            return {
                ...state,
                products: action.payload,
                isLoading:false,
                isErr:false
            }
        case "FETCH_FAILURE":
            return {
                ...state,
                isLoading:false,
                isErr:true,
            }
        default :
            throw new Error()
    }
}

function Kids(){
    const [state , dispatch] = useReducer(reducer , initState)
    const [page, setPage] = useState(1)
    const [total,setTotal] = useState()
    const [orderBy , setOrderBy] = useState("")
    const sort="price"
    useEffect(()=>{
            getData()
    },[page,orderBy,sort])
    const {products,isLoading,isErr} = state

    const getData=()=>{
        dispatch({type:"FETCH_REQUEST"})
        if(orderBy){
            return axios.get(`http://localhost:8080/kids?_limit=6&_page=${page}&_sort=${sort}&_order=${orderBy}`)
            .then((res)=>{
                dispatch({type:"FETCH_SUCCESS",payload:res.data})
                setTotal(+res.headers.get('X-Total-Count'))
            })
            .catch(()=>{
                dispatch({type:"FETCH_FAILURE"})
            })
        }
        else{
            return axios.get(` http://localhost:8080/kids?_limit=6&_page=${page}`)
            .then((res)=>{
                dispatch({type:"FETCH_SUCCESS",payload:res.data})
                setTotal(+res.headers.get('X-Total-Count'))
            })
            .catch(()=>{
                dispatch({type:"FETCH_FAILURE"})
            })
        }
    }
    const handlePage=(val)=>{
        const change = page+val
        setPage(change)
    }
    if(isLoading){
        return(
            <Box padding='6' boxShadow='lg' bg='white'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
        )
    }
    console.log(products)
    return (
        <>
            <Heading as="h1" size="xl" fontWeight="semibold" color="cyan.500" mt="4vh" >Kids Clothes</Heading>
            <Text color="blackAlpha.800" fontSize="sm" mt="2vh" >Find your kids' new favorites here! These easy styles have extra-special details that let their personalities shine.</Text>

            <Box h="45vh" w="90%" m="9vh auto 4vh "  >
                <Grid gridTemplateColumns="repeat(2,1fr)" gap={8} >
                <GridItem _hover={{border:"4px solid lightgrey"}} cursor="pointer">
                        <Flex>
                            <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2022/cslp%27s/car_q1_2023_cslps/CAR_CSLPS_Q4_22_omni_Valentines_Baby.jpg?yocs=4E_4G_" w="50%" />
                            <Box width="50%" bgColor="blackAlpha.200" pt="8vh" >
                                <Heading color="cyan.500" as="h3" size="lg" fontWeight="semibold" >Family Matching</Heading>
                                <Text pt="3vh" >These looks are even better worn together. Snag sweett styles from baby to adult.</Text>
                                <Heading pt="4vh" as="h4" size="md" fontWeight="normal" _hover={{textDecoration:"underline"}} >SHOP FAMILY MATCHING</Heading>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem _hover={{border:"4px solid lightgrey"}} cursor="pointer">
                        <Flex>
                            <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2022/cslp%27s/car_q4_2022_cslps/CAR_CSLPS_Q4_22_omni_outerwear.jpg?yocs=4E_4G_" w="50%" />
                            <Box width="50%" bgColor="blackAlpha.200" pt="8vh" >
                                <Heading color="cyan.500" as="h3" size="lg" fontWeight="semibold" >Outerware Shop</Heading>
                                <Text pt="3vh" >These looks are even better worn together. Snag sweet styles from baby to adult.</Text>
                                <Heading pt="4vh" as="h4" size="md" fontWeight="normal" _hover={{textDecoration:"underline"}} >SHOP OUTERWARE</Heading>
                            </Box>
                        </Flex>
                    </GridItem>
                </Grid>
            </Box>
            <Divider />
            {/* <hr /> */}

            <Box h="30vh" width="20%" m=" 4vh auto 5vh" >
                <Heading as="h3" size="lg" fontWeight="semibold" color="cyan.500" >Shop By Price</Heading>
                <Grid gridTemplateColumns="repeat(2,1fr)" gap={1} >
                    <GridItem pt="2vh" cursor="pointer" >
                        <Avatar h="13vh" w="65%" bg="cyan.500" name="High Low" onClick={()=>setOrderBy("acs")}>
                            {/* <Heading as="h5" size="sm" fontWeight="semibold" color="white" >High To Low</Heading> */}
                        </Avatar>
                    </GridItem>
                    <GridItem pt="2vh" cursor="pointer" >
                        <Avatar h="13vh" w="65%" bg="cyan.500" name="Low High" color="white" onClick={()=>setOrderBy("desc")}>
                            {/* <Heading as="h5" size="sm" color="white" fontWeight="semibold">High To Low</Heading> */}
                        </Avatar>
                    </GridItem>
                </Grid>
            </Box>
            <Divider />

            <Box width="95%" m=" 4vh auto 10vh">
                <Heading as="h3" size="lg" fontWeight="semibold" color="cyan.500" >Shop Now!</Heading>
                <Grid gridTemplateColumns="repeat(3,1fr)" gap={5} pt="5vh" >
                    {
                        products.map((el)=>(
                            <KidsCard 
                                id={el.id}
                                title={el.title}
                                image={el.image}
                                price={el.price}
                                price_2={el.price_2}
                            />
                        ))
                    }
                </Grid>
                <ButtonGroup>
                    <Button isDisabled={page===1} onClick={()=>handlePage(-1)} >Pre</Button>
                    <Button>{page}</Button>
                    <Button isDisabled={page===Math.ceil(total/6)} onClick={()=>handlePage(1)} >Next</Button>
                </ButtonGroup>
            </Box>
            <Box w="90%" m="15vh auto 4vh "  >
                <Grid gridTemplateColumns="repeat(2,1fr)" gap={8} >
                <GridItem _hover={{border:"4px solid lightgrey"}} cursor="pointer">
                        <Flex>
                            <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2022/cslp%27s/car_q3_2022_cslps/CAR_CSLPS_Q3_22_LCT.jpg?yocs=4E_4G_" w="51%" />
                            <Box width="49%" bgColor="blackAlpha.200" pt="8vh" >
                                <Heading color="cyan.500" as="h3" size="lg" fontWeight="semibold" >Licensed Character Shop</Heading>
                                <Text pt="3vh" fontSize="sm" textAlign="center" >So they can wear their favourite friends on their tees.</Text>
                                <Heading pt="4vh" as="h4" size="md" fontWeight="normal" _hover={{textDecoration:"underline"}} >SHOP CHARACTER STYLES</Heading>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem _hover={{border:"4px solid lightgrey"}} cursor="pointer">
                        <Flex>
                            <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2022/cslp%27s/car_q3_2022_cslps/CAR_CSLPS_Q3_22_LFT.jpg?yocs=4E_4G_" w="50%" />
                            <Box width="50%" bgColor="blackAlpha.200" pt="8vh" >
                                <Heading color="cyan.500" as="h3" size="lg" fontWeight="semibold" >Licensed Fan Shop</Heading>
                                <Text fontSize="sm" textAlign="center" pt="3vh" >These looks are even better worn together. Snag sweet styles from baby to adult.</Text>
                                <Heading pt="4vh" as="h4" size="md" fontWeight="normal" _hover={{textDecoration:"underline"}} >SHOP OUTERWARE</Heading>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem _hover={{border:"4px solid lightgrey"}} cursor="pointer">
                        <Flex>
                            <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2022/cslp%27s/car_q3_2022_cslps/CAR_CSLPS_Q3_22_Doorbusters.jpg?yocs=4E_4G_" w="50%" />
                            <Box width="50%" bgColor="blackAlpha.200" pt="8vh" >
                                <Heading color="cyan.500" as="h3" size="lg" fontWeight="semibold" >Doorbusters</Heading>
                                <Text fontSize="sm" textAlign="center" pt="3vh" >Deals going on right now. Grab them before they're gone!</Text>
                                <Heading pt="4vh" as="h4" size="md" fontWeight="normal" _hover={{textDecoration:"underline"}} >SHOP DOORBUSTERS</Heading>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem _hover={{border:"4px solid lightgrey"}} cursor="pointer">
                        <Flex>
                            <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2022/cslp%27s/car_q3_2022_cslps/CAR_CSLPS_Q3_22_Clearance.jpg?yocs=4E_4G_" w="50%" />
                            <Box width="50%" bgColor="blackAlpha.200" pt="8vh" >
                                <Heading color="cyan.500" as="h3" size="lg" fontWeight="semibold" >Clearence</Heading>
                                <Text fontSize="sm" textAlign="center" pt="3vh" >Score big savings! We are always adding new things.</Text>
                                <Heading pt="4vh" as="h4" size="md" fontWeight="normal" _hover={{textDecoration:"underline"}} >SHOP CLEARENCE</Heading>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem _hover={{border:"4px solid lightgrey"}} cursor="pointer">
                        <Flex>
                            <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2022/cslp%27s/car_q3_2022_cslps/CAR_CSLPS_Q3_22_NewArrivals.jpg?yocs=4E_4G_" w="50%" />
                            <Box width="50%" bgColor="blackAlpha.200" pt="8vh" >
                                <Heading color="cyan.500" as="h3" size="lg" fontWeight="semibold" >New Arrivals</Heading>
                                <Text fontSize="sm" textAlign="center" pt="3vh" >Style drop! See what's fresh.</Text>
                                <Heading pt="4vh" as="h4" size="md" fontWeight="normal" _hover={{textDecoration:"underline"}} >SHOP NEW ARRIVAL</Heading>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem _hover={{border:"4px solid lightgrey"}} cursor="pointer">
                        <Flex>
                            <Image src="https://s7img.carters.com/is/image/carters/CAR_Q1_2022_giftcards_evergreen" w="50%" />
                            <Box width="50%" bgColor="blackAlpha.200" pt="8vh" >
                                <Heading color="cyan.500" as="h3" size="lg" fontWeight="semibold" >Gift Cards</Heading>
                                <Text fontSize="sm" textAlign="center" pt="3vh" >Gifting made easy.Always the perfect fit!</Text>
                                <Heading pt="4vh" as="h4" size="md" fontWeight="normal" _hover={{textDecoration:"underline"}} >SHOP NEW ARRIVAL</Heading>
                            </Box>
                        </Flex>
                    </GridItem>
                </Grid>
            </Box>
            <Box h="90vh" w="80%" m="auto" >
                <Heading as="h1" size="xl" fontWeight="normal" color="cyan.500" mt="4vh"> Life with Kids</Heading>
                <Text color="blackAlpha.800" fontSize="sm" mt="2vh" >Parenting tips that help answer those how-to questions we have about life with kids.</Text>

                <Flex w="100%" justifyContent="center" mt="4vh" h="60vh" >
                        <Image src="https://s7img.carters.com/is/image/carters/CART271" w="35%" cursor="pointer" />
                        <Box width="65%" bgColor="blackAlpha.200" pt="20vh" >
                            <Heading  as="h3" size="lg" fontWeight="normal" >Build a Winter Capsule Wardrobe for Your Child</Heading>
                            <Text fontSize="sm" textAlign="center" pt="1vh" >Creating a capsule wardrobe for babies and children is a great way to reduce the amount of clothing clutter in your home, leaving you with just what your child needs for the season.</Text>
                        </Box>
                </Flex>
                
            </Box>
            
            <Footer />
        </>
    )
}

export default Kids