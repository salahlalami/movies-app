import { filmStateType, filmType } from "@/types";
import * as actionTypes from "./types";

export const INITIAL_STATE: filmStateType = {
  favorList: [],
  search: {
    result: { items: [], total: 0, page: 1 },
    isLoading: false,
    isSuccess: false,
  },
  getById: {
    result: null,
    isLoading: false,
    isSuccess: false,
  },
};

function removeItemFiter(array: filmType[], payload?: string) {
  const list = [...array];
  return list.filter((item: filmType) => item.imdbID !== payload);
}

const filmsReducer = (
  state = INITIAL_STATE,
  action: { type?: string; payload?: any; keyState: string }
) => {
  const { payload, keyState } = action;

  switch (action.type) {
    case actionTypes.RESET_STATE:
      return INITIAL_STATE;
    case actionTypes.REQUEST_LOADING:
      return {
        ...state,
        [keyState]: {
          ...state[keyState],
          isLoading: true,
        },
      };
    case actionTypes.REQUEST_FAILED:
      return {
        ...state,
        [keyState]: {
          ...state[keyState],
          isLoading: false,
          isSuccess: false,
        },
      };
    case actionTypes.REQUEST_SUCCESS:
      return {
        ...state,
        [keyState]: {
          result: payload,
          isLoading: false,
          isSuccess: true,
        },
      };
    case actionTypes.FAVOR:
      return {
        ...state,
        favorList: [...state.favorList, payload],
      };
    case actionTypes.DISFAVOR:
      return {
        ...state,
        favorList: removeItemFiter(state.favorList, payload),
      };
    default:
      return state;
  }
};

export default filmsReducer;
