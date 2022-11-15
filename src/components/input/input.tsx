import React from 'react'
import cl from './input.module.scss';
import Select, { components } from "react-select";


const IndicatorsContainer = props => {
  return (
    <components.IndicatorsContainer {...props}>
    <span></span>
    </components.IndicatorsContainer>
  );
};

const Input = ({...props}) => {

  const optionList = [
    { value: "Москва", label: "г.Москва" },
    { value: "Ростов на Дону", label: "г.Ростов-на-Дону" },
    { value: "Санкт-Петербург", label: "г.Санкт-Петербург" },
  ];

  if (props.type === 'date') {
    return (
      <div class={cl.text_field}>
        <label class={cl.text_field__label} for={props.name}>{props.itemName}</label>
        <input class={cl.text_field__input} {...props}/>
      </div>
    )
  }

  return (
    <div class={cl.text_field}>
      <label class={cl.text_field__label} for={props.name}>{props.itemName}</label>
      <Select components={{ IndicatorsContainer }} options={optionList} class={cl.text_field__input} isSearchable={true} {...props}/>
    </div>
  )
}

export default Input
