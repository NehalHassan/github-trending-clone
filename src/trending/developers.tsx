import { useQuery } from "react-query";

import { TrendingLayout } from "./trending-layout";
import { ReactComponent as RepoIcon } from "./repo.svg";
import { ReactComponent as PopularIcon } from "./popular.svg";
import {
  List,
  Card,
  CardNameAngImgWrapper,
  CardNameAngImg,
  CardAvatar,
  CardName,
  CardInfo,
  CardInfoItem,
  RepoLink,
} from "./developers-styles";
import { fetchTrendingByDev } from "../services";
import { Developer } from "../types/developer";

export const TrendingDev = () => {
  const { isLoading, error, data } = useQuery<any>("trending_Devs", () =>
    fetchTrendingByDev().then((res) => res.data)
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
        {data.map((dev: Developer) => (
          <Card key={dev.rank}>
            <CardNameAngImgWrapper>
              <span style={{ width: 16 }}>{dev.rank}</span>

              <CardNameAngImg>
                <CardAvatar>
                  <img src={dev.avatar} alt={`${dev.name} avatar`} />
                </CardAvatar>

                <div>
                  <CardName>
                    <a href={dev.url} target="_blank" rel="noopener noreferrer">
                      {dev.name}
                    </a>
                  </CardName>
                  <span>{dev.username}</span>
                </div>
              </CardNameAngImg>
            </CardNameAngImgWrapper>

            <CardInfo>
              <CardInfoItem>
                <PopularIcon style={{ fill: "#cc6b2c" }} />
                <span>Popular Repo</span>
              </CardInfoItem>

              <CardInfoItem>
                <RepoIcon style={{ fill: "#adbac7" }} />
                <RepoLink
                  href={dev.popularRepository.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dev.popularRepository.repositoryName}
                </RepoLink>
              </CardInfoItem>

              <p style={{ margin: "2px 0", fontSize: 12 }}>
                {dev.popularRepository.description}
              </p>
            </CardInfo>
          </Card>
        ))}
      </List>
    </TrendingLayout>
  );
};
