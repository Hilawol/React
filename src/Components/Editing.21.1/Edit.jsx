import React, { useRef, useState, useEffect } from 'react'

function Edit() {
  const [editMode, setEditMode] = useState(false);
  const buttonRef = useRef();
  const inputRef = useRef();


  useEffect(() => {
    if (editMode) {
      inputRef.current.focus();
      buttonRef.current.innerText = "Save"
    }
    else {
      buttonRef.current.innerText = "Edit"
    }

  }, [editMode])

  const toggleEditMode = () => {
    setEditMode(!editMode);
  }

  return (
    <div>
      {editMode ? <input type="text" ref={inputRef} /> : null}
      <button ref={buttonRef} onClick={toggleEditMode}></button>
    </div>
  )
}

export default Edit
