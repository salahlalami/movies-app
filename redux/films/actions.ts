import * as actionTypes from "./types";
import { request } from "@/request";
import storePersist from "@/redux/storePersist";
import { filmStateType, filmType, searchOptionsType } from "@/types";
import { Dispatch } from "redux";

export const films = {
  favorToggle:
    ({ imdbID }: { imdbID: string }) =>
    async (dispatch: Dispatch, getState: () => filmStateType) => {
      let favorList: filmType[] = getState().films.favorList;
      const filmList: filmType[] = getState().films.search.result.items;

      const list = [...favorList];

      const exist = list.find((x) => x.imdbID === imdbID);

      if (exist) {
        dispatch({
          type: actionTypes.DISFAVOR,
          payload: imdbID,
        });

        storePersist.set("favorList", [
          ...list.filter((item: filmType) => item.imdbID !== imdbID),
        ]);
      } else {
        const favorFilm = filmList.find((x) => x.imdbID === imdbID);
        storePersist.set("favorList", [...list, favorFilm]);
        dispatch({
          type: actionTypes.FAVOR,
          payload: favorFilm,
        });
      }
    },
  search:
    ({ options = {} }: { options: searchOptionsType }) =>
    async (dispatch: Dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: "search",
        payload: null,
      });

      let data = await request.search({ options });

      if (data.success === true) {
        const items: filmType[] = [...data.result.Search];
        const total = parseInt(data.result.totalResults);
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: "search",
          payload: { items, total, page: options.page ?? 1 },
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: "search",
          payload: null,
        });
      }
    },
  getById:
    ({ options }: { options: { i: string } }) =>
    async (dispatch: Dispatch) => {
      dispatch({
        type: actionTypes.REQUEST_LOADING,
        keyState: "get",
        payload: null,
      });

      let data = await request.getById({ options });

      if (data.success === true) {
        dispatch({
          type: actionTypes.REQUEST_SUCCESS,
          keyState: "getById",
          payload: data.result,
        });
      } else {
        dispatch({
          type: actionTypes.REQUEST_FAILED,
          keyState: "search",
          payload: null,
        });
      }
    },
};
