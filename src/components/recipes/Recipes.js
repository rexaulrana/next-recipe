import Recipe from "./Recipe";

const Recipes = async () => {
  const res = await fetch("https://recipe-next-delta.vercel.app/api/recipes", {
    cache: "no-store",
  });
  const result = await res.json();
  // console.log(result);
  return (
    <div className="">
      <div className=" mb-4 px-2 mt-1 grid grid-cols-1 md:grid-cols-3  gap-5">
        {result?.map((recipe) => (
          <Recipe singleRecipe={recipe} key={result.id}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
