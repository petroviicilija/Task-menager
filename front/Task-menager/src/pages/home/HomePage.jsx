import { TaskInput } from "./TaskInput";
import { Tasks } from "./Tasks";

export function HomePage(){
  return(
    <>
      <TaskInput />
      <Tasks />
    </>
  )
}