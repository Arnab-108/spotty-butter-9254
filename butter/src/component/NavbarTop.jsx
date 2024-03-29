import {Flex,Box,Spacer,Text , Heading, HStack} from "@chakra-ui/react"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { Link as NavLink } from "react-router-dom";
import { authProvider } from "../Authentication/authcontextprovider";
import { useContext } from "react";
function NavBarTop(){
    const {Logout , isAuth} = useContext(authProvider)
    const handleClick = ()=>{
        alert("Logging Out!")
        Logout()
    }
    return (
        <>
            <Flex h="5vh" bg="blackAlpha.100" textAlign="center">
                <Box h='8'  >
                    <NavLink to="/" >
                        <Heading as="h5" size="md" color="blackAlpha.400" _hover={{ color:"blackAlpha.700" }} pt="3px"  pl="2vw" cursor="pointer">Babybags</Heading>
                    </NavLink>
                </Box>
                <Spacer />
                <Box  h='10' mt="4px">
                    <Text>Free Shipping on $35+ Orders</Text>
                </Box>
                <Spacer />
                <Box  h='8' mr="2vw" >
                    <HStack spacing="15px" pt="8px"  >
                        {
                            isAuth===false ? 
                            <NavLink to="/signin" >

                                <Flex gap='1'  _hover={{ fontWeight: 'semibold' }}>
                                        <AccountCircleOutlinedIcon fontSize="small" />
                                        <Text fontSize='xs' color="blackAlpha.700" >Sign in</Text>
                                </Flex>
                            </NavLink> :
                            <Flex gap='1'  _hover={{ fontWeight: 'semibold' }}>
                                <AccountCircleOutlinedIcon fontSize="small" />
                                <Text fontSize='xs' color="blackAlpha.700" cursor="pointer" onClick={handleClick} >Logout</Text>
                            </Flex>
                        }
                    
                        <Flex gap='1'  _hover={{ fontWeight: 'semibold' }} >
                            <WidgetsOutlinedIcon fontSize="small"/>
                            <Text fontSize='xs' color="blackAlpha.700" cursor="pointer" >Order</Text>
                        </Flex>
                        <NavLink to="/cart" >
                            <Flex gap='1' _hover={{ fontWeight: 'semibold' }}>
                                
                                    <ShoppingCartOutlinedIcon fontSize="small" />
                                    <Text fontSize='xs' color="blackAlpha.700" >Cart</Text>
                            </Flex>
                        </NavLink>
                    </HStack>
                </Box>
            </Flex>
        </>
    )
}

export default NavBarTop