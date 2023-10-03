import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Layout from './Layout/Layout'
import Erreur from './page/Erreur/Erreur';

// Pages
import Connexion from './page/Connexion/Connexion';
import Contact from './page/Contact/Contact';
import CreationPersonnage from './page/CreationPersonnage/CreationPersonnage';
import Introduction from './page/Introduction/Introduction';
import LanceurDes from './page/LanceurDes/LanceurDes';
import Univers from './page/Univers/Univers';
import Outils from './page/Outils/Outils';
import Pokemon from './page/Pokemon/Pokemon';




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
      ],
    },
  ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App
