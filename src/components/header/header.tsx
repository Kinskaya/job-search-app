import { NavLink, useLocation} from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './index.css';


export const Header = () => {
  const location = useLocation();

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <img className='header__logo' src={logo} alt='logo-img'/>
          <h1 className='header__title'>
            Jobored
          </h1>
          <div className='header__items'>
            <NavLink className={location.pathname.match('vacancy') ? 'search__item active' : 'search__item'} to='/'>Поиск Вакансий</NavLink>
            <NavLink className={location.pathname.match('empty') ? 'favorite__item active' : 'favorite__item'} to='/favorite'>Избранное</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

