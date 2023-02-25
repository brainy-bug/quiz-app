import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import { Quiz, SetupForm, Error } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SetupForm />} />
        <Route path='quiz' element={<Quiz />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App