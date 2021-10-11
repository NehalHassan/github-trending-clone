export type DeveloperIdentifier = {
  username: string;
  url: string;
  avatar: string;
};

export interface Repository {
  rank: number;
  username: string;
  repositoryName: string;
  url: string;
  description: string;
  language: null | string;
  languageColor: null | string;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: string;
  builtBy: DeveloperIdentifier[];
}
