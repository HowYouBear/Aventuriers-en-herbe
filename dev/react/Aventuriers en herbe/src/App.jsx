import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Layout from './Layout/Layout'
import Erreur from './page/Erreur/Erreur';

// Pages
import Connexion from './page/Connexion/Connexion';
import Contact from './page/Contact/Contact';
import MentionsLegales from './page/MentionsLegales/MentionsLegales';
import CGU from './page/CGU/CGU';
import CreationPersonnage from './page/CreationPersonnage/CreationPersonnage';
import Introduction from './page/Introduction/Introduction';
import LanceurDes from './page/LanceurDes/LanceurDes';
import Univers from './page/Univers/Univers';
import Outils from './page/Outils/Outils';
import Pokemon from './page/Pokemon/Pokemon';
import DonjonEtDragon from './page/DonjonEtDragon/DonjonEtDragon';
import Bladerunner from './page/BladeRunner/BladeRunner';
import Fallout from './page/Fallout/Fallout';
import FFXIV from './page/FinalFantasyXIV/FinalFantasyXIV'






function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <Erreur/>,
      children:[
        {
          path: "/connexion",
          element: <Connexion/>,
          errorElement: <Erreur/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
          errorElement: <Erreur/>,
        },        {
          path: "/mentionslegales",
          element: <MentionsLegales/>,
          errorElement: <Erreur/>,
        },
        {
          path: "/cgu",
          element: <CGU/>,
          errorElement: <Erreur/>,
        },
        {
          path: "/creationPersonnage",
          element: <CreationPersonnage/>,
          errorElement: <Erreur/>,
        },
        {
          path: "/introduction",
          element: <Introduction/>,
          errorElement: <Erreur/>,
        },
        {
          path: "/lanceurDes",
          element: <LanceurDes/>,
          errorElement: <Erreur/>,
        },
        {
          path: "/univers",
          element: <Univers/>,
          errorElement: <Erreur/>,
        },
        {
          path: "/outils",
          element: <Outils/>,
          errorElement: <Erreur/>,
        },
        {
          path: "/Pokémon",
          element: <Pokemon/>,
          errorElement: <Erreur/>,
        },
        {
          path: "/DonjonEtDragon",
          element: <DonjonEtDragon/>,
          errorElement: <Erreur/>
        },
        {
          path: "/bladerunner",
          element: <Bladerunner/>,
          errorElement: <Erreur/>
        },
        {
          path: "/fallout",
          element: <Fallout/>,
          errorElement: <Erreur/>
        },
        {
          path: "/ffxiv",
          element: <FFXIV/>,
          errorElement: <Erreur/>
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App
