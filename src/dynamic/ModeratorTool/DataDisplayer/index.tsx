import React, { useState } from 'react'
import { AspectRatio, Box, Flex, HStack } from "@chakra-ui/layout"
import { observer } from 'mobx-react-lite'
import { Submission } from '../../../classses/Submission'
import { Img } from '@chakra-ui/image'
import ModeratorStore from '../../../store/ModeratorStore'
import { ChevronLeftIcon, ChevronRightIcon } from '../../../icons/jsx/chevrondown'
import { IconButton } from '@chakra-ui/button'

function changeSubmission(e){
    ModeratorStore.setSelectedSubmission = e.target.getAttribute("data-index")
    
}



const DataCard = ({submission,index}:{submission:Submission,index:number})=>{
    return(
        <Box mr={5}><AspectRatio  onClick={changeSubmission}  _hover={{boxShadow:"elevation_4",borderColor:"persianGreen.base"}} cursor='pointer' w="80px" ratio={1} borderWidth='1px' borderColor="transparent" borderRadius='base'>
            <Img data-index={index} src={submission.submission}/>
        </AspectRatio></Box>
    )

}


export const DataDisplayer = observer(()=>{
    const [leftOffset,setLeftOffset] = useState(0)
    return(

        <Flex  overflowX='auto' alignItems='center' overflow='auto' h='100px' w='100%' p='10px' borderBottomWidth='1px' borderColor='romanSilver.base'>
            <IconButton aria-label="Right Icon" variant='unstyled' minW='unset' onClick={()=>{
                    setLeftOffset(Math.max(0,leftOffset-50))
                }} icon={<ChevronLeftIcon/>}/>
            <Box h='100%' w='100%' overflow='hidden' position='relative'>
            <Flex pos='absolute' transition='0.5s ease-in-out all' transform={`translateX(-${leftOffset+"%"})`} overflow='visible' h='100%' w='100%' px='10px' spacing={5}>
                
                {ModeratorStore.submissions.map((item,index)=><DataCard index={index} submission={item}/>)}
            </Flex>
            </Box>
                <IconButton aria-label="Right Icon" variant='unstyled' minW='unset' onClick={()=>{
                    setLeftOffset(leftOffset+50)
                }} icon={<ChevronRightIcon/>}/>
        </Flex>


    )
})