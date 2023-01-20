import { useNavigate } from "react-router-dom";

const Navigate = () => {
  const navigate = useNavigate();
  const go = (path) => {
    navigate(path);
  };
  return { go };
};

export default Navigate;
