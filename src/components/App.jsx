import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// import pages
import {
  Quiz,
  SetupForm,
  Error,
  Login,
  Register,
  ProtectedRoute,
  SharedLayout,
  Home,
  Dashboard,
} from "../pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='setup' element={<SetupForm />} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
