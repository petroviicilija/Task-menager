import './TaskInput.css'

export function TaskInput(){
  return(
    <div className="task-input-header">
      <p>
        Task Menager
      </p>
      <div className='input-container'>
        <input type="text" placeholder="Write a task" className='task-input'/>
        <button className='submit-button'>Submit</button>
      </div>
    </div>
  )
}