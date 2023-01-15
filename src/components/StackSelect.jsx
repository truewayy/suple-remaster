import { React } from "react";
import styled from "styled-components";

export const FrontSelect = (props) => {
  const handleFront = (checked, value) => {
    if (checked) {
      props.setStack([...props.stack, value]);
    } else {
      // 체크 해제
      props.setStack(props.stack.filter((front) => front !== value));
    }
  };

  return (
    <Content
      id="content"
      onChange={(e) => handleFront(e.target.checked, e.target.value)}
    >
      <FormLabel>
        <FormCheckMulti
          name="front"
          id="normal"
          value="React.js"
          defaultChecked={props.stack.includes("React.js") === true}
        />
        <FormCheckText>React.js</FormCheckText>
      </FormLabel>
      <FormLabel>
        <FormCheckMulti
          name="front"
          id="normal"
          value="Vue.js"
          defaultChecked={props.stack.includes("Vue.js") === true}
        />
        <FormCheckText>Vue.js</FormCheckText>
      </FormLabel>
      <FormLabel>
        <FormCheckMulti
          name="front"
          id="normal"
          value="Anguler.js"
          defaultChecked={props.stack.includes("Anguler.js") === true}
        />
        <FormCheckText>Anguler.js</FormCheckText>
      </FormLabel>
      <FormLabel>
        <FormCheckMulti
          name="front"
          id="normal"
          value="JQuery"
          defaultChecked={props.stack.includes("JQuery") === true}
        />
        <FormCheckText>JQuery</FormCheckText>
      </FormLabel>
    </Content>
  );
};

export const BackSelect = (props) => {
  const handleBack = (checked, value) => {
    if (checked) {
      props.setStack([...props.stack, value]);
    } else {
      // 체크 해제
      props.setStack(props.stack.filter((back) => back !== value));
    }
  };

  return (
    <Content
      id="content"
      onChange={(e) => handleBack(e.target.checked, e.target.value)}
    >
      <FormLabel>
        <FormCheckMulti
          name="back"
          id="normal"
          value="Node.js"
          defaultChecked={props.stack.includes("Node.js") === true}
        />
        <FormCheckText>Node.js</FormCheckText>
      </FormLabel>
      <FormLabel>
        <FormCheckMulti
          name="back"
          id="normal"
          value="Spring"
          defaultChecked={props.stack.includes("Spring") === true}
        />
        <FormCheckText>Spring</FormCheckText>
      </FormLabel>
      <FormLabel>
        <FormCheckMulti
          name="back"
          id="normal"
          value="Django"
          defaultChecked={props.stack.includes("Django") === true}
        />
        <FormCheckText>Django</FormCheckText>
      </FormLabel>
      <FormLabel>
        <FormCheckMulti
          name="back"
          id="normal"
          value="Ruby"
          defaultChecked={props.stack.includes("Ruby") === true}
        />
        <FormCheckText>Ruby</FormCheckText>
      </FormLabel>
    </Content>
  );
};

export const AppSelect = (props) => {
  const handleApp = (checked, value) => {
    if (checked) {
      props.setStack([...props.stack, value]);
    } else {
      // 체크 해제
      props.setStack(props.stack.filter((app) => app !== value));
    }
  };

  return (
    <Content
      id="content"
      onChange={(e) => handleApp(e.target.checked, e.target.value)}
    >
      <FormLabel>
        <FormCheckMulti
          name="app"
          id="normal"
          value="RN"
          defaultChecked={props.stack.includes("RN") === true}
        />
        <FormCheckText>RN</FormCheckText>
      </FormLabel>
      <FormLabel>
        <FormCheckMulti
          name="app"
          id="normal"
          value="Flutter"
          defaultChecked={props.stack.includes("Flutter") === true}
        />
        <FormCheckText>Flutter</FormCheckText>
      </FormLabel>
      <FormLabel>
        <FormCheckMulti
          name="app"
          id="normal"
          value="Kotlin"
          defaultChecked={props.stack.includes("Kotlin") === true}
        />
        <FormCheckText>Kotlin</FormCheckText>
      </FormLabel>
      <FormLabel>
        <FormCheckMulti
          name="app"
          id="normal"
          value="Swift"
          defaultChecked={props.stack.includes("Swift") === true}
        />
        <FormCheckText>Swift</FormCheckText>
      </FormLabel>
    </Content>
  );
};

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

const FormCheckMulti = styled.input.attrs({ type: "checkbox" })`
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
