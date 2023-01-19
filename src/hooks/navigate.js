import { useNavigate } from "react-router";

const Navigate = () => {
  const navigate = useNavigate();
  const go = (path) => {
    navigate(path);
  };
  return { go };
};

export default Navigate;
