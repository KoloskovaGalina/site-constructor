import React, {useState} from 'react';
import { HeadingOne } from './elements/HeadingOne.jsx';
import { HeadingTwo } from './elements/HeadingTwo.jsx';
import { HeadingTree } from './elements/HeadingTree.jsx';
import { Paragraph } from './elements/Paragraph.jsx';
import { Image } from './elements/Image.jsx';

export function AddElements({container,placeholder,onCheckEmpty}) {
    const [listOpen, setListOpen] = useState(false);
    const [elements, setElements] = useState([]);
    const [count, setCount] = useState(0);
    
    const chooseElement = (element) => {
        setListOpen(false);
        setCount(count + 1);
        setElements((elements) => [...elements, {id: count, type: element}]);
        handleCheckElements(elements.length + 1);
    };

    const deleteElement = (id) => {
        setElements(elements.filter(item => item.id !== id));
        handleCheckElements(elements.length - 1);
    };
    
    const handleCheckElements = (length) => {
        if (length === 0) {
            onCheckEmpty(true);
        } else {
            onCheckEmpty(false);
        }
    }

    const buttons = ELEMENTS.map((item) => (
        <button key={item.type} type="button" className="choose-elem__btn" onClick={() => chooseElement(item.type)}>{item.name}</button>
    ));

    return (
        <>
            <button type="button" className="add-btn" onClick={() => setListOpen(!listOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0 20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z"
                    fill="#80CCF0" />
                </svg>
            </button>
            {listOpen ? (
                <div className="choose-elem ">
                    {buttons}
                </div>
                ) : null
            }

            {elements.length === 0 ? (
                <p className="placeholder">{placeholder}</p>
                ) : (
                    <div className={`${container}__elements-wrapper`}>
                        {elements.map((element) => 
                            {
                                switch (element.type) {
                                    case 'h1':
                                        return <HeadingOne key={element.id} id={element.id} onDelete={deleteElement}/>
                                    case 'h2':
                                        return <HeadingTwo key={element.id} id={element.id} onDelete={deleteElement}/>
                                    case 'h3':
                                        return <HeadingTree key={element.id} id={element.id} onDelete={deleteElement}/>
                                    case 'p':
                                        return <Paragraph key={element.id} id={element.id} onDelete={deleteElement}/>
                                    case 'image':
                                        return <Image key={element.id} id={element.id} onDelete={deleteElement}/>
                                    default:
                                }
                            }
                        )}
                    </div>
                )
            }
        </>
    );
}