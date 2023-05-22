import React, {useEffect} from "react";
import { Navigate } from "react-router-dom"

import { Pagination } from "../../components/pagination/pagination";
import "./index.css";
import {appSecretKey} from "../../API/API";
import {token} from "../main/main-page";

const URL = `https://startup-summer-proxy-production.up.railway.app/2.0/favorites/`;

export const FavoritePage = () => {
  const favoriteItems = JSON.parse(localStorage.getItem("favorites") as string);

  useEffect(() => {
    const getFavoriteVacancies = async () => {
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
      localStorage.setItem("favorites", JSON.stringify(result.objects))
    }
    getFavoriteVacancies()

  }, []);

  return (
    <>
      {favoriteItems!.length ? (
          <section className="favorite-page">
            <div className="container">
              <Pagination itemsPerPage={4} vacancies={favoriteItems}/>
            </div>
          </section>
        ) : <Navigate to={'/empty'} />
      }
    </>
  );
}
