import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import { Header } from "./header";
import { TrendingRepos } from "./repos";
import { TrendingDev } from "./developers";
import styled from "@emotion/styled";

const Main = styled.main({
  maxWidth: 1012,
  margin: "auto",
  width: "calc(100vw - 32px)",

  "@media screen and (min-width:1100px)": {
    width: 1012,
  },
});

export const Trending = () => {
  const inTrendingDevelopersRoute = useRouteMatch({
    path: "/trending/developers",
    strict: true,
    sensitive: true,
  });

  return (
    <>
      <Header
        renderSubTitle={() => {
          if (inTrendingDevelopersRoute) {
            return (
              <p> These are the developers building the hot tools today.</p>
            );
          }
          return (
            <p> See what the GitHub community is most excited about today.</p>
          );
        }}
      />
      <Main>
        <Switch>
          <Route exact path="/trending">
            <TrendingRepos />
          </Route>
          <Route exact path="/trending/developers">
            <TrendingDev />
          </Route>
        </Switch>
      </Main>
    </>
  );
};
