import { Card, CardBody, CardFooter , Image , Stack , Button , Heading , Text , ButtonGroup } from '@chakra-ui/react'
import Model from './modelCard'
function CartCard({id , title , price ,  image , price_2 , description ,color, handleDelete }){
    const DeleteItem =()=>{
       handleDelete(id)
    }
    return (
        <>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={image}
                alt='Caffe Latte'
                pos="relative"
                left="6vw"
            />

            <Stack pl="10vw" >
                <CardBody
                    align="left"
                >
                <Heading  size='md'>{title}</Heading>

                <Text fontSize="14px" pt="4vh" >
                   Doorbuster
                </Text>
                <Text fontSize="14px" pt="4vh" >
                   Color:{color}
                </Text>
                <Text fontSize="14px" pt="2vh" >
                  {description}
                </Text>
                <Text fontSize="14px" pt="2vh" >
                    $ {price}
                </Text>
                <Text fontSize="14px" pt="2vh" textDecoration={'line-through'} >
                   ${price_2}
                </Text>
                </CardBody>

                <CardFooter>
                <ButtonGroup>
                    <Button width="16vw" height="5vh"  variant='solid' colorScheme='teal'>
                        <Model 
                            image={image}
                            title={title}
                            price={price}
                        />
                    </Button>
                    <Button width="16vw" height="5vh" variant='solid' colorScheme='teal' onClick={DeleteItem} >
                        <Text color="white" >Delete</Text>
                    </Button>

                </ButtonGroup>
                </CardFooter>
            </Stack>
        </Card>
        </>
    )
}
export default CartCard