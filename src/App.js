import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Pages/Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
