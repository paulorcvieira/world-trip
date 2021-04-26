type MostPopularCitiesProps = {
  slug: string;
  cityName: string;
  countryName: string;
  countryCode: string;
  cityImage: string;
}

type CarouselProps = {
  title: string;
  imageUrl: string;
}

export type ContinentType = {
  slug: string;
  name: string;
  bannerImage: string;
  description: string;
  about: string;
  carousel: CarouselProps;
  numberOfCountries: number;
  numberOfLanguages: number;
  amountMostPopularCities: number;
  mostPopularCities: MostPopularCitiesProps[];
}

export type ContinentProps = {
  continent: ContinentType;
}