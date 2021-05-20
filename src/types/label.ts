import paper from "paper/dist/paper-core";

export interface DataLabelAnnotationValues{
  height: number
  width: number
  topLeft: {
    x:number,
    y:number
  }
  relativeUnits?:{
    height: number
    width: number
    topLeft: {
      x:number,
      y:number
    }}
}



export interface Label {
  name: string;
  description?: string;
  is_annotation: boolean;
  parent?: Label;
  label_type: "number" | "boolean" | "text" | "date" | "image" | "file";
  children: Label[];
  [x: string]: any;
}

export interface TaskLabel extends Label {
  cardinality?: "S" | "M";
  attendancy?: "M" | "O";
  render?: any;
  choices?: any[];
}
export interface DataLabel extends Label {
  element?: paper.Item;
  value?: DataLabelAnnotationValues; // Store arbitary data
}

