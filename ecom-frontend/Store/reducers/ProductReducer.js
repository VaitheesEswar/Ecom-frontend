const initialState = {
  products: null,
  categories: null,
  pagination: {},
  categoryLoader: false,
  categoryError: null,
  categorySuccess : null,
};

export const productReducer = (state = initialState, action) => {

  switch (action.type) {

    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        pagination: {
          ...state.pagination,
          pageNumber: action.pageNumber,
          pageSize: action.pageSize,
          totalElements: action.totalElements,
          totalPage: action.totalPage,
          lastPage: action.lastPage,
        }
      };

   

      case "CATEGORY_FETCHING":
        return {
          ...state,   

            categoryLoader: true,
        };

           case "CATEGORY_LOADER":
      return {
        ...state,
        categories: action.payload,
       
      };

        case "CATEGORY_SUCCESS":
          return {
            ...state,
            categoryLoader: false,
            categorySuccess: "Categories loaded successfully",
            categoryError: null,
          };

        case "CATEGORY_ERROR":
          return {
            ...state,
            categoryLoader: false,
            categoryError: action.payload,
            categorySuccess: null,
          };

    default:
      return state;
  }

};