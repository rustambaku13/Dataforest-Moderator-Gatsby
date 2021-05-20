import { DataLabel } from "./label";

export interface MetaData {
  name: string;
}

export interface Submission {
  _id:{
    $oid:string
  }
  owner:string,
  submission:string
  state: "accepted" | "rejected" | "pending";
  
  metadata: MetaData;
  datasets:string[],
  labels:DataLabel[],
  tasks:[any]
}
