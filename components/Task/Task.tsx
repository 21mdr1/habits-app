import DisplayTask from './DisplayTask';
import EditTask from './EditTask';

export default function Task({ task, index, mode = 'display', deleteTask = () => {} }: {
    index: number,
    task: ITask,
    mode?: 'display' | 'edit',
    // updateTask: (task: ITask) => void,
    deleteTask?: () => void,
}) {

    return (<>
        { mode === "display" && 
            <DisplayTask 
                task={task} 
                index={index}
                // update={updateTask}
            />
        }

        {mode === 'edit' && 
            <EditTask 
                task={task}
                index={index}
                // update={updateTask}
                update={(task: ITask) => {}}
                del={deleteTask}
            />
        }
    </>);
}