import { Avatar, Box , ButtonGroup,Button, Grid , GridItem, Text, VStack , Image, Heading} from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"
import {Link as NavLink} from "react-router-dom"
import Footer from "./footer"
function Home(){
    return (
        <>
            
             <Box
                bgImage="url('https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.293/content/dam/ecomm/ec_creative_carters/2023/cadence/022123/022123/car_desktop_022123_slot2.png?yocs=4G_')"
                bgPosition="center"
                bgSize="contain"
                bgRepeat="no-repeat"
                h="100vh"
                w="100%"
                pos="relative"
                bottom="2vh"
                cursor="pointer"
            >
            </Box>
            <Box h="45vh" w="100%" >
                <Grid gridTemplateColumns="repeat(6,1fr)" gap={4}>
                    <GridItem h="100%" cursor="pointer" >
                        <VStack>
                            <Avatar  
                                size="3xl"
                                name="BABY GIRL"
                                src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2023/projects/q1-cs-faces/desktop_csfaces_bg.png?yocs=4G_4I_"
                            />
                            <Text as='u'>BABY GIRL</Text>
                        </VStack>
                       
                    </GridItem>
                    <GridItem h="100%" cursor="pointer" >
                        <VStack>
                            <Avatar  
                                size="3xl"
                                name="BABY GIRL"
                                src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2023/projects/q1-cs-faces/desktop_csfaces_bb.png?yocs=4G_4I_"
                            />
                            <Text as='u'>BABY BOY</Text>
                        </VStack>
                       
                    </GridItem>
                    <GridItem h="100%" cursor="pointer" >
                        <VStack>
                            <Avatar  
                                size="3xl"
                                name="BABY GIRL"
                                src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2023/projects/q1-cs-faces/desktop_csfaces_tg.png?yocs=4G_4I_"
                            />
                            <Text as='u'>TODDLER GIRL</Text>
                        </VStack>
                       
                    </GridItem>
                    <GridItem h="100%" cursor="pointer">
                        <VStack>
                            <Avatar  
                                size="3xl"
                                name="BABY GIRL"
                                src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2023/projects/q1-cs-faces/desktop_csfaces_tb.png?yocs=4G_4I_"
                            />
                            <Text as='u'>TODDLER BOY</Text>
                        </VStack>
                       
                    </GridItem>
                    <GridItem h="100%" cursor="pointer" >
                        <VStack>
                            <Avatar  
                                size="3xl"
                                name="BABY GIRL"
                                src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2023/projects/q1-cs-faces/desktop_csfaces_g.png?yocs=4G_4I_"
                            />
                            <Text as='u'>KID GIRL</Text>
                        </VStack>
                       
                    </GridItem>
                    <GridItem h="100%" cursor="pointer" >
                        <VStack>
                            <Avatar  
                                size="3xl"
                                name="BABY GIRL"
                                src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2023/projects/q1-cs-faces/desktop_csface_b.png?yocs=4G_4I_"
                            />
                            <Text as='u'>KID BOY</Text>
                        </VStack>
                       
                    </GridItem>
                </Grid>
            </Box>
            <Box>
                <ButtonGroup gap="1">
                    <Button w="13vw" borderRadius="4px" colorScheme="blackAlpha" variant="outline" >
                        <NavLink to="/baby" >
                            <Text color="black" >BABY GIRL</Text>  
                        </NavLink>
                    </Button>
                    <Button w="13vw" borderRadius="4px" colorScheme="blackAlpha" variant="outline" >
                    <NavLink to="/baby" >
                        <Text color="black" >BABY BOY</Text>  
                    </NavLink>
                    </Button>
                    <Button w="13vw" borderRadius="4px" colorScheme="blackAlpha" variant="outline" >
                    <NavLink to="/todler" >
                        <Text color="black" >TODLER GIRL</Text>  
                    </NavLink>
                    </Button>
                    <Button w="13vw" borderRadius="4px" colorScheme="blackAlpha" variant="outline" >
                    <NavLink to="/todler" >
                        <Text color="black" >TODLER BOY</Text>  
                    </NavLink>
                    </Button>
                    <Button w="13vw" borderRadius="4px" colorScheme="blackAlpha" variant="outline" >
                    <NavLink to="/kids">
                        <Text color="black" >KID GIRL</Text>  
                    </NavLink>
                    </Button>
                    <Button w="13vw" borderRadius="4px" colorScheme="blackAlpha" variant="outline" >
                    <NavLink to="/kids" >
                        <Text color="black" >KID BOY</Text>  
                    </NavLink>
                    </Button>
                </ButtonGroup>
            </Box>
            <Box h="64vh" w="98%" margin="2vh auto" >
                <Grid gridTemplateColumns="repeat(3,1fr)" gap={1} >
                    <GridItem _hover={{border:"4px solid lightgrey"}} cursor="pointer" h="100%" >
                        <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2023/cadence/022123/022123/car_desktop_022123_slot3_pod1.jpg?yocs=4G_" />
                    </GridItem>
                    <GridItem _hover={{border:"4px solid lightgrey"}} cursor="pointer" h="100%">
                        <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2023/cadence/022123/022123/car_desktop_022123_slot3_pod2.jpg?yocs=4G_" />
                    </GridItem>
                    <GridItem _hover={{border:"4px solid lightgrey"}} cursor="pointer" h="100%">
                        <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2023/cadence/022123/022123/car_desktop_022123_slot3_pod3.jpg?yocs=4G_" />
                    </GridItem>
                </Grid>
            </Box>
            <Box mt="2vh"  cursor="pointer">
                <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2023/cadence/022123/022123/car_desktop_022123_slot4.jpg?yocs=4G_" h="70vh"
                w="100%" />
            </Box>
            
            <Box mt="2vh" cursor="pointer" >
                <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/ec_creative_carters/2023/cadence/022123/022123/car_desktop_022123_slot5.jpg?yocs=4G_" h="70vh"
                w="100%" />
            </Box>
            

            <Box mt="3vh" h="48vh" >
                <Heading as="h3" size="2xl" color="cyan.500" >SHOP OUR FAVES</Heading>
                <Grid gridTemplateColumns="repeat(6,1fr)" gap={3} pos="relative" top="4vh" >
                    <GridItem h="35vh" cursor="pointer" >
                        <Avatar size="3xl" name="SWIM" src="https://www.carters.com/content/dam/ecomm/ec_creative_carters/2023/cadence/shopourfaves/car_0221_shopourfaves_HP_swim.svg" />
                    </GridItem>
                    <GridItem h="35vh" cursor="pointer" >
                        <Avatar size="3xl" name="SWIM" src="https://www.carters.com/content/dam/ecomm/ec_creative_carters/2023/cadence/shopourfaves/car_0221_shopourfaves_HP_M2M.svg" />
                    </GridItem>
                    <GridItem h="35vh" cursor="pointer" >
                        <Avatar size="3xl" name="SWIM" src="https://www.carters.com/content/dam/ecomm/ec_creative_carters/2023/cadence/shopourfaves/car_0221_shopourfaves_HP_basics.svg" />
                    </GridItem>
                    <GridItem h="35vh" cursor="pointer" >
                        <Avatar size="3xl" name="SWIM" src="https://www.carters.com/content/dam/ecomm/ec_creative_carters/2023/cadence/shopourfaves/car_0221_shopourfaves_HP_familymatching.svg" />
                    </GridItem>
                    <GridItem h="35vh" cursor="pointer" >
                        <Avatar size="3xl" name="SWIM" src="https://www.carters.com/content/dam/ecomm/ec_creative_carters/2023/cadence/shopourfaves/car_0221_shopourfaves_HP_pajamas.svg" />
                    </GridItem>
                    <GridItem h="35vh" cursor="pointer" >
                        <Avatar size="3xl" name="SWIM" src="https://www.carters.com/content/dam/ecomm/ec_creative_carters/2023/cadence/shopourfaves/car_0221_shopourfaves_HP_shoes.svg" />
                    </GridItem>
                </Grid>
            </Box>
            <Box h="35vh">
                <Heading as="h4" size="2xl" fontWeight="semibold" >Discover more from our most-loved brands</Heading>
                <Grid mt="5vh" gridTemplateColumns="repeat(4,1fr)" gap={10} >
                    <GridItem h="50vh" >
                        <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/crm/2023/q1/loyalty-service-footers/service-icons/desktop-icons/1-Hour%20Pick%20Up.jpg?yocs=4G_4I_" />
                    </GridItem>
                    <GridItem h="50vh" >
                        <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/crm/2023/q1/loyalty-service-footers/service-icons/desktop-icons/MRM.jpg?yocs=4G_4I_" />
                    </GridItem>
                    <GridItem h="50vh" >
                        <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/crm/2023/q1/loyalty-service-footers/service-icons/desktop-icons/PLCC.jpg?yocs=4G_4I_" />
                    </GridItem>
                    <GridItem h="50vh" >
                        <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.295/content/dam/ecomm/crm/2023/q1/loyalty-service-footers/service-icons/desktop-icons/App.jpg?yocs=4G_4I_" />
                    </GridItem>
                </Grid>
            </Box>

            <Footer />
            

        </>
    )
}

export default Home