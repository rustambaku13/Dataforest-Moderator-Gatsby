import { listSubmissions, updateSubmission } from './../api/submissions';
import paper from "paper/dist/paper-core";
import { autorun, makeAutoObservable, reaction } from "mobx";
import { Submission } from '../classses/Submission';
import { DataLabel } from '../classses/DataLabel';



class ModeratorStore{
    submissions:Submission[] = [] // Submissions that I am Considering
    selectedSubmission:number = null // Index of the selected Submission
    selectedDataLabel:DataLabel = null
    set setSelectedDataLabel(label:DataLabel){
        if(this.selectedDataLabel){
            this.selectedDataLabel.element.selected=false
        }
        this.selectedDataLabel = label
        if(this.selectedDataLabel){
            this.selectedDataLabel.element.selected=true
        }
    }

    set setSelectedSubmission(number:number){
        if(this.selectedSubmission){
            this.submissions[this.selectedSubmission].makeInvisible()
        }
        this.selectedSubmission = number
        if(this.selectedSubmission){
            this.submissions[this.selectedSubmission].makeVisible()
        }

    }
    constructor(){
        makeAutoObservable(this)
    }
    *fetchNextSubmission(){
        // Assumption is that our canvas is finalized 
        const {data} = yield listSubmissions()
        
        this.submissions.push(...data.data.map(item=>new Submission(item)))
        this.submissions.forEach(item=>item.generatePaperView())
        
    }

    *reactToSubmission(status){
        const selectedSubmission = this.selectedSubmission
        if(selectedSubmission==null) throw Error("Select Submission Pls")
        const submission = this.submissions[selectedSubmission]
        const tasks = []

        for (const [key, value] of Object.entries(submission.tasks)) {
            if(value==0)tasks.push(key)
          }
        
        yield Promise.all(tasks.map(taskId=>updateSubmission(taskId,submission.id,status)))
        submission.removePaperView()
        this.setSelectedSubmission = null
        this.submissions.splice(selectedSubmission,1)
        
        
        
    }


}



const a = new ModeratorStore()

export default a