import React from 'react';
import cl from '../css/notfound.module.scss';
import loading from '../assets/loading.svg';

const NotFound = () => {
    return (
      <main className = {cl.container}>
        <section className={cl.notFound}>
          <span className={cl.back__anim}>
            <img className={cl.loading__item} src={loading} alt="loading"></img>
            <span className={cl.solid}>NOT FOUND 404</span>
            <span className={cl.loading__desc}>Такой страницы не существует</span>
          </span>
        </section>
      </main>
    )
}

export default NotFound
