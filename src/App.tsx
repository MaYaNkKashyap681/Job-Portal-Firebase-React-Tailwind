import { RouterProvider } from 'react-router-dom';
import { routes } from './config/routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* <AuthProvider> */}
        <RouterProvider router={routes} />
        <ToastContainer />
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
