import React from 'react'
import {useSearchParams} from 'react-router-dom';
import cl from '../css/sortedtickets.module.scss';

const SortedTickets = ({...props}) => {

  function reformatDate(dateStr)
  {
    var dArr = dateStr.split("-");
    return dArr[2]+ "." +dArr[1]+ "." +dArr[0].substring(0);
  }

  const [searchParams, setSearchParams] = useSearchParams('');
  var startCity = searchParams.get('startCity');
  var backCity = searchParams.get('backCity');
  if (searchParams.get('startCityDate') !== null) {
    var startCityDate = reformatDate(searchParams.get('startCityDate').toString());
  }
  if (searchParams.get('backCityDate') !== null) {
    var backCityDate = reformatDate(searchParams.get('backCityDate').toString());
  }
  var cost = 4150;
  var ticketType = 'Невозвратный';
  var arrivalTime = '11:05';
  var departureTime = '22:57';
  var startCityID = 'ROV';
  var endCityID = 'MSK';
  
  if (startCityDate !== 'undefined.undefined.' && backCityDate === 'undefined.undefined.' && startCity !== null) {
    return (
      <div className={cl.aviaCard}>
        <label className={cl.aviaName}>
          <span className={cl.aviaName__type}>{ticketType}</span>
          <label className={cl.aviaName__card}>
            <span className={cl.card__logo}></span>
            <span className={cl.card__text}>S7 Airlines</span>
          </label>
        </label>
        <span className={cl.aviaInfo}>
            <span className={cl.aviaInfo__startData}>
              <span className={cl.startData__timeStart}>{departureTime}</span>
              <label className={cl.startData_City}>{startCity}</label>
              <label className={cl.startData_CityDate}>{startCityDate}</label>
            </span>
            <span className={cl.aviaInfo__inTime}>
            <div className={cl.inTime__firstCont}>
              <label className={cl.firstCont__start}>{startCityID}</label>
              <label className={cl.firstCont__end}>{endCityID}</label>
            </div>
              <div className={cl.inTime__secondCont}>
                <label className={cl.secondCont__Line}></label>
                <label className={cl.secondCont__Timer}>В пути 1 ч 55 мин</label>
              </div>
            </span>
            <span className={cl.aviaInfo__startData}>
              <span className={cl.startData__timeStart}>{arrivalTime}</span>
              <label className={cl.startData_City}>{backCity}</label>
              <label className={cl.startData_CityDate}>{startCityDate}</label>
            </span>
            <span className={cl.aviaInfo__Bagage}></span>
        </span>
        <span className={cl.aviaCost}>{cost}</span>
      </div>
    )
  } else if (backCityDate !== 'undefined.undefined.') {
    var cost_v2 = cost * 2
    return (
      <div className={cl.aviaCard__Double}>
        <div className={cl.aviaBlock}>
          <label className={cl.aviaName}>
            <span className={cl.aviaName__type}>{ticketType}</span>
            <label className={cl.aviaName__card}>
              <span className={cl.card__logo}></span>
              <span className={cl.card__text}>S7 Airlines</span>
            </label>
          </label>
          <span className={cl.aviaInfo}>
              <span className={cl.aviaInfo__startData}>
                <span className={cl.startData__timeStart}>{departureTime}</span>
                <label className={cl.startData_City}>{startCity}</label>
                <label className={cl.startData_CityDate}>{startCityDate}</label>
              </span>
              <span className={cl.aviaInfo__inTime}>
              <div className={cl.inTime__firstCont}>
                <label className={cl.firstCont__start}>{startCityID}</label>
                <label className={cl.firstCont__end}>{endCityID}</label>
              </div>
                <div className={cl.inTime__secondCont}>
                  <label className={cl.secondCont__Line}></label>
                  <label className={cl.secondCont__Timer}>В пути 1 ч 55 мин</label>
                </div>
              </span>
              <span className={cl.aviaInfo__endData}>
                <span className={cl.startData__timeStart}>{arrivalTime}</span>
                <label className={cl.startData_City}>{backCity}</label>
                <label className={cl.startData_CityDate}>{startCityDate}</label>
              </span>
              <span className={cl.aviaInfo__Bagage}></span>
          </span>
        </div>
        <div className={cl.aviaBlock}>
          <label className={cl.aviaName}>
            <span className={cl.aviaName__type}>{ticketType}</span>
            <label className={cl.aviaName__card}>
              <span className={cl.card__logo}></span>
              <span className={cl.card__text}>S7 Airlines</span>
            </label>
          </label>
          <span className={cl.aviaInfo__Down}>
              <span className={cl.aviaInfo__startData}>
                <span className={cl.startData__timeStart}>{departureTime}</span>
                <label className={cl.startData_City}>{backCity}</label>
                <label className={cl.startData_CityDate}>{backCityDate}</label>
              </span>
              <span className={cl.aviaInfo__inTime}>
              <div className={cl.inTime__firstCont}>
                <label className={cl.firstCont__start}>{startCityID}</label>
                <label className={cl.firstCont__end}>{endCityID}</label>
              </div>
                <div className={cl.inTime__secondCont}>
                  <label className={cl.secondCont__Line}></label>
                  <label className={cl.secondCont__Timer}>В пути 1 ч 55 мин</label>
                </div>
              </span>
              <span className={cl.aviaInfo__endData}>
                <span className={cl.startData__timeStart}>{arrivalTime}</span>
                <label className={cl.startData_City}>{startCity}</label>
                <label className={cl.startData_CityDate}>{backCityDate}</label>
              </span>
              <span className={cl.aviaInfo__Bagage}></span>
          </span>
        </div>
        <span className={cl.aviaCost_double}>{cost_v2}</span>
      </div>

    )
  }
}

export default SortedTickets
