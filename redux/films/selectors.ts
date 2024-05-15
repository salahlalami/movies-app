import { filmType } from "@/types";
import { createSelector } from "reselect";

const selectfilms = (state: { films: any }) => state.films;

export const selectCurrentItem = createSelector(
  [selectfilms],
  (films) => films.current
);

export const selectSearchedItems = createSelector(
  [selectfilms],
  (films) => films.search
);
export const selectById = createSelector(
  [selectfilms],
  (films) => films.getById
);

export const selectItemById = (itemId: string) =>
  createSelector(selectSearchedItems, (search) =>
    search.result.items.find((item: filmType) => item.imdbID === itemId)
  );

export const selectFavorList = createSelector(
  [selectfilms],
  (films) => films.favorList
);
export const selectLanguageList = createSelector(
  [selectfilms],
  (films) => films.languageList
);
