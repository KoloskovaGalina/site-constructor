import React, {useState} from 'react';

export function Paragraph({id, onDelete}) {
    const [value, setValue] = useState('');

    const handleChangeValue = (value) => {
        setValue(value);
    }

    const handleDelete = (element) => {
        onDelete(element);
    };

    return (
        <div className="element text " tabIndex="0">
            <p contentEditable="true" suppressContentEditableWarning={true} data-placeholder="Абзац текста" onChange={() => handleChangeValue(value)} onKeyDown={(e) => e.key === 'Enter' ? e.target.blur() : null }>{value}</p>
            <button type="button" className="delete-btn" onClick={() => handleDelete(id)}>
                <span className="visually-hidden">Удалить элемент</span>
            </button>
        </div>
    );
}