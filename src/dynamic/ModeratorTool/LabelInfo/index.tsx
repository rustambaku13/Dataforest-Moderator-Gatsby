import { Box, Flex, IconButton, Text, VStack } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { HamburgerMenu } from '../../../icons/jsx/hamburger'
import ModeratorStore from '../../../store/ModeratorStore'


export const LabelInfo = observer(()=>{
    const [expanded,setExpanded] = useState(false)
    return(
        <Box
        borderLeftWidth="1px"
        borderColor='romanSilver.base'
        borderRightWidth="1px"
        className='expandable-side'
        py={6}
        zIndex={1}
        transition=".5s ease all"
        bg="white"
        maxW='300px'
        flex="0 0 300px"
        aria-expanded={expanded}
        _expanded={{
            maxW:14,
            ">:not(.remain_expanded),>*>:not(.remain_expanded)":{
                display:"none"
            },
            ".remain_expanded":{
              justifyContent:"center"
            }
        }}
    >
      <Flex   className="remain_expanded" mb={6} px={4}>
        <Text
          color="black"
          fontWeight="500"
          fontSize="600"
          flex={1}
        >
          Label
        </Text>
        <IconButton
            className="remain_expanded"
          border="none"
          color="romanSilver.base"
          aria-label="Collapse"
          w="6"
          fontSize="700"
          h="6"
          minW="unset"
          onClick={()=>{setExpanded(!expanded)}}
          icon={<HamburgerMenu expanded={expanded}/>}
        />
      </Flex>
      <VStack mb={6} px={4} alignItems='flex-start' w="100%" spacing={4}>
        <Box>
            <Text fontSize='500' variant='secondary' mb={1}>Name</Text>
            <Text fontSize='500' >{ModeratorStore.selectedDataLabel?.name}</Text>
        </Box>
        <Box>
            <Text fontSize='500' variant='secondary' mb={1}>Description</Text>
            <Text fontSize='500'>{ModeratorStore.selectedDataLabel?.description}</Text>
        </Box>
        <Box>
            <Text fontSize='500' variant='secondary' mb={1}>Label type</Text>
            <Text fontSize='500' variant='secondary'>{ModeratorStore.selectedDataLabel?.label_type}</Text>
        </Box>
        <Box>
            <Text fontSize='500' variant='secondary' mb={1}>Value</Text>
            
        </Box>
      </VStack>
    </Box>

    )


})