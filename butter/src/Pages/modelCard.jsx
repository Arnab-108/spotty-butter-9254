import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    useDisclosure,
    Stack,
  } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useState } from 'react'
  function Model({image , price , title }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value , setValue] = useState(1)
    const totalPrice = Math.floor(value*price)
    localStorage.setItem("totalPrice" , totalPrice)
    return (
      <>
        <Button variant="link" color="white" textDecoration="none" onClick={onOpen}>Proceed to Bye</Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack>
                <img src={image} alt="" />
                <Text>Doorbuster</Text>
                <Text> Price: ${price}</Text>
                        <button disabled={value===1} onClick={()=>setValue(value-1)} >-</button>
                        <button>{value}</button>
                        <button onClick={()=>setValue(value+1)} >+</button>
                <Text>Total Price: ${totalPrice}</Text>
              </Stack>
            </ModalBody>
  
            <ModalFooter>
                <RouterLink to="/payment" >
                    <Button colorScheme='yellow' mr={3} >
                        Bye the Item
                    </Button>
                </RouterLink>
              <Button variant='ghost' onClick={onClose} >Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Model