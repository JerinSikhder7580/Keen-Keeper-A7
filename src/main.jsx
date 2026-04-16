import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root.jsx';
import Home from './Home/Home.jsx';
// import FriendDetails from './Home/friends/friendDetails.jsx';
import FriendProvider from './context/FriendProvider.jsx';
import TimeLine from './pages/timeline/TimeLine.jsx';
import Status from './pages/status/Status.jsx';
import FriendDetails from './Details/FriendDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>
      }, {
        path: "details",
        element: <FriendDetails></FriendDetails>
      },
      {
        path: "details/:id",
        element: <FriendDetails></FriendDetails>
      },
      {
        path: "timeline",
        element: <TimeLine></TimeLine>
      },
      {
        path:"status",
        element:<Status></Status>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
    </FriendProvider>
  </StrictMode>,
)
