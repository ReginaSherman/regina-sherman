import { Box, Flex, Container } from '@chakra-ui/react'
import 'focus-visible/dist/focus-visible'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Tech from '../components/Tech'

export default function Home() {
  return (
    <Box bg='#FFFAEF'>
      <Header /> <br />
      <Box m={[5, 5, 0, 0]} mt={[0, 0, 0, 0]}>
        <Flex justify='center' >
          <Hero />
        </Flex>
        <Flex justify='center'>
          <About />
        </Flex>
        <Flex justify='center'>
          <Tech />
        </Flex>
        <br />
        <Flex justify='center'>
          <Projects />
        </Flex>
        <Flex justify='center'>
          <Resume />
        </Flex>
      </Box>

    </Box>
  )
}
