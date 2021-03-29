import React, { useState } from 'react'

const MarkAndDelete = () => {

  const setIntial = () => {
    return ["one", "two", "three", "four", "five"].map(x => { return { text: x, checked: false } });
  }

  const [checkBoxList, updateList] = useState(setIntial());

  const onChecked = (i) => {
    const newList = [...checkBoxList];
    newList[i].checked = !newList[i].checked;
    updateList(newList);
  }

  const RenderCheckbox = () => {
    return <div>
      {checkBoxList.map((ch, i) => {
        return <div key={i}>
          <input type="checkbox" onChange={() => onChecked(i)} checked={ch.checked}></input>
          <label>{ch.text}</label>
          <br />
        </div>
      })}
    </div>
  }

  const onReset = () => {
    updateList(setIntial());
  }

  const onDelete = () => {
    const newList = [...checkBoxList].filter(c => !c.checked);
    updateList(newList);
  }

  return (
    <div>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onReset}>Reset</button>
      <RenderCheckbox />
    </div>
  )
}

export default MarkAndDelete
