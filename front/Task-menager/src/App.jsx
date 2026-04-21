import './App.css'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { TaskPage } from './pages/task/TaskPage';
 
function App() {

  return (
    <div className='app-container'>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='task' element={<TaskPage />} />
      </Routes>
    </div>
  )
}

export default App
