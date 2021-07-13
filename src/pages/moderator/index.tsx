import { Box, Button, Center, Flex, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { DataDisplayer } from "../../dynamic/LabelingTool/DataDisplayer/DataDisplayer";
// import { LabelsDisplayer } from "../../dynamic/LabelingTool/LabelsDisplayer/LabelsDisplayer";
// import { Canvas } from "../../dynamic/LabelingTool/DrawingCanvas/Canvas";
// import { useAnonRedirect, useLabelingToolNotReadyRedirect } from "../../helpers/useAuthOnly";
import { navigate } from "gatsby-link";
import { Canvas } from "../../dynamic/ModeratorTool/Canvas";
import { LabelsDisplayer } from "../../dynamic/ModeratorTool/LabelDisplayer";
import { DataDisplayer } from "../../dynamic/ModeratorTool/DataDisplayer";
import { LabelInfo } from "../../dynamic/ModeratorTool/LabelInfo";
import ModeratorStore from '../../store/ModeratorStore'
import { flowResult } from "mobx";
import UserStore from '../../store/UserStore'
import { observer } from "mobx-react-lite";


const RejectButtom = ()=>{

  const [loading,setLoading] = useState(false)
  const rejectHandler = ()=>{
    setLoading(true)
    flowResult(ModeratorStore.reactToSubmission(-1))
    .then(e=>{

    })
    .catch((e)=>{
      console.log(e);
      
    })
    .finally(()=>{
      setLoading(false)
    })
  }
  return(
    <Button onClick={rejectHandler} isLoading={loading} mr={4} variant='error'>
                        Reject
                      </Button>
  )
}

const AcceptButton = ()=>{

  const [loading,setLoading] = useState(false)
  const acceptHandler = ()=>{
    setLoading(true)
    flowResult(ModeratorStore.reactToSubmission(1))
    .then(e=>{

    })
    .catch(()=>{

    })
    .finally(()=>{
      setLoading(false)
    })
  }
  return(
    <Button onClick={acceptHandler} isLoading={loading} mr={4} variant='success'>
                        Accept
                      </Button>
  )
}


const ModeratorToolPage = observer(() => {
  if(!UserStore.identifiedUser){
    return null
  }
  if(UserStore.identifiedUser && !UserStore.me){
    if(window)navigate("/")
    return null
  }
  return (
    <>
      <Flex pos="relative" h="100vh" w="100vw">
        
        <LabelsDisplayer />
        <VStack overflow='hidden' spacing={0} alignItems='stretch'  w='100%'>
            <Canvas />
          <Box w='100%'  h='200px' bg='white'>
              <DataDisplayer/>
              <Center h='100px' w='100%'>
                  
              <RejectButtom/>
              <AcceptButton/>
            
              </Center>
          </Box>
        </VStack>
        <LabelInfo/>
      </Flex>
    </>
  );
});
export default ModeratorToolPage;
