export enum DataStateEnum {
  LOADED,
  LOADING,
  ERROR
}
export interface AppDataState<T> {
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:string
}
export interface ActionEvent {
  type:ProductActionEvent,
  payload?:any

}
export enum ProductActionEvent {
  GET_ALL_PRODUCTS="[Product] Get all products",
  GET_SELECTED_PRODUCTS="[Product] Get Selected products",
  GET_AVAILABLE_PRODUCTS="[Product] Get Available products",
  SEARCH_PRODUCTS="[Product] Search products",
  NEW_PRODUCTS="[Product] New products",
  SELECT_PRODUCT="[Product] Select products",
  DELETE_PRODUCT="[Product] Delete products",
  UPDATE_PRODUCT="[Product] Edit products",

}
