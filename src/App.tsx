import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CakeList } from "./pages/CakeList.tsx";
import { CreateCake } from "./pages/CreateCake.tsx";
import { EditCake } from "./pages/EditCake.tsx";
import { CakeDetails } from "./pages/CakeDetails.tsx";
import './App.css'
import { Header } from "./components/Header.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cakes" element={<CakeList />} />
          <Route path="/cakes/create" element={<CreateCake />} />
          <Route path="/cakes/:id" element={<CakeDetails />} />
          <Route path="/cakes/:id/edit" element={<EditCake />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
