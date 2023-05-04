import React from 'react';
import { Link } from "react-router-dom";
import './index.css';

const MainPage = () => {
  return (
    <section className='main-page'>
      <div className='container'>
        <div className="content__body">
          <Link to='/vacancy'>
            Вакансия 1
          </Link>
          <Link to='/vacancy'>
            Вакансия 2
          </Link>
          <Link to='/empty'>
            Нет вакансий и избранных
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
