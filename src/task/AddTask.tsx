import React, { FunctionComponent, useState, useRef, useEffect } from 'react';

import { Status } from '../status/Status.types';

interface AddTaskProps {
  status: Status
}

export const AddTask: FunctionComponent<AddTaskProps> = () => {
  const [ dialogIsVisible, setDialogIsVisible ] = useState(false);
  const textAreaEl = useRef<HTMLTextAreaElement>(null);

  function toggleDialog(): void {
    setDialogIsVisible(!dialogIsVisible);
  }

  function closeDialog(): void {
    setDialogIsVisible(false);
  }

  useEffect(() => {
    if (dialogIsVisible && textAreaEl.current !== null) {
      textAreaEl.current.focus();
    }
  }, [dialogIsVisible]);

  return (
    <div className="AddTask">
      { dialogIsVisible ?
        <form>
          <div className="form-group">
            <textarea
              className="form-control"
              rows={2}
              ref={textAreaEl}
              onBlur={closeDialog}
            ></textarea>
          </div>
        </form> :
        null
      }
      
      <button onClick={toggleDialog} className="btn btn-primary">Add task</button>
    </div>
  );
};
