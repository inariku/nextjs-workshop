import React from 'react'
import NextLink from 'next/link'
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Text,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerFooter,
  Link,
  useDisclosure,
  ButtonGroup,
} from '@chakra-ui/react'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <div>
      <Grid templateAreas={`"header" "main"`} gridTemplateRows={'50px 1fr'} h='200px' gap='1'>
        <GridItem pl='2' bg='orange.300' area={'header'}>
          <Flex align='center'>
            <Heading>AWS Amplify × NextJS 13</Heading>
            <Spacer />
            <ButtonGroup>
              <Button m='5px'> Sign Out </Button>
              <Button m='5px' ref={btnRef} onClick={onOpen}>
                Menu
              </Button>
            </ButtonGroup>
          </Flex>
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'}>
          Main
        </GridItem>
      </Grid>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading>Menu</Heading>
          </DrawerHeader>
          <DrawerBody>
            <Link as={NextLink} href='/'>
              Home
            </Link>
            <Link as={NextLink} href='/MapView'>
              Geo
            </Link>
          </DrawerBody>

          <DrawerFooter>
            <Text>Copyright My App 2022</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
