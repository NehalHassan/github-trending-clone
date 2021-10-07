import styled from "@emotion/styled";

export const List = styled.ul({
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const Card = styled.li({
  padding: 16,
  display: "flex",
  flexFlow: "column",
  borderTop: "0.5px solid",
  "@media screen and (min-width:540px)": {
    flexFlow: "row",
  },
});

export const CardNameAngImgWrapper = styled.div({
  display: "flex",
  alignItems: "flex-start",
  flex: 1,
});

export const CardNameAngImg = styled.div({
  display: "flex",
  alignItems: "flex-start",
  flexFlow: "row",
});

export const CardAvatar = styled.span({
  background: "red",
  margin: "0 16px",
  textAlign: "center",
  height: 48,
  width: 48,
  borderRadius: "50%",
  overflow: "hidden",
  border: "1px solid",
  display: "flex",
});

export const CardName = styled.h1({
  margin: 0,
  color: "#539bf5",
  fontWeight: 400,
  fontSize: 20,
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const CardInfo = styled.div({
  display: "flex",
  flexFlow: "column",
  flex: 2,
  "@media screen and (max-width:540px)": {
    marginTop: 12,
  },
});

export const CardInfoItem = styled.p({
  display: "flex",
  alignItems: "center",
  margin: "2px 0",
  span: {
    marginLeft: 4,
  },
});

export const RepoLink = styled.a({
  color: "#539bf5",
  marginLeft: 4,
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});
