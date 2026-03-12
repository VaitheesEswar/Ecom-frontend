import api from "../../src/api/api";
export  const fetchProducts =(queryString) => async (dispatch)=>{

       dispatch({type:"DATA_FETCHING"});
    try
    {
        const {data} =await api.get(`/public/products?${queryString}`);

        console.log("API DATA:", data);
     

        dispatch({type:"FETCH_PRODUCTS",
            payload:data.content,
            pageNumber:data.pageNumber,
            pageSize:data.pageSize,
            totalElements:data.totalElements,
            totalPage:data.totalPage,
            lastPage:data.lastPage,

        })
                dispatch({type:"DATA_FETCHING_SUCCESS"});

    }catch(error)
    {
 const errorMsg =
    error?.response?.data?.message ||
    error?.response?.data?.error ||
    error?.response?.statusText ||
    error.message ||
    "Products fetch failed";

  dispatch({
    type: "ERROR",
    payload: errorMsg
  });
    }
    

}


export  const fetchCategories =() => async (dispatch)=>{

       dispatch({type:"DATA_FETCHING"});
    try
    {
        const {data} =await api.get(`/public/categories`);

        console.log("API DATA:", data);
     

        dispatch({type:"CATEGORY_LOADER",
            payload:data.content,
            pageNumber:data.pageNumber,
            pageSize:data.pageSize,
            totalElements:data.totalElements,
            totalPage:data.totalPage,
            lastPage:data.lastPage,

        })
                dispatch({type:"CATEGORY_SUCCESS"});

    }catch(error)
    {
 const errorMsg =
    error?.response?.data?.message ||
    error?.response?.data?.error ||
    error?.response?.statusText ||
    error.message ||
    "Categories fetch failed";

  dispatch({
    type: "ERROR",
    payload: errorMsg
  });
    }
    

}