import {Flex,Box,Spacer, Avatar,Text, Input, HStack,InputRightElement , IconButton, InputGroup } from "@chakra-ui/react"
import babybags from "./babybags.png"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Link as NavLink} from "react-router-dom"
function NavBar(){
    return(
        <>
            <Flex minWidth='max-content' alignItems='center' gap='2' h="15vh">
                <Box p='2' ml="2vw">
                    <NavLink to="/">
                        <Avatar 
                        height="10vh"
                        width="14vw"
                        src={babybags}
                        cursor="pointer"
                        />
                    </NavLink>
                </Box>
                <Spacer />
                <Flex gap="5vw">
                    <Box cursor="pointer" _hover={{border:"4px solid grey"}}>
                        <NavLink to="/baby" >
                            <Text fontSize="lg">Baby</Text>
                            <Text fontSize='xs'>PREEMIE-24M</Text>
                        </NavLink>
                    </Box>
                    <Box cursor="pointer" _hover={{border:"4px solid grey"}}>
                        <NavLink to="/todler" >
                            <Text fontSize="lg">Toddler</Text>
                            <Text fontSize='xs'>2T-5T</Text>
                        </NavLink>
                    </Box>
                    <Box cursor="pointer" _hover={{border:"4px solid grey"}}>
                        <NavLink to="/kids" >
                            <Text fontSize="lg">Kids</Text>
                            <Text fontSize='xs'>4-14</Text>
                        </NavLink>
                    </Box>
                    <Box cursor="pointer" _hover={{border:"4px solid grey"}}>
                        <NavLink to="/newpopular" >
                            <Text fontSize="lg">New & Popular</Text>
                        </NavLink>
                    </Box>
                    <Box cursor="pointer" _hover={{border:"4px solid grey"}}>
                        <NavLink to="/hilaryduff" >
                            <Text fontSize="lg">Hilary Duff x Carter's</Text>
                        </NavLink>
                    </Box>
                </Flex>
                <Spacer />
                <Box mr="3vw">
                    <InputGroup >
                        <Input 
                        placeholder="Find your product"
                        borderRadius="15px"
                        border="1px solid grey"
                        />
                        <InputRightElement >
                            <IconButton bg="white" h="1" aria-label='Search database' icon={<SearchOutlinedIcon />} />
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </Flex>
            
        </>
    )
}

export default NavBar