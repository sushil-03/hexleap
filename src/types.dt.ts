export type SportCardType = {
  id: number,
  img: string,
  heading: string;
  totalEvent?: string;
  sports?: string;
  isAdd: boolean;
  content?: string
}
export type SpotlightType = {
  img: string,
  heading: string,
  timestamp: string,
  location: string,
  buttonText: string;
}