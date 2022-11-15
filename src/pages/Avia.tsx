import React from 'react'
import cl from '../css/avia.module.scss';
import SearchTickets from '../modules/searchtickets.tsx';
import SortedTickets from '../modules/sortedtickets.tsx';

const Avia = () => {
    return (
      <main className = {cl.container}>
        <SearchTickets/>
        <SortedTickets/>
      </main>
    )
}

export default Avia
