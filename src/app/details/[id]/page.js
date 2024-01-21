import Link from "next/link";
import React from "react";

const RecipeDetails = async ({ params }) => {
  // console.log(params.id);
  // recipe details page
  const res = await fetch("https://recipe-next-delta.vercel.app/api/recipes", {
    cache: "no-store",
  });
  const details = await res.json();
  // get recipe by id
  const detailsInfo = details?.find((detail) => detail?.id == params?.id);
  // console.log(detailsInfo);
  const { ingredients, instructions, label, id } = detailsInfo;
  return (
    <>
      <h1 className="text-center text-2xl  font-semibold mt-5">
        Recipe Details
      </h1>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-xl text-centers font-semibold md:text-center">
            Name: {label}
          </h2>

          <div className="flex flex-col md:flex-row  justify-around  gap-5">
            <div className="">
              <h1 className=" text-lg font-medium">Ingredients</h1>

              <ul>
                {ingredients.map((ingredient, idx) => (
                  <li key={ingredient?.id}>
                    {idx + 1}. {ingredient?.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-medium">Instruction</h2>
              {instructions.map((instruction) => (
                <h1>{instruction}</h1>
              ))}
            </div>
          </div>
          <div className="card-actions justify-center">
            <Link href="/">
              <button className="btn btn-primary">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
