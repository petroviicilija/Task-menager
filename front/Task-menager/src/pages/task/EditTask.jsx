import './EditTask.css'

export function EditTask(){
  return(
    <div className="edit-container">
      <div className="edit-title">
        Edit Task
      </div>
      <div className="info-container">
          <div className='info-title'>Task ID</div>
          <div className='info-value'>82374982380-sahd12-11qqwe1</div>
          <div className='info-title'>Name</div>
          <div className='input-container'>
            <input type="text" className='edit-input' />
          </div>
          <div className='info-title'>Completed</div>
          <div>
            <input type="checkbox" className='edit-checkbox'/>
          </div>
      </div>
        <button className='edit-button'>Edit</button>
    </div>
  )
}