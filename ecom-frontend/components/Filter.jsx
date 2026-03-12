import {  useEffect, useState } from "react";
import { FiArrowDown, FiArrowUp, FiRefreshCcw, FiSearch } from "react-icons/fi";
import { FormControl, InputLabel, Select, MenuItem, Tooltip, IconButton, Button } from "@mui/material";
import { useLocation, useNavigate, useSearchParams,  } from "react-router-dom";
const Filter= ({categories}) => {

    // const categories = [
    //     { categoryId: 1, categoryName: 'Electronics' },
    //     { categoryId: 2, categoryName: 'Clothing' },
    //     { categoryId: 3, categoryName: 'Books' },
    //     { categoryId: 4, categoryName: 'Home & Kitchen' },
    //     { categoryId: 5, categoryName: 'Sports & Outdoors' },
    // ];  

  const [searchParams, setSearchParams] = useSearchParams();
   const params= searchParams;
   const pathname = useLocation().pathname;
    const navigate = useNavigate();

const [category,setCategory] = useState("all");

const [sortOrder,setSortOrder] = useState("asc");

const [searchTerm,setSearchTerm] = useState("");

useEffect(()=>{
    const currentCategoryParam = params.get("category") || "all";
    const currentSortParam = params.get("sort") || "asc";
    const CurrentSearchParam = params.get("keyword") || "";

    setCategory(currentCategoryParam);
    setSortOrder(currentSortParam);
    setSearchTerm(CurrentSearchParam);
}, [searchParams]);    

useEffect(()=>{

    const handler = setTimeout(()=> {
        if(searchTerm){
            searchParams.set("keyword", searchTerm);
        } else {
            searchParams.delete("keyword");    
        }
        navigate(`${pathname}`+"?"+`${params.toString()}`);
    },700);

    return () => {
        clearTimeout(handler);
    }       
  
}  ,[searchTerm]);

const handleCategoryChange = (event) => {
     const value = event.target.value;

  setCategory(value);

  const newParams = new URLSearchParams(searchParams);

  if (value === "all") {
    newParams.delete("category");
  } else {
    newParams.set("category", value);
  }

  newParams.set("sort", sortOrder);
  newParams.set("keyword", searchTerm);

  setSearchParams(newParams);

  }

  const handleSortChange = (event) => {
    setSortOrder((prev) =>{ 
        const sortOrder=(prev === "asc" ? "desc" : "asc");
        params.set("sort", sortOrder);
        navigate(`${pathname}`+"?"+`${params.toString()}`);
        return sortOrder;
    }
    
    )
    }
    const handleClearFilters = () => {
      navigate({pathname:window.location.pathname});
            
        

    }   
    

  return (
    <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-6">
    <div className="relative flex items-center 2xl:w-[400px] sm:w-[420px] w-full">

        <FiSearch
          size={20}
          className="absolute left-3 text-gray-500"
        />

        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 text-slate-800 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>
        <div className="flex sm:flex-row flex-col gap-4 items-center justify-center"> 

            <FormControl className="text-slate-800 w-[200px] border border-gray-300 rounded-md" 
            
            variant="outlined"
            size="small"
            >

            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category-select"  
                value={category}
                onChange={handleCategoryChange}
                label="Category"

            >
                <MenuItem value="all">All</MenuItem>
                {categories.map((cat) => (
                    <MenuItem key={cat.categoryId} value={cat.categoryName}>
                        {cat.categoryName}
                    </MenuItem>
                ))}
            </Select>
            </FormControl>
{/* ToolTip and ClearFilter*/}

<Tooltip title="Sort By" placement="top">
    <Button variant="outlined" color="primary" onClick={handleSortChange}    className="flex items-center gap-2 h-10 px-4 rounded-full">
        Sort By
        {sortOrder === "asc" ? <FiArrowUp size={20}/> : <FiArrowDown size={20}/> }
            

    </Button>
 </Tooltip> 
<Tooltip title="Clear Filters" placement="top">
 <button onClick={handleClearFilters} className="flex items-center gap-2 h-8 px-4 rounded-md bg-white-200 text-red-600 hover:bg-red-400 hover:text-white transition-colors duration-300 outline-none ring-2 ring-red-400 focus:ring-offset-2">
  <FiRefreshCcw size={18} />
  <span>  Clear Filters</span>
 </button>
 </Tooltip>

        </div>
    </div>
  )
}   
export default Filter;