import { TrendingLayout } from "./trending-layout";
import { ReactComponent as RepoIcon } from "./repo.svg";
import { ReactComponent as StarIcon } from "./star.svg";
import { ReactComponent as BranchIcon } from "./branch.svg";
import {
  List,
  Card,
  HeaderText,
  CardFooter,
  cardTagsStyles,
  CardTagLink,
  AvatarWrappers,
  Avatar,
} from "./repos-styles";

export const TrendingRepos = () => {
  // useEffect(() => {
  //   console.log("sdsd");
  //   githubTrends().then((res: any) => console.log(res, "sdssdssdd"));
  //   fetchTrendingByRepos();
  // }, []);

  return (
    <TrendingLayout>
      <List>
        <Card>
          <HeaderText>
            <a>
              <RepoIcon style={{ fill: "#768390" }} />
              <span> nvm-sh / nvm</span>
            </a>
          </HeaderText>
          <p style={{ margin: 0, color: "#768390" }}>
            Node Version Manager - POSIX-compliant bash script to manage
            multiple active node.js versions
          </p>
          <CardFooter>
            <div style={{ display: "flex" }}>
              <span style={cardTagsStyles}>Shell</span>

              <CardTagLink>
                <StarIcon style={{ fill: "#768390" }} />
                <span>51,934</span>
              </CardTagLink>

              <CardTagLink>
                <BranchIcon style={{ fill: "#768390" }} />
                <span>51,934</span>
              </CardTagLink>
            </div>

            <AvatarWrappers>
              <span style={{ marginRight: 6 }}>Built by</span>
              <Avatar>
                <img src="https://avatars.githubusercontent.com/u/45469?s=40&v=4" />
              </Avatar>
              <Avatar>
                <img src="https://avatars.githubusercontent.com/u/45469?s=40&v=4" />
              </Avatar>
              <Avatar>
                <img src="https://avatars.githubusercontent.com/u/45469?s=40&v=4" />
              </Avatar>
            </AvatarWrappers>
          </CardFooter>
        </Card>
      </List>
    </TrendingLayout>
  );
};
