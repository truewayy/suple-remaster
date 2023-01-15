import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/index";
import Login from "./pages/Login/index";
import IdSearch from "./pages/IdSearch/index";
import PwSearch from "./pages/PwSearch/index";
import SignUp from "./pages/SignUp/index";
import Notice from "./pages/Notice/index";
import Myinformation from "./pages/Myinformation";
import Nav from "./components/Nav";
import GlobalStyle from "./globalStyles";
import WriteButton from "./components/WriteButton";
import WriteForm from "./pages/WriteForm";
import WrittenPost from "./pages/WrittenPost";
import Search from "./pages/Search";
import PwChange from "./pages/ChangePassword";
import AccountQuit from "./pages/AccountQuit";

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
        <Route path="/myinformation/changePassword" element={<PwChange />} />
        <Route path="/myinformation/quit" element={<AccountQuit />} />
        <Route path="/write" element={<WriteForm />} />
        <Route path="/total" element={<WrittenPost />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <WriteButton />
    </BrowserRouter>
  );
}

export default App;
