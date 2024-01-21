import Recipes from "@/components/recipes/Recipes";
import ingredients from "../../ingredients.json";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-xl font-bold text-center mt-3">All Recipe</h1>

      <Recipes></Recipes>
    </main>
  );
}
