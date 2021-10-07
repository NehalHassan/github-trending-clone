import styled from "@emotion/styled";

export const cardTagsStyles = {
  marginRight: 16,
  color: "#768390",
  display: "flex",
  alignItems: "center",
};

export const List = styled.ul({
  listStyle: "none",
  margin: 0,
  padding: 0,
  li: {
    borderTop: "0.5px solid",
    display: "block",
  },
});

export const Card = styled.li({
  padding: 16,
});

export const CardFooter = styled.span({
  display: "flex",
  marginTop: 16,
  flexFlow: "column",
  "@media screen and (min-width:540px)": {
    flexFlow: "row",
  },
});

export const HeaderText = styled.h1({
  fontWeight: 400,
  fontSize: 20,
  margin: 0,
  a: {
    cursor: "pointer",
    color: "#539bf5",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const CardTagLink = styled.a({
  ...cardTagsStyles,
  cursor: "pointer",
  "&:hover": {
    span: {
      color: "#539bf5",
    },
    path: {
      fill: "#539bf5",
    },
  },
  span: {
    margin: 6,
  },
});

export const AvatarWrappers = styled.span({
  ...cardTagsStyles,
  "&media screen and (max-width:540px)": {
    display: "block",
  },
});

export const Avatar = styled.a({
  background: "red",
  marginRight: 2,
  textAlign: "center",
  height: 20,
  width: 20,
  borderRadius: "50%",
  overflow: "hidden",
  border: "1px solid",
});
