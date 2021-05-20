import { Box, Center, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import ModeratorStore from '../../../store/ModeratorStore'
import paper from "paper/dist/paper-core";
// import { useLabelingTool } from "../../../hooks/useLabelingTool";
// import LabelingStore from "../../../store/LabelingStore";
// import { NumberInputToolModal } from "../Tools/NumberInputTool";
// import { TextInputToolModal } from "../Tools/TextInputTool";
// import { BooleanInputToolModal } from "../Tools/BooleanInputTool";

const initialInstall = (canvas) => {
  paper.install(window);
  paper.settings.insertItems = false;
  new paper.Project(canvas.current);
};




export const Canvas = observer(() => {
  const canvas = useRef(null);

  useEffect(()=>{
    initialInstall(canvas)
    ModeratorStore.fetchNextSubmission()
    
  },[])

  return (
    <>
      <Box bg='romanSilver.base'  pos="relative" zIndex={0} h="100%">
        {/* <CanvasHints/> */}
        <Box
          zIndex={1}
          pos="absolute"
          top="5%"
          left="5%"

          ref={canvas}
          w='90%'
          h='90%'
          
          as="canvas"
        ></Box>
      </Box>
    </>
  );
});
