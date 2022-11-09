import { Heading } from '@chakra-ui/react'
import {Box} from "@chakra-ui/react"
export default function Body() {
    return (
        <div>
            <Heading>Hello there</Heading>
            {/* <Box as="section" bg="green" w="120px" h="120px">Hello</Box> */}
            <Box as="section"><p>I am a CS student @ BCIT. I am currently studying IT</p></Box>
        </div>
    )
}