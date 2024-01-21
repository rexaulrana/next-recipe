import Link from "next/link";

// "use client"
const Recipe = ({ singleRecipe }) => {
  // console.log(singleRecipe);
  const { id, label, ingredients, instructions } = singleRecipe;
  return (
    <div className="card   bg-base-100 hover:bg-gray-300 shadow-xl border-2 border-black">
      <div className="card-body">
        <h2 className="card-title  text-center"> {label}</h2>

        <div className="card-actions justify-center mt-5">
          <Link href={`/details/${id}`} className="btn btn-accent">
            Details
          </Link>
          <Link href={`/edit/${id}`} className="btn btn-warning">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
