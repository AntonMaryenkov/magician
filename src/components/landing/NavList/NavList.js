import { NavLink, useLocation, useNavigate } from 'react-router-dom';

function NavList(props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function goBackMainPage(pathname) {
    if (props.popupNav === true) {
      props.setPopupNav(false);
    }
    if (pathname !== '/') {
      return navigate('/');
    }
  };

  return (
    <div className={`${props.nameBlock}__nav-list`}>
      <div className={`${props.nameBlock}__nav-container`}>
        <ul className={`${props.nameBlock}__nav-list`}>
          <li className={`${props.nameBlock}__nav-li`}>
            <NavLink
              className={pathname === '/' ? `${props.nameBlock}__link ${props.nameBlock}__link_active` : `${props.nameBlock}__link`}
              to='/'
              onClick={() => props.popupNav ? props.setPopupNav(false) : null}>
              Главная
            </NavLink>
          </li>
          <li className={`${props.nameBlock}__nav-li`}>
            <NavLink
              className={pathname === '/portfolio' ? `${props.nameBlock}__link ${props.nameBlock}__link_active` : `${props.nameBlock}__link`}
              to='/portfolio'
              onClick={() => props.popupNav ? props.setPopupNav(false) : null}>
              Портфолио
            </NavLink>
          </li>
          <li className={`${props.nameBlock}__nav-li`}>
            <a className={`${props.nameBlock}__link`} href='#programs' onClick={() => goBackMainPage(pathname)}>Пакеты услуг</a>
          </li>
          <li className={`${props.nameBlock}__nav-li`}>
            <a className={`${props.nameBlock}__link`} href='#photos-grid' onClick={() => goBackMainPage(pathname)}>Фото</a>
          </li>
          <li className={`${props.nameBlock}__nav-li`}>
            <a className={`${props.nameBlock}__link`} href='#promo-video' onClick={() => goBackMainPage(pathname)}>Промо</a>
          </li>
          <li className={`${props.nameBlock}__nav-li`}>
            <a className={`${props.nameBlock}__link`} href='#contacts' onClick={props.popupNav ? () => props.setPopupNav(false) : null}>Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavList;
