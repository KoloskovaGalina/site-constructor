import React, {useState} from 'react';
import { Controls } from './components/Controls.jsx';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { LandingTemplate } from './components/LandingTemplate.jsx';
import { BlogTemplate } from './components/BlogTemplate.jsx';
import { ShopTemplate } from './components/ShopTemplate.jsx';

function App() {
    const [template, setTemplate] = useState('landing');

    const changeTemplate = (selected) => {
        setTemplate(selected);
    };

    const getTemplate = (template) => {
        switch (template) {
            case 'landing':
                return <LandingTemplate/>;
            case 'blog':
                return <BlogTemplate/>;
            case 'shop':
                return <ShopTemplate/>;
            default:
            return null;
        }
    };

    return (
        <div className="container">
            <h1 className="visually-hidden">Конструктор сайтов</h1>

            <Controls onChangeTemplate={changeTemplate} selectedTemplate={template}/>

            <div className={`layout layout--${template}`}>
                <Header/>
                {getTemplate(template)}
                <Footer/>
            </div>
        </div>
    );
}

export default App;
