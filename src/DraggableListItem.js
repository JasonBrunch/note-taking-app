
import React, { useState } from 'react';

const DraggableListItem = ({ note, onNoteClick, changeNoteCategory,deleteNote }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
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
    const handleDeleteClick = (e) => {
        e.stopPropagation();
        deleteNote(note.id);
    };

    return (
        <li 
            draggable
            style={{ 
                listStyleType: 'none', 
                paddingLeft: '0.75em', 
                display: 'flex',
                justifyContent: 'space-between' 
            }}
            onClick={() => onNoteClick(note)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {note.title}
            {isHovered && (
                <i 
                    className="bi bi-trash" 
                    onClick={handleDeleteClick}
                    title="Delete note"
                    style={{ cursor: 'pointer' }}
                ></i>
            )}
        </li>
    );
};

export default DraggableListItem;