import { stacks } from "constants/options";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { partState } from "store/state";

const useSetField = () => {
  const part = useRecoilValue(partState);
  const [field, setField] = useState(stacks.all);
  useEffect(() => {
    setField(stacks[part]);
  }, [part]);
  return field;
};

export default useSetField;
