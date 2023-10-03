import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Accueil from "../page/Accueil/Accueil";
import style from "./Layout.module.scss"
import CookiePopup from "../component/CookiePopup/CookiePopup";

import { useLocation, Outlet } from 'react-router-dom'

function Layout() {

  const { pathname } = useLocation();

  return (
    <div className={style.LayoutContent}>
      <Header />
      <div className={style.Content}>
        {pathname === "/" ? <Accueil /> : <Outlet />}
        <CookiePopup />
      </div>
      <Footer />
      
    </div>
    
    
  )
}

export default Layout;
