import React, { createContext, useReducer } from "react";
import axios from "../service/axios";
import { apiPathReturn, HTTP_TYPE } from "../utils/constants/apiConstant";

export const APIPath = apiPathReturn();

const initialStates = {
  loading: false,
  apiError: null,
  httpError: null,
};

const StateReducer = (state, action) => {
  switch (action.type) {
    case "REQUEST_BEFORE":
      return {
        ...state,
        loading: action.payload.loading,
      };
    case "API_ERROR":
      return {
        ...state,
        apiError: action.payload.apiError,
      };
    case "HTTP_ERROR":
      return {
        ...state,
        httpError: action.payload.httpError,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

const ApiContext = createContext(initialStates);

function ApiProvider({ children }) {
  const [state, dispatch] = useReducer(StateReducer, initialStates);

  const httpRequest = async (
    method,
    path,
    data = {},
    options = {
      showLoading: true,
      headers: {},
    }
  ) => {
    let res = {
      data: {
        isSuccess: false,
      },
    };
    try {
      dispatch({
        type: "REQUEST_BEFORE",
        payload: {
          loading: options.showLoading || state.loading,
        },
      });

      res = await axios[method](path, data, { headers: options.headers });
    } catch (error) {
      if (error.apiError) {
        dispatch({
          type: "API_ERROR",
          payload: {
            apiError: error,
          },
        });
      } else {
        dispatch({
          type: "HTTP_ERROR",
          payload: {
            httpError: error,
          },
        });
      }
    } finally {
      dispatch({
        type: "LOADING",
        payload: {
          loading: false,
        },
      });

      return res.data;
    }
  };

  const postData = async (
    path,
    data = {},
    options = {
      showLoading: true,
      headers: {},
    }
  ) => {
    return httpRequest(HTTP_TYPE.POST.key, path, data, options);
  };

  const getData = async (
    path,
    data = {},
    options = {
      showLoading: true,
    }
  ) => {
    return httpRequest(HTTP_TYPE.GET.key, path, data, options);
  };

  return (
    <ApiContext.Provider
      value={{
        ...state,
        APIPath,
        postData,
        getData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export { ApiContext, ApiProvider };
