// import React from 'react';
import { Provider } from 'react-redux';
import { mainRoutes } from './Routes/mainRouter';
import { RouterProvider } from 'react-router-dom';
import { store } from './Global/Store';

function App() {
  return (
    <div>
      <Provider store={store}>
        
    <RouterProvider router ={mainRoutes}/>
      </Provider>
    </div>
  );
}

export default App;

