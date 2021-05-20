import { observer } from 'mobx-react-lite';
import { makeAutoObservable, observable } from 'mobx';
import paper from "paper/dist/paper-core";
import {DataLabel as DataLabelType, DataLabelAnnotationValues} from '../types/label'
import {Submission as SubmissionType} from '../types/submission'
import { makeRectangleAnnotation } from '../dynamic/ModeratorTool/Components/RectangleAnnotation';
// Class representing single submission
export class DataLabel{ 
    name: string;
    description: string;
    is_annotation: boolean;
    parent: DataLabel;
    element: paper.Item;
    raster: paper.Item;
    label_type: string;
    value:DataLabelAnnotationValues;
    children: DataLabel[] = [];
    
    constructor(data:DataLabelType){
        makeAutoObservable(this,{parent:observable.ref})
        this.name = data.name
        this.description = data.description
        this.is_annotation = data.is_annotation
        this.label_type = data.label_type
        this.value = data.value
        this.children = data.children.map(item=>new DataLabel(item))

        this.generatePaperView = this.generatePaperView.bind(this);
        
    }

    

    generatePaperView(raster:paper.Raster){
        if(!this.is_annotation)return null
        const a = new paper.Layer();
        this.element = makeRectangleAnnotation(this,raster)
        const subLayers  = this.children.map(item=>item.generatePaperView(raster)).filter(item=>item!=null)
        a.addChildren([this.element,...subLayers])
        return a
    }


}