
import paper from "paper/dist/paper-core";
import { DataLabel } from "../../../classses/DataLabel";
export const makeTopLabel = (dataLabel:DataLabel,raster:paper.Raster) => {
    const label = new paper.PointText({
      content: dataLabel.name,
      fillColor: "black",
      fontWeight: "medium",
      fontSize: "0.75rem",
    });
    const labelRectangeSize = label.bounds.clone().expand(25, 1).size;
    const labelRectangle = new paper.Path.Rectangle({
      size: labelRectangeSize,
      point: raster.bounds.topLeft.add(
        new paper.Point(dataLabel.value.topLeft.x,dataLabel.value.topLeft.y)
      ).subtract(
        new paper.Point(0, labelRectangeSize.height)
      ),
      fillColor: "red",
      radius: [2, 2],
    });
    label.bounds.leftCenter = labelRectangle.bounds.leftCenter.add(
      new paper.Point(5, 0)
    );
    const labelContainer = new paper.Group([labelRectangle, label]);
    // labelContainer.addChildren([labelRectangle, label]);
    return labelContainer;
  };


export const  makeRectangleAnnotation = (dataLabel:DataLabel,raster:paper.Raster)=>{
  if(dataLabel.value.relativeUnits){
    const cords = {
        x:undefined,
        y:undefined
    } 
    cords.x = dataLabel.value.relativeUnits.topLeft.x * raster.bounds.width
    cords.y = dataLabel.value.relativeUnits.topLeft.y * raster.bounds.height
    const topLeft = new paper.Point(cords)
    const height = dataLabel.value.relativeUnits.height*raster.bounds.height
    const width = dataLabel.value.relativeUnits.width*raster.bounds.width




    const rect= new paper.Path.Rectangle({
      point: topLeft.add(raster.bounds.topLeft),
      size: [width,height], // TODO: Check validity of order
      strokeWidth: 2,
      fillColor: "rgba(255,0,0,0.1)",
      strokeColor: "#FF0000",
    });
  
  return rect
  }

    const rect= new paper.Path.Rectangle({
        point: raster.bounds.topLeft.add(
            new paper.Point(dataLabel.value.topLeft.x,dataLabel.value.topLeft.y)
          ),
        size: [dataLabel.value.height, dataLabel.value.width], // TODO: Check validity of order
        strokeWidth: 2,
        fillColor: "rgba(255,0,0,0.1)",
        strokeColor: "#FF0000",
      });
    
    return rect

}