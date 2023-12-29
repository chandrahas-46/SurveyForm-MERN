import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { SurveyContext } from "./surveyContext";

// all the pages and component to render
import Navbar from "./Component/Navbar";
import { Home } from "./Component/home";
import { SurveyList } from "./Component/SurveyList";
import { Signup } from "./Component/Signup";
import { Login } from "./Component/Login";
import { Error } from "./Component/error";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// main app function 
function App() {
  // all the link routes
  const router = createBrowserRouter([
    {
      path:"/", 
      element: <Navbar />,
      errorElement: <Error />,
      children:[
        { index:true, element: <Home />},
        { path:"/admin", element: <SurveyList />},
        { path:"/signup", element: <Signup />},
        { path:"/login", element: <Login />}
      ]
    }
  ]);
 
  return (
    <>
      {/* custom product context provider */}
      <SurveyContext>
        {/* routes */}
        <RouterProvider router={router} /> 
        <ToastContainer />   
      </SurveyContext>
    </>
  );
}

export default App;

