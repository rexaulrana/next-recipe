import { recipes } from "@/data/recipes";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(recipes);
};

export const POST = async (Request) => {
  const newRecipe = await Request.json();
  // const addedRecipe = recipes.push(newRecipe);
  console.log(newRecipe);
  // return Response.json({ addedRecipe });
};
