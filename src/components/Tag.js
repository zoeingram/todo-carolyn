import React, { useState } from 'react';

export default function Tag({tags, updateTodo, todo }) {

  const addTag = (e) => {
    console.log(e.target.value, e.key)
    if(e.key === 'Enter'){
      if(e.target.value.length > 0 ){
        updateTags([...tags, e.target.value])
        e.target.value =''
      }
    }
  }

  const removeTag = removedTag => {
    const newTags = tags.filter(tag => tag !== removedTag)
    updateTags(newTags);
  }

  const updateTags = (newTags) => {
    todo.tags = newTags;
    updateTodo(todo);
  }

  return (

    <div className="tag-container">
      {tags.map((tag, index) => {
        return (
          <div>
            <div key={index} className="tag">
               <span className="fas fa-times" onClick = {() => removeTag(tag)}> </span>{tag} ,
            </div>
          </div>
        );
      })}
      <input type="text" placeholder="Add a tag" onKeyDown = {addTag}/>
    </div>
  );
}
