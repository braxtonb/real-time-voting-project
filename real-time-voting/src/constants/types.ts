export interface Franchise {
  id: number;
  title: string;
}

export interface Vote {
  id: number;
  franchise: Franchise;
  username: string;
  created: number;
}