import { React } from "react";
import * as Styled from "./styled";

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
    <Styled.Content
      id="content"
      onChange={(e) => handleFront(e.target.checked, e.target.value)}
    >
      <Styled.FormLabel>
        <Styled.FormCheckMulti
          name="front"
          id="normal"
          value="React.js"
          defaultChecked={props.stack.includes("React.js") === true}
        />
        <Styled.FormCheckText>React.js</Styled.FormCheckText>
      </Styled.FormLabel>
      <Styled.FormLabel>
        <Styled.FormCheckMulti
          name="front"
          id="normal"
          value="Vue.js"
          defaultChecked={props.stack.includes("Vue.js") === true}
        />
        <Styled.FormCheckText>Vue.js</Styled.FormCheckText>
      </Styled.FormLabel>
      <Styled.FormLabel>
        <Styled.FormCheckMulti
          name="front"
          id="normal"
          value="Anguler.js"
          defaultChecked={props.stack.includes("Anguler.js") === true}
        />
        <Styled.FormCheckText>Anguler.js</Styled.FormCheckText>
      </Styled.FormLabel>
      <Styled.FormLabel>
        <Styled.FormCheckMulti
          name="front"
          id="normal"
          value="JQuery"
          defaultChecked={props.stack.includes("JQuery") === true}
        />
        <Styled.FormCheckText>JQuery</Styled.FormCheckText>
      </Styled.FormLabel>
    </Styled.Content>
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
    <Styled.Content
      id="content"
      onChange={(e) => handleBack(e.target.checked, e.target.value)}
    >
      <Styled.FormLabel>
        <Styled.FormCheckMulti
          name="back"
          id="normal"
          value="Node.js"
          defaultChecked={props.stack.includes("Node.js") === true}
        />
        <Styled.FormCheckText>Node.js</Styled.FormCheckText>
      </Styled.FormLabel>
      <Styled.FormLabel>
        <Styled.FormCheckMulti
          name="back"
          id="normal"
          value="Spring"
          defaultChecked={props.stack.includes("Spring") === true}
        />
        <Styled.FormCheckText>Spring</Styled.FormCheckText>
      </Styled.FormLabel>
      <Styled.FormLabel>
        <Styled.FormCheckMulti
          name="back"
          id="normal"
          value="Django"
          defaultChecked={props.stack.includes("Django") === true}
        />
        <Styled.FormCheckText>Django</Styled.FormCheckText>
      </Styled.FormLabel>
      <Styled.FormLabel>
        <Styled.FormCheckMulti
          name="back"
          id="normal"
          value="Ruby"
          defaultChecked={props.stack.includes("Ruby") === true}
        />
        <Styled.FormCheckText>Ruby</Styled.FormCheckText>
      </Styled.FormLabel>
    </Styled.Content>
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
    <Styled.Content
      id="content"
      onChange={(e) => handleApp(e.target.checked, e.target.value)}
    >
      <Styled.FormLabel>
        <Styled.FormCheckMulti
          name="app"
          id="normal"
          value="RN"
          defaultChecked={props.stack.includes("RN") === true}
        />
        <Styled.FormCheckText>RN</Styled.FormCheckText>
      </Styled.FormLabel>
      <Styled.FormLabel>
        <Styled.FormCheckMulti
          name="app"
          id="normal"
          value="Flutter"
          defaultChecked={props.stack.includes("Flutter") === true}
        />
        <Styled.FormCheckText>Flutter</Styled.FormCheckText>
      </Styled.FormLabel>
      <Styled.FormLabel>
        <Styled.FormCheckMulti
          name="app"
          id="normal"
          value="Kotlin"
          defaultChecked={props.stack.includes("Kotlin") === true}
        />
        <Styled.FormCheckText>Kotlin</Styled.FormCheckText>
      </Styled.FormLabel>
      <Styled.FormLabel>
        <Styled.FormCheckMulti
          name="app"
          id="normal"
          value="Swift"
          defaultChecked={props.stack.includes("Swift") === true}
        />
        <Styled.FormCheckText>Swift</Styled.FormCheckText>
      </Styled.FormLabel>
    </Styled.Content>
  );
};
