import { React } from "react";
import styled from "@emotion/styled/macro";
import { stacks } from "constants/options";

const StackSelect = ({ field, stack, setStack }) => {
  const techStack = stacks[field];
  const handleChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setStack([...stack, value]);
    } else {
      setStack(stack.filter((item) => item !== value));
    }
  };

  return (
    <Content id="content" onChange={handleChange}>
      {techStack?.map((tech) => (
        <FormLabel key={tech}>
          <FormCheckMulti
            type="checkbox"
            name={field}
            id="normal"
            value={tech}
            defaultChecked={stack.includes(tech)}
          />
          <FormCheckText>{tech}</FormCheckText>
        </FormLabel>
      ))}
    </Content>
  );
};

export default StackSelect;

const Content = styled.form`
  display: flex;
  width: 85%;
  &#group {
    margin-bottom: 1.5rem;
  }
`;

const FormLabel = styled.label``;
const FormCheckText = styled.span`
  font-size: 16px;
  padding: 4px 15px;
  background: none;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #777;
  margin-right: 8px;
  @media screen and (max-width: 960px) {
    font-size: 14px;
    padding: 4px 10px;
  }
`;

const FormCheckMulti = styled.input`
  &:checked {
    display: inline-block;
    background: none;
    padding: 0px 10px;
    text-align: center;
    height: 35px;
    line-height: 33px;
    font-weight: 500;
    display: none;
  }
  &#difficult {
    &:checked + ${FormCheckText} {
      color: #7800ff;
      font-weight: 600;
    }
  }
  &#normal {
    &:checked + ${FormCheckText} {
      color: #222222;
      font-weight: 600;
    }
  }
  &#easy {
    &:checked + ${FormCheckText} {
      color: #346cfd;
      font-weight: 600;
    }
  }
  display: none;
`;
