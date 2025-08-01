import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../auth/AuthContext.tsx";
import { RequireAdmin } from "../auth/RequireAdmin.tsx"
import { Home } from "./pages/Home";
import { CakeList } from "./pages/CakeList.tsx";
import { CreateCake } from "./pages/CreateCake.tsx";
import { EditCake } from "./pages/EditCake.tsx";
import { CakeDetails } from "./pages/CakeDetails.tsx";
import './App.css'
import { Header } from "./components/Header.tsx";
import { Login } from "./pages/Login.tsx";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cakes" element={<CakeList />} />
          <Route path="/cakes/create" element={
            <RequireAdmin>
              <CreateCake />
            </RequireAdmin>
          } />
          <Route path="/cakes/:id" element={<CakeDetails />} />

          <Route path="/cakes/:id/edit" element={
            <RequireAdmin>
              <EditCake />
            </RequireAdmin>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
