import React from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    onSearch(data.searchTerm);
    };
    
  return (
    <div className="search_container">
      <form className="search_bar" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("searchTerm")} />
        <div type="submit" className="submit"><FaSearch /></div>
      </form>
    </div>
  );
}

export default SearchBar;
