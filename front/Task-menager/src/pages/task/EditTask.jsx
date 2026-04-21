import './EditTask.css'

export function EditTask(){
  return(
    <div className="edit-container">
      <div className="edit-title">
        Edit Task
      </div>
      <div className="info-container">
        <div className="info-titles">
          <p>Task ID</p>
          <p>Name</p>
          <p>Completed</p>
        </div>
        <div className="info-values">
          <p>82374982380-sahd12-11qqwe1</p>
          <p>Operi se dolje</p>
          <input type="checkbox" />
        </div>
      </div>
      <div>
          <button>Edit</button>
        </div>
    </div>
  )
}