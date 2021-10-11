import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Trending } from "./trending";

const queryClient = new QueryClient();

const Wrapper = styled.div({
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Wrapper>
          <Global
            styles={css`
              body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                  Helvetica, Arial, sans-serif, "Apple Color Emoji",
                  "Segoe UI Emoji";
                font-size: 14px;
                line-height: 1.5;
                margin: 0;
                color: #adbac7;
                background-color: #22272e;
              }
            `}
          />
          <Switch>
            <Route path="/trending">
              <Trending />
            </Route>
            <Redirect from="/" to="/trending" />
          </Switch>
        </Wrapper>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
