import Accueil from "../page/Accueil/Accueil";
import style from "./Layout.module.scss"

import {useLocation, Outlet} from 'react-router-dom'

function Layout(){
    
    const {pathname} = useLocation();
    
    return(
        <div className={style.LayoutContent}>
            <header>
                <p>Header</p>
            </header>
            <div className={style.Content}>
                {pathname === "/" ? <Accueil/> : <Outlet/>}
            </div>
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    )
}

export default Layout;