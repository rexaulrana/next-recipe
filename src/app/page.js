import Recipes from "@/components/recipes/Recipes";
import ingredients from "../../ingredients.json";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-4xl font-bold text-center mt-3">Recipe app</h1>

      <Recipes></Recipes>
    </main>
  );
}
