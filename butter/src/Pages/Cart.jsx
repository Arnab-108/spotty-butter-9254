import {useState,useEffect} from "react"
import axios from "axios"
import CartCard from "./cartcard"
import { Heading , Grid , GridItem , Box} from "@chakra-ui/react"
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import {
   Alert,
   AlertIcon,
   AlertTitle,
   AlertDescription,
 } from '@chakra-ui/react'
import Footer from "./footer"
const getData = ()=>{
   return axios.get(` http://localhost:8080/cart`)
}

function Cart(){
   const [data,setData] = useState([])
   const [loading,setLoading]=useState(false)
   const [err,setErr]=useState(false)

   useEffect(()=>{
      fetchAndUpdateData()
   },[])

   const fetchAndUpdateData = async()=>{
   setLoading(true)
   try {
      const data = await getData()
      setData(data)
      setLoading(false)
   } catch (error) {
      setLoading(false)
      setErr(true)
   }

   }
   const handleDelete = (id)=>{
      axios({
         method:"delete",
         url:`http://localhost:8080/Cart/${id}`
      }).then(()=>{
         alert("Deleted Successfully!")
         fetchAndUpdateData()
      })
   }
   if(loading){
      return (
         <Box padding='6' boxShadow='lg' bg='white'>
            <SkeletonCircle size='10' />
            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
         </Box>
      )
   }
   if(err){
      return(
         <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Your browser is outdated!</AlertTitle>
            <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
         </Alert>
      )
   }  
   console.log(data)
   return(
         <>
            <Box>
                <Heading color="cyan.600" as="h2" size="2xl" fontWeight="semibold" mt="5vh" >Your Cart</Heading>
                <Grid
                 gridTemplateColumns="repeat(1,1fr)"
                 gap={6}
                 width="100%"
                 mt="5vh"
                 mb="5vh"
                >
                    {
                        data?.data?.map((el)=>(
                            <GridItem>
                                <CartCard 
                                    id = {el.id}
                                    title = {el.title}
                                    image={el.image}
                                    color={el.color}
                                    price={el.price}
                                    price_2={el.price_2}
                                    description={el.description}
                                    handleDelete={handleDelete}
                                />
                            </GridItem>
                        ))
                    }
                </Grid>
            </Box>

            <Footer />
        </>
   )
    
}

export default Cart