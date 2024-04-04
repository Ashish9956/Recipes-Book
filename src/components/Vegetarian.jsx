import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import Cards from "./Cards";

function Vegetarian() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [mount, setMount] = useState(true);
  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&tags=vegetarian`
      );
      setData(res.data.recipes);
    } catch (error) {
      setError(error.response.data.message);
    }
  }, []);
  useEffect(() => {
    setMount(true);
    if (mount) fetchData();
    return () => setMount(false);
  }, [fetchData, mount]);
  return (
    <div className="my-16">
      <h3 className="text-3xl font-semibold mb-4">Our Vegetarian Picks</h3>
      {error && (
        <div className="w-11/12 lg:w-2/3 mx-auto mt-5 p-3 text-center">
          <p className="text-rose-500">{error}</p>
        </div>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {data &&
          data.map((recipe) => (
            <Cards key={recipe.id} id={recipe.id} title={recipe.title} img={recipe.image} />
          ))}
      </div>
    </div>
  );
}

export default Vegetarian;
