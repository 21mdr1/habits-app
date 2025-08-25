import DisplayTask from './Task/DisplayTask';
import EditTask from './Task/EditTask';

export default function Task({ task, mode = 'display', updateTask, deleteTask = () => {} }: {
    task: ITask
    mode?: 'display' | 'edit'
    updateTask: (task: ITask) => void,
    deleteTask?: () => void
}) {

    return (<>
        { mode === "display" && 
            <DisplayTask 
                task={task} 
                update={updateTask}
            />
        }

        {mode === 'edit' && 
            <EditTask 
                task={task}
                update={updateTask}
                del={deleteTask}
            />
        }
    </>);
}