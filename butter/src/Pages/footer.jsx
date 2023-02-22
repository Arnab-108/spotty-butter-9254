import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Heading,
    Image
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import YouTubeIcon from '@mui/icons-material/YouTube';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import TwitterIcon from '@mui/icons-material/Twitter';
  import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
  export default function Footer() {
    return (
      <Box
        bg='gray.100'
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing="7vw">
            <Stack spacing={4}>
              <Box>
              <Heading as="h2" size="xl" color="blackAlpha.400" _hover={{ color:"blackAlpha.700" }}  pl="2vw" cursor="pointer" pos="relative" right="8vw">Babybags</Heading>
              </Box>
              <Text fontSize={'sm'} pos="relative" right="6vw" >
                © 2022 Chakra Templates. All rights reserved
              </Text>
              <Stack direction={'row'} spacing={6} pos="relative" right="4vw">
                  <TwitterIcon />
                  <YouTubeIcon />
                  <InstagramIcon />
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
            <Heading as="h6" size="lg" fontWeight="semibold" >Company</Heading>
              <Link href={'#'}>About us</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Contact us</Link>
              <Link href={'#'}>Pricing</Link>
              <Link href={'#'}>Testimonials</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading as="h6" size="lg" fontWeight="semibold">Support</Heading>
              <Link href={'#'}>Help Center</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Legal</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Satus</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Heading as="h6" size="lg" fontWeight="semibold">Stay up to date</Heading>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'green.600',
                  }}
                  aria-label="Subscribe"
                  icon={<SendOutlinedIcon />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }