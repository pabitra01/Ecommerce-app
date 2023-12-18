import { AppDispatch, RootState } from "../..";
import apiClient from "../../../service/apiClient";
import { setIsGetProductsPending, setProducts } from "../../reducer/products";

export const getAllProductsAction = () => {
    return (dispatch: AppDispatch) => {
      dispatch(setIsGetProductsPending(true))
      apiClient({ method: "GET", url: "/" })
        .then(({ data }) => {
          if (data) {
            dispatch(setProducts(data.products));
          }
        })
        .catch((err) => {
          console.log(err);
        }).finally(()=>{
          dispatch(setIsGetProductsPending(false))
        })
    };
  };