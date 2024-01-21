import { recipes } from "@/data/recipes";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(recipes);
};
