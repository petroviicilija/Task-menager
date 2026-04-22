import { EditTask } from "./EditTask"
import './TaskPage.css'

export function TaskPage(){
  return(
    <div className="task-page">
      <EditTask/>
      <button className="back-button">Back To Tasks</button>
    </div>
  )
}