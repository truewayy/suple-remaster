import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
export const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
