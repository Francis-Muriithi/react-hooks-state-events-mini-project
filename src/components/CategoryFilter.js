import React from "react";

function CategoryFilter() {
  function CategoryFilter({categories, selectedCategory, onSelectCategory}) {

    const categoryButtons = categories.map((category)=> {
      const className = category === selectedCategory ? "selected" : null; 
  
      return (
        <div>
        <button onClick={()=>onSelectCategory(category)} key={category} className ={className}>
          {category}
        </button>
        <div className="categories">
        <h5>Category filters</h5>
        {/* render <button> elements for each category here */}
        {categoryButtons}
      </div>
      </div>,
      );}
 export default CategoryFilter;
