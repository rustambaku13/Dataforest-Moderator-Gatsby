import { listSubmissions, updateSubmission } from './../api/submissions';
import paper from "paper/dist/paper-core";
import { autorun, makeAutoObservable, reaction } from "mobx";
import { Submission, TaskSubmission } from '../classses/Submission';
import { DataLabel } from '../classses/DataLabel';



class ModeratorStore{
    submissions:TaskSubmission[] = [] // Submissions that I am Considering
    selectedSubmission:number = null // Index of the selected Submission
    selectedDataLabel:DataLabel = null // Selected Data Label
    set setSelectedDataLabel(label:DataLabel){
        if(this.selectedDataLabel){
            this.selectedDataLabel.deselect()
        }
        this.selectedDataLabel = label
        if(this.selectedDataLabel){
            this.selectedDataLabel.select()
        }
    }

    set setSelectedSubmission(number:number){
        if(this.selectedSubmission){
            this.submissions[this.selectedSubmission].submission.makeInvisible()
        }
        this.selectedSubmission = number
        if(this.selectedSubmission){
            this.submissions[this.selectedSubmission].submission.makeVisible()
        }

    }
    constructor(){
        makeAutoObservable(this)
    }
    *fetchNextSubmission(){
        // Assumption is that our canvas is finalized 
        const {data} = yield listSubmissions()
        
        this.submissions.push(...data.data.map(item=>new TaskSubmission(item)))
        this.submissions.forEach(item=>item.submission.generatePaperView())
        
    }

    *reactToSubmission(status){
        // 1. Fetch the submission that is worken on from the mobx state
        // 2. Given the status send a request to the back end to update the submissions state
        const selectedSubmission = this.selectedSubmission
        if(selectedSubmission==null) throw Error("Select Submission Pls")
        const submission = this.submissions[selectedSubmission].submission
        const task = this.submissions[selectedSubmission].task
        yield updateSubmission(task._id.$oid,submission.id,status)
        submission.removePaperView()
        this.setSelectedSubmission = null
        this.submissions.splice(selectedSubmission,1)
        
        
        
    }


}



const a = new ModeratorStore()

export default a