import React, { FunctionComponent, useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from './Task.actions';

import { Status } from '../status/Status.types';

interface AddTaskProps {
  status: Status
}

export const AddTask: FunctionComponent<AddTaskProps> = (props) => {
  const [ dialogIsVisible, setDialogIsVisible ] = useState(false);
  const [ taskTitle, setTaskTitle ] = useState('');

  const taskTitleEl = useRef<HTMLTextAreaElement>(null);
  const addTaskButtonEl = useRef<HTMLButtonElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (dialogIsVisible && taskTitleEl.current !== null) {
      taskTitleEl.current.focus();
    }
  }, [dialogIsVisible]);

  function toggleDialog(): void {
    dialogIsVisible ? closeDialog() : openDialog();
  }

  function closeDialog(): void {
    postNewTask();
    setTaskTitle('');
    setDialogIsVisible(false);
    addTaskButtonEl.current !== null && addTaskButtonEl.current.focus();
  }

  function openDialog(): void {
    setDialogIsVisible(true);
  }

  function postNewTask(): void {
    if (taskTitle) {
      dispatch(addTask(taskTitle, props.status.id));
    }
  }

  function onTaskTitleChange(event: React.FormEvent<HTMLTextAreaElement>): void {
    setTaskTitle(event.currentTarget.value);
  }

  return (
    <div className="AddTask">
      { dialogIsVisible ?
        <form>
          <div className="form-group">
            <textarea
              className="form-control"
              rows={2}
              ref={taskTitleEl}
              value={taskTitle}
              onBlur={closeDialog}
              onChange={onTaskTitleChange}
            />
          </div>
        </form> :
        null
      }
      
      <button
        onClick={toggleDialog}
        className="btn btn-primary"
        ref={addTaskButtonEl}
      >Add task</button>
    </div>
  );
};
