import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import IdSearch from "./pages/IdSearch";
import PwSearch from "./pages/PwSearch";
import SignUp from "./pages/SignUp";
import Notice from "./pages/Notice";
import MyInformation from "./pages/MyInformation";
import Nav from "./components/Nav";
import GlobalStyle from "./globalStyles";
import WriteButton from "./components/WriteButton";
import WriteForm from "./pages/WriteForm";
import WrittenPost from "./pages/WrittenPost";
import Search from "./pages/Search";
import PwChange from "./pages/ChangePassword";
import Exit from "./pages/Exit";

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
        <Route path="/myinformation" element={<MyInformation />} />
        <Route path="/myinformation/changePassword" element={<PwChange />} />
        <Route path="/myinformation/quit" element={<Exit />} />
        <Route path="/write" element={<WriteForm />} />
        <Route path="/total" element={<WrittenPost />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <WriteButton />
    </BrowserRouter>
  );
}

export default App;
