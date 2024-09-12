import React, {useState} from 'react';

export function HeadingTree({id, onDelete}) {
    const [value, setValue] = useState('');

    const handleChangeValue = (value) => {
        setValue(value);
    }

    const handleDelete = (element) => {
        onDelete(element);
    };

    return (
        <div className="element title" tabIndex="0">
            <h3 contentEditable="true" suppressContentEditableWarning={true} data-placeholder="Заголовок H3" onChange={() => handleChangeValue(value)} onKeyDown={(e) => e.key === 'Enter' ? e.target.blur() : null }>{value}</h3>
            <button type="button" className="delete-btn" onClick={() => handleDelete(id)}>
                <span className="visually-hidden">Удалить элемент</span>
            </button>
        </div>
    );
}