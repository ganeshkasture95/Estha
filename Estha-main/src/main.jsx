import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Fnavbar } from './components/Fnavbar.jsx'
import About from './pages/About/About.jsx'
import PilgreamPlacesPage from './pages/MainPage/Page2.jsx'
import SingleTempelPage from './pages/Tempel/SingleTempelPage.jsx'
import SingleMasjidPage from './pages/Tempel/SinglemasjidPage.jsx'
import store from './store/store.js'

// import LoginPage from './components/LoginPage'



// const routers = createBrowserRouter(
// religion.map((religion) => (

//   {
//     path: `${religion.goTo}`,
//     element:
//       <PilgreamPlacesPage
//         religion={religion.title}
//         apiUrl={religion.apiUrl}
//       />
//   }
// )
// )
// )


const router = createBrowserRouter([

  // home page routing 
  {
    path: "/",
    element: <Fnavbar />,
    children: [
      {
        path: "",
        element: <Fnavbar />,
      },

    ],
  },


  // Hindu temples routing 
  {
    path: `/temple`,
    element:
      <PilgreamPlacesPage
        apiUrl={'http://localhost:5000/temples'}
        color={'orange'}
        title={'Hinduism'}
        Quote={'“The journey of a thousand miles begins with one step.”'}
        HBgImage={[
          "https://i.pinimg.com/736x/83/06/c3/8306c3921abdb98aa4fd1c3866387a38.jpg",
          "https://i.pinimg.com/564x/1b/44/86/1b4486f63b01c0abe73bc01b096aaa1c.jpg",
          "https://i.pinimg.com/736x/67/8d/b1/678db1e466acb9266e1ede6ae51505a5.jpg",
          "https://i.pinimg.com/564x/c2/1d/6f/c21d6f33b5e976a70666f1889f6a844b.jpg",
          "https://i.pinimg.com/564x/ca/76/3e/ca763e7edaca7463b69321e3604603b4.jpg",
          "https://i.pinimg.com/564x/bf/c1/f6/bfc1f6ff241e75054c6c9807308cdc96.jpg"

        ]}
        YtVideo={'https://www.youtube.com/embed/cxlIUOMUrS4'}

      />
  },
  {

    path: '/Hinduism/:id',
    element: <SingleTempelPage

      apiurl={'http://localhost:5000/temples'}

    />
  },
  

  // Islam masjids routing 
  {
    path: `/masjid`,
    element:
      <PilgreamPlacesPage
        apiUrl={'http://localhost:5000/masjid'}
        color={'green'}
        title={'Islam'}
        Quote={'“The journey of a thousand miles begins with one step.”'}
        HBgImage={[
          "https://i.pinimg.com/564x/44/f1/e6/44f1e60038c43e6ff7e78da21c51aa6a.jpg",
          "https://i.pinimg.com/564x/e2/47/61/e24761b76bf72ccdc0223f494f79bcaf.jpg",
          "https://i.pinimg.com/564x/77/3c/f6/773cf6da5df28f69841e937a076b9360.jpg"
        ]}
      />
  },

  {
    path: '/Islam/:id',
    element: <SingleMasjidPage
      apiurl={'http://localhost:5000/masjid'}

    />
  },

  // Dudhism routing page 
  {
    path: `/buddha`,
    element:
      <PilgreamPlacesPage
        apiUrl={'http://localhost:5000/budhism'}
        color={'red'}
        title={'Buddhism'}
        Quote={'“The journey of a thousand miles begins with one step.”'}
        HBgImage={
          [
            "https://i.pinimg.com/474x/17/8c/c6/178cc6f5373f48af07350d4c441b3462.jpg",
            "https://i.pinimg.com/474x/64/59/53/645953f2fa1d42e856b3617c341820d5.jpg",
            "https://i.pinimg.com/474x/37/06/84/370684750a6a267dd39b96c71f1e51fe.jpg",
          ]
        }
      />
  },
  {
    path: '/Buddhism/:id',
    element: <SingleTempelPage
      apiurl={'http://localhost:5000/budhism'}
    />
  },



//  christanty routing 

  {
    path: `/christianity`,
    element:
      <PilgreamPlacesPage
        apiUrl={'http://localhost:5000/christianity'}
        color={'red'}
        title={'Christianity'}
        Quote={'Peace comes from within. Do not seek it without.'}
        HBgImage={
          [
            "https://i.pinimg.com/564x/1a/f9/a8/1af9a81dc384566b334b56f6ae35e9c3.jpg",
            "https://i.pinimg.com/564x/b9/30/e7/b930e7cae7782b3c6a36c6abdef240d6.jpg",

          ]
        }
      />
  },
  {
    path: '/christianity/:id',
    element: <SingleTempelPage
      apiurl={'http://localhost:5000/christianity'}
    />
  },


  // Sikhism routing page
  {
    path: `/sikhism`,
    element:
      <PilgreamPlacesPage
        apiUrl={'http://localhost:5000/sikhism'}
        color={'red'}
        title={'sikhism'}
        Quote={'Peace comes from within. Do not seek it without.'}
        HBgImage={
          [
            "https://i.pinimg.com/564x/1a/f9/a8/1af9a81dc384566b334b56f6ae35e9c3.jpg",
            "https://i.pinimg.com/564x/b9/30/e7/b930e7cae7782b3c6a36c6abdef240d6.jpg",

          ]
        }
      />
  },
  {
    path: '/sikhism/:id',
    element: <SingleTempelPage
      apiurl={'http://localhost:5000/sikhism'}
    />
  },




  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <contact />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>

)
