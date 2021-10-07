import styled from "@emotion/styled";

const HeaderWrapper = styled.header({
  color: "red",
  background: "#2d333b",
  width: "calc(100% - 32px)",
  height: "200px",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 16,
  padding: 16,
  borderBottom: "1px solid #444c56",
  p: {
    color: "#768390",
  },
});

const HeaderTitle = styled.h1({
  color: "#adbac7",
  margin: 0,
});

const Header = ({ renderSubTitle }: { renderSubTitle: () => JSX.Element }) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Trending</HeaderTitle>
      {renderSubTitle()}
    </HeaderWrapper>
  );
};

export { Header };
