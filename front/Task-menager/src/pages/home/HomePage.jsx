import { TaskInput } from "../../components/TaskInput";
import { Tasks } from "../../components/Tasks";

export function HomePage(){
  return(
    <>
      <TaskInput />
      <Tasks />
    </>
  )
}