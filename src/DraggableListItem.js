import React from 'react';

const DraggableListItem = ({ note, onNoteClick, changeNoteCategory }) => {
    console.log("Rendering DraggableListItem");
    const handleDragStart = (e) => {
        console.log("Drag Start");
        e.dataTransfer.setData('noteId', note.id);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        console.log("Drag Over");
        // drag over logic here
      };

    const handleDrop = (e) => {
        console.log("Drop");
        const newCategory = e.currentTarget.closest("[data-category]").dataset.category;
        console.log(`New Category: ${newCategory}`);
        if (newCategory && note.category !== newCategory) {
            changeNoteCategory(note.id, newCategory);
        }
    };
    return (
        <li 
            draggable
            style={{ listStyleType: 'none', paddingLeft: '0.75em' }}//Added padding to line up with icons
            onClick={() => onNoteClick(note)}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {note.title}
        </li>
    );
};


export default DraggableListItem;