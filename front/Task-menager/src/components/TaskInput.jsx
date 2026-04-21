import './TaskInput.css'

export function TaskInput(){
  return(
    <div className="task-input">
      <p>
        Task Menager
      </p>
      <div className='input'>
        <input type="text" placeholder="Write task" />
        <button>Submit</button>
      </div>
    </div>
  )
}