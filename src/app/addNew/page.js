"use client";
import React from "react";

const handleAddNew = (e) => {
  e.preventDefault();
  const form = e.target;
  const title = form.title.value;
  const ingredients = form.ingredients.value;
  const instruction = form.instruction.value;
  //   console.log(title);
  const newRecipe = { title, ingredients, instruction };
  //   console.log(newRecipe);
  const POST = async () => {
    const res = await fetch(
      "https://recipe-next-delta.vercel.app/api/recipes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newRecipe }),
      }
    );
    const data = await res.json();
    console.log(data);
  };
};
const AddNew = () => {
  return (
    <div className="mb-3">
      <h1 className="text-center text-xl font-medium mt-5 mb-3">
        Add New Recipe
      </h1>

      <form onSubmit={handleAddNew}>
        <div className="">
          <div className="form-control w-full px-2">
            <div className="label">
              <span className="label-text">Recipe Title</span>
            </div>
            <input
              name="title"
              required
              type="text"
              placeholder="Type here"
              className="input input-bordered  md:w-1/2"
            />
          </div>
          <div className="form-control w-full px-2">
            <div className="label">
              <span className="label-text">Recipe Ingredients</span>
            </div>
            <textarea
              required
              name="ingredients"
              type="text"
              placeholder="Type here"
              className="input input-bordered  md:w-1/2"
            />
          </div>
          <div className="form-control w-full px-2">
            <div className="label">
              <span className="label-text">Recipe Instruction</span>
            </div>
            <textarea
              required
              name="instruction"
              type="text"
              placeholder="Type here"
              className="input input-bordered  md:w-1/2"
            />
          </div>
        </div>
        <button className="btn btn-success w-full md:w-1/2 mt-2">Add</button>
      </form>
    </div>
  );
};

export default AddNew;
