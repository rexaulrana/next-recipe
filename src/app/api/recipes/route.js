import { recipes } from "@/data/recipes";
import { NextResponse } from "next/server";
// get recipe data
export const GET = () => {
  return NextResponse.json(recipes);
};

// export const POST = async (request) => {
//   const addedRecipe = await request.newRecipe();
//   // const addedRecipe = recipes.push(newRecipe);
//   console.log(addedRecipe);
//   // return Response.json({ addedRecipe });
// };
