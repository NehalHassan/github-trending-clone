/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Box = styled.div({
  display: "flex",
  flexFlow: "column",
  backgroundColor: "#22272e",
  border: "1px solid #444c56",
  borderRadius: 6,
});

const TrendingFiltersSection = styled.div({
  padding: 16,
});
const Nav = styled.nav({});

const NavLink = styled.span(({ isActiv }: { isActiv: boolean }) => ({
  position: "relative",
  float: "left",
  padding: "5px 16px",
  fontWeight: 500,
  lineHeight: "20px",
  color: "#adbac7",
  border: "1px solid #444c56",
  cursor: "pointer",
  backgroundColor: isActiv ? "#316dca" : "initial",
}));

export const SwithNav = ({
  paths,
  activePath,
}: {
  paths: string[];
  activePath: string;
}) => {
  return (
    <Nav>
      <Link to={paths[0]}>
        <NavLink
          isActiv={paths[0] === activePath}
          css={{
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
            borderRight: 0,
          }}
        >
          {" "}
          Repositories
        </NavLink>
      </Link>
      <Link to={paths[1]}>
        <NavLink
          isActiv={paths[1] === activePath}
          css={{
            borderTopRightRadius: 6,
            borderBottomRightRadius: 6,
            borderLeft: 0,
          }}
        >
          {" "}
          Developers
        </NavLink>
      </Link>
    </Nav>
  );
};

export const TrendingLayout = ({ children }: PropsWithChildren<any>) => {
  const { path } = useRouteMatch();

  return (
    <Box>
      <TrendingFiltersSection>
        <SwithNav
          paths={["/trending", "/trending/developers"]}
          activePath={path}
        />
      </TrendingFiltersSection>
      <div>{children}</div>
    </Box>
  );
};
