export type RepositoryIdentifier = {
  repositoryName: string;
  url: string;
  description: string;
};

export interface Developer {
  rank: number;
  username: string;
  name: string;
  url: string;
  avatar: string;
  since: string;
  popularRepository: RepositoryIdentifier;
}
