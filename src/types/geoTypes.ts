export interface IGeoResponse {
  results: IGeoResult[];
}

interface IGeoResult {
  name: string;
  latitude: number;
  longitude: number;
}
