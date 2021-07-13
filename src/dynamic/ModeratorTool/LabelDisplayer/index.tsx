import { Badge, Box, Flex, IconButton, Text, useToast } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { LabelTree } from "../../../components/LabelTree";
import { DataLabelsItem } from "../../../components/LabelTree/TreeItems/DataLabelItem";
import { SUBMISSION_STATE } from "../../../helper/constant";
import { CrossIcon } from "../../../icons/jsx/cross";
import { HamburgerMenu } from "../../../icons/jsx/hamburger";
import ModeratorStore from '../../../store/ModeratorStore'
/**
 * Label Displaer Part of the Canvas View
 *
 */



export const LabelsDisplayer = observer(() => {
  const [loading,setLoading] = useState(false)
  const toast = useToast()
  return (
    <Box><Flex
      py={0}
      flexDir='column'
      h='100%'
      
      alignItems='flex-start'
      borderRightWidth="1px"
    

      zIndex={1}
      bg="white"
      minW="300px"
      w="300px"
    >
      <Flex  color='white' px={4}
      py={4} mb={2} bg='blueberryBlue.dark' w='100%' >
        <IconButton
          border="none"
          color="white"
          fontSize="200"
          aria-label="Close"
          bg='transparent'
          borderRadius="50%"
          w="6"
          h="6"
          minW="unset"
         

          icon={<CrossIcon />}
        />
        <Text
          
          fontWeight="500"
          fontSize="500"
          textAlign="center"
          flex={1}
        >
          All Data
        </Text>
        <IconButton
          border="none"
          bg='transparent'
          color="white"
          aria-label="Collapse"
          w="6"
          fontSize="700"
          h="6"
          minW="unset"
          icon={<HamburgerMenu />}
        />
      </Flex>
      
      <Box px={4}
      py={4} mb={6} className='scrollbar' overflow='auto' w='100%' flex='1'>
      <Badge  variant='pending' >
              In Review
          </Badge>
      <Text mt={7} mb={2} color="black" fontWeight="500" fontSize="500">
        My Labels
      </Text>
      
      <LabelTree
        element={DataLabelsItem}
        labels={ModeratorStore.selectedSubmission?ModeratorStore.submissions[ModeratorStore.selectedSubmission].submission.labels:[]}
      />
      </Box>
    </Flex></Box>
  );
});
