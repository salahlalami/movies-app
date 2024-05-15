export type optionsType = {
  s: string;
  y: number | null;
  type: string | null;
  page: number;
};

export type idType = {
  i: string;
};

export type keyOptionsType = keyof optionsType;
export type keyIdType = keyof idType;

export type searchOptionsType = {
  [key in keyof optionsType]?: optionsType[key];
};

export interface filmType {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

export interface filmStateType {
  favorList: filmType[];
  search: {
    result: { items: filmType[]; total: number; page: number };
    isLoading: boolean;
    isSuccess: boolean;
  };
  [key: string]: any;
}

export type favorType = "all" | "favored" | "unfavored";
