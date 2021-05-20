import paper from "paper/dist/paper-core";
import { useEffect } from "react";
import ModeratorStore from '../store/ModeratorStore'
const initialInstall = (canvas) => {
    paper.install(window);
    paper.settings.insertItems = false;
    new paper.Project(canvas.current);
    // ModeratorStore.forEach((file: File) => {
    //   const a = new paper.Layer();
    //   paper.project.addLayer(a);
    //   a.visible = false;
    //   const raster = makeRaster(file);
    //   a.addChild(raster);
    // });
  };


export const useModeratorTool = (canvas) => {
    useEffect(() => {
      initialInstall(canvas);
    }, []);
    return null;
  };
  