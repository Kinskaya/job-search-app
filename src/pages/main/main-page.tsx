import React, {useEffect, useState} from "react";

import { SearchBar } from "../../components/search-bar/search-bar";
import { Pagination } from "../../components/pagination/pagination";
import "./index.css";
import { Filter } from "../../components/filter/filter";
import {appSecretKey} from "../../API/API"

const URL = `https://startup-summer-proxy-production.up.railway.app/2.0/vacancies/`;
export const token = localStorage.getItem("access_token")

export const MainPage = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const getVacancies = async () => {
      const response = await fetch(URL, {
          headers: {
            'Content-Type': 'application/json',
            'x-secret-key': `GEU4nvd3rej*jeh.eqp`,
            'X-Api-App-Id': appSecretKey,
            'Authorization': `Bearer ${token}`
          }
        }
      )
      const result = await response.json();
      setVacancies(result.objects);
      localStorage.setItem("vacancies", JSON.stringify(result.objects))
    }
    getVacancies();

  }, [])
  return (
    <>
     {/* {vacancies.length ?*/}
      <section className="main-page">
        <div className="container">
          <Filter />
          <div className="content">
            <SearchBar />
            <Pagination itemsPerPage={4} vacancies={vacancies}/>
          </div>
        </div>
      </section>
       {/* : <Navigate to={'/empty'} />}*/}
    </>
  );
}
