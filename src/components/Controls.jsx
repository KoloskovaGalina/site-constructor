import React, { Fragment } from 'react';

export function Controls({onChangeTemplate, selectedTemplate}) {

  const handleChangeTemplate = (template) => {
    onChangeTemplate(template);
  };

  const controls = TEMPLATES.map((item) => (
    <Fragment key={item.type}>
      <input className="grid-select__radio visually-hidden" type="radio" name="grid" id={`grid-${item.type}`} onChange={() => handleChangeTemplate(item.type)} checked={selectedTemplate == item.type ? 'checked' : ''}/>
      <label htmlFor={`grid-${item.type}`} className="grid-select__btn">
          <span className="grid-select__text">{item.name}</span>
          <svg className="grid-select__img" width="240" height="132" viewBox="0 0 240 132" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.3" y="0.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5" />
            <rect x="0.3" y="116.3" width="239.4" height="15.4" strokeWidth="0.6" strokeDasharray="5 5" />
            <rect x="0.3" y="26.3" width="239.4" height="79.4" strokeWidth="0.6" strokeDasharray="5 5" />
          </svg>
      </label>
    </Fragment>
  ))

  return (
    <form className="grid-select">
      <h2 className="grid-select__header">Выберите сетку сайта</h2>
      {controls}
  </form>
  );
}