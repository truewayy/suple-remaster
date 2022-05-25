import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main/index"
import Login from "./pages/Login/index"
import IdSearch from "./pages/IdSearch/index"
import PwSearch from "./pages/PwSearch/index"
import SignUp from "./pages/SignUp/index"
import Notice from "./pages/Notice/index"
import Myinformation from "./pages/Myinformation"
import Nav from "./components/navbar/index"
import GlobalStyle from "./globalStyles"
import WriteButton from "./components/WriteButton"
import WriteForm from "./pages/WriteForm"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/idsearch" element={<IdSearch />} />
        <Route path="/pwsearch" element={<PwSearch />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/myinformation" element={<Myinformation />} />
        <Route path="/write" element={<WriteForm />} />
      </Routes>
      <WriteButton />
    </BrowserRouter>
  );
}

export default App;
