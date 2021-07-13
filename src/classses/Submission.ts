import { Task } from './../types/task';
import { makeAutoObservable } from 'mobx';
import { makeRaster } from '../dynamic/ModeratorTool/Components/Raster';
import {Submission as SubmissionType, TaskSubmissionType} from '../types/submission'
import { DataLabel } from './DataLabel';
import paper from "paper/dist/paper-core";

// Class representing single submission
export class Submission{
    id:string
    labels:DataLabel[] = []
    submission:string
    state
    metadata
    datasets:string[]
    tasks:string[]
    raster?:paper.Raster
    element?:paper.Layer
    constructor(submission:SubmissionType){
        makeAutoObservable(this)
        this.id = submission._id.$oid
        this.submission = submission.submission
        this.state = submission.state
        this.metadata = submission.metadata
        this.datasets = submission.datasets
        this.tasks = submission.tasks
        this.labels = submission.labels.map(item=> new DataLabel(item))
    }

    removePaperView(){
        if(this.element){
            this.element.remove()
        }
    }
    makeVisible(){
        if(this.element){
            this.element.visible = true
        }
    }
    makeInvisible(){
        if(this.element){
            this.element.visible = false
        }

    }
    generatePaperView(){
        const a = new paper.Layer();
        paper.project.addLayer(a);
        a.visible = false;
        const ref = this
        makeRaster({preview:this.submission}).then(raster=>{
            ref.raster = raster
            a.addChild(ref.raster)
            const subLayers = ref.labels.map(item=>item.generatePaperView(ref.raster))
            a.addChildren(subLayers)
            paper.project.addLayer(a)
            ref.element = a
        })
    }
}

export class TaskSubmission{
    id:string
    submission: Submission
    task: Task
    status:number
    constructor(submission:TaskSubmissionType){
        makeAutoObservable(this)
        this.status = submission.status
        this.id = submission._id.$oid
        this.submission = new Submission(submission.submission)
        this.task = submission.task
    }


}