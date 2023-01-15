import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --main-color: '#3dd3c4',
    --border-color: #e0e0e0;
    --font-color: #222222;
    --sub-font-color: #515151;

    --hover-color: #76d6bc;
    --accent-color: #ff7675;
}

* {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Pretendard', sans-serif;
}
`;

export default GlobalStyle;
