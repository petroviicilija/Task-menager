import './Tasks.css'

export function Tasks(){
  return(
    <>
      <div className="task">
       <div>
        Operi se dolje
        </div> 
        <div className='images-container'>
          <img src='../../public/5996831.png' className='edit-icon'/>
          <img src='../../public/delete.png' className='delete-icon' />
        </div>
      </div>
      <div className="task">
        <div>
          Operi se dolje 2
          </div>
        <div className='images-container'>
          <img src='../../public/5996831.png' className='edit-icon'/>
          <img src='../../public/delete.png' className='delete-icon' />
        </div>
      </div>
    </>
  )
}