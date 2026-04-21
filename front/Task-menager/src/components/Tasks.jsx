import './Tasks.css'

export function Tasks(){
  return(
    <>
      <div className="task">
       <div>
        Operi se dolje
        </div> 
        <div className='image-container'>
          <img src='../assets/edit.png' className='edit-icone'/>
          <img src='../assets/delete.png' className='delete-icon' />
        </div>
      </div>
      <div className="task">
        <div>
          Operi se dolje 2
          </div>
        <div className='image-container'>
          <img src='../assets/edit.png' className='edit-icone'/>
          <img src='../assets/delete.png' className='delete-icon' />
        </div>
      </div>
    </>
  )
}