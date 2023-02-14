import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import IdSearch from "./pages/IdSearch";
import PwSearch from "./pages/PwSearch";
import SignUp from "./pages/SignUp";
import Notice from "./pages/Notice";
import MyInformation from "./pages/MyInformation";
import Nav from "./components/Nav";
import WriteButton from "./components/WriteButton";
import WrittenPost from "./pages/WrittenPost";
import Search from "./pages/Search";
import PwChange from "./pages/ChangePassword";
import Exit from "./pages/Exit";
import { global } from "globalStyles";
import { ROUTES } from "constants/routes";
import PostingForm from "components/PostingForm";

function App() {
  return (
    <BrowserRouter>
      {global}
      <Nav />
      <Routes>
        <Route path={ROUTES.HOME} element={<Main />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.ID_SEARCH} element={<IdSearch />} />
        <Route path={ROUTES.PW_SEARCH} element={<PwSearch />} />
        <Route path={ROUTES.NOTICE} element={<Notice />} />
        <Route path={ROUTES.MY_INFORMATION} element={<MyInformation />} />
        <Route path={ROUTES.CHANGE_PASSWORD} element={<PwChange />} />
        <Route path={ROUTES.EXIT} element={<Exit />} />
        <Route path={ROUTES.WRITE} element={<PostingForm />} />
        <Route path={ROUTES.TOTAL} element={<WrittenPost />} />
        <Route path={ROUTES.SEARCH} element={<Search />} />
      </Routes>
      <WriteButton />
    </BrowserRouter>
  );
}

export default App;
