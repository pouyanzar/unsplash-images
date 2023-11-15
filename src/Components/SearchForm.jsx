import React from "react";

const SearchForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.elements.search.value);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={submitHandler}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
