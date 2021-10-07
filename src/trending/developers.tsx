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

export const TrendingDev = () => {
  return (
    <TrendingLayout>
      <List>
        <Card>
          <CardNameAngImgWrapper>
            <span style={{ width: 16 }}>1</span>

            <CardNameAngImg>
              <CardAvatar>
                <img src="https://avatars.githubusercontent.com/u/45469?s=40&v=4" />
              </CardAvatar>

              <div>
                <CardName>
                  <a>Brad Fitzpatrick</a>
                </CardName>
                <span>bradfitz</span>
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
              <RepoLink>Popular Repokkk</RepoLink>
            </CardInfoItem>

            <p style={{ margin: "2px 0", fontSize: 12 }}>
              Popular RepoPopular RepoPopular RepoPopular RepoPopular
              RepoPopular RepoPopular RepoPopular RepoPopular RepoPopular
              RepoPopular RepoPopular RepoPopular Repo
            </p>
          </CardInfo>
        </Card>
      </List>
    </TrendingLayout>
  );
};
