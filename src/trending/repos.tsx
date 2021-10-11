import { useQuery } from "react-query";
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
import { fetchTrendingByRepos } from "../services";
import { Repository } from "../types/repository";

export const TrendingRepos = () => {
  const { isLoading, error, data } = useQuery<any>("trending_repos", () =>
    fetchTrendingByRepos().then((res) => res.data)
  );

  if (isLoading)
    return (
      <TrendingLayout>
        <p style={{ fontSize: 16, padding: "0 16px" }}>Loading...</p>
      </TrendingLayout>
    );

  if (error)
    return (
      <TrendingLayout>
        <p style={{ fontSize: 16, padding: "0 16px" }}>
          An error has occurred:{" "}
        </p>
      </TrendingLayout>
    );

  return (
    <TrendingLayout>
      <List>
        {data?.map((repo: Repository) => (
          <Card key={repo.rank}>
            <HeaderText>
              <a href={repo.url} target="_blank" rel="noopener noreferrer">
                <RepoIcon style={{ fill: "#768390" }} />
                <span>{repo.repositoryName}</span>
              </a>
            </HeaderText>
            <p style={{ margin: 0, color: "#768390" }}>{repo.description}</p>
            <CardFooter>
              <div style={{ display: "flex" }}>
                <span style={cardTagsStyles}>{repo.language}</span>

                <CardTagLink>
                  <StarIcon style={{ fill: "#768390" }} />
                  <span>{repo.starsSince}</span>
                </CardTagLink>

                <CardTagLink>
                  <BranchIcon style={{ fill: "#768390" }} />
                  <span>{repo.forks}</span>
                </CardTagLink>
              </div>

              <AvatarWrappers>
                <span style={{ marginRight: 6 }}>Built by</span>
                {repo.builtBy.map((dev) => (
                  <Avatar
                    href={dev.url}
                    key={dev.username}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={dev.avatar} alt={dev.username} />
                  </Avatar>
                ))}
              </AvatarWrappers>
            </CardFooter>
          </Card>
        ))}
      </List>
    </TrendingLayout>
  );
};
