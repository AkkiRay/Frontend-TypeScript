import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import cl from '../css/searchtickets.module.scss';
import Input from '../components/input/input.tsx';

const SearchTickets = ({...props}) => {

    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10) {
        month = '0' + month.toString();
      }
    if(day < 10) {
        day = '0' + day.toString();
      }
    var disablePastDate = year + '-' + month + '-' + day;

    const [selectedOptionsFrom, setSelectedOptionsFrom] = useState('');

    const [selectedOptionsWhere, setSelectedOptionsWhere] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);

    function handleSelectFrom(data) {
      setSelectedOptionsFrom(data);
    }

    function handleSelectWhere(data) {
      setSelectedOptionsWhere(data);
    }

    const blurHandler = (e) => {
      switch (e.target.name) {
        case 'startCity':
          setSelectedOptionsFromDirty(true)
          break;
        case 'backCity':
          setSelectedOptionsWhereDirty(true)
          break;
      }
    }

    useEffect ( () => {
      if (selectedOptionsFrom || selectedOptionsWhere) {
        setIsFormValid(false)
      } else {
        setIsFormValid(true)
      }
    }, [selectedOptionsFrom, selectedOptionsWhere])

    const navigate = useNavigate();

    return (
       <div className={cl.searchContainer}>
         <form className={cl.formContainer}>
           <div className={cl.searchTable}>
            <Input required onBlur={e => blurHandler(e)} value={selectedOptionsFrom} onChange={handleSelectFrom} className={cl.inputStyle} itemName='Откуда' type='text' name='startCity' id='startCity' placeholder='Город вылета'/>
            <Input required onBlur={e => blurHandler(e)} value={selectedOptionsWhere} onChange={handleSelectWhere} className={cl.inputStyle} itemName='Куда' type='text' name='backCity' id='backCity' placeholder='Город прилета'/>
            <Input required className={cl.inputStyle} itemName='Туда' type='date' min={disablePastDate} name='startCityDate' id='startCityDate' iconpos='left'/>
            <span className={cl.line}></span>
            <Input className={cl.inputStyle} itemName='Обратно' type='date' min={disablePastDate} name='backCityDate' id='backCityDate' iconpos='left'/>
           </div>
           <span className={cl.buttonContainer}>
            <button onClick = {() => navigate(`/avia/info`)} disabled={isFormValid} type="submit" to="/avia/info" className={cl.button}>Найти билеты</button>
           </span>
         </form>
       </div>
    )
}

export default SearchTickets
