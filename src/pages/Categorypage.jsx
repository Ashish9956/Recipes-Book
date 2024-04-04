import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";

function Categorypage() {
  const { cuisine } = useParams();
  const [data, setData] = useState(null);
  const [mount, setMount] = useState(true);
  const [error, setError] = useState("");
  
  const fetchCuisine = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cuisine}`
      );
      setData(res.data.results);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
  }, [cuisine]);

  useEffect(() => {
    setMount(true);
    if (mount) fetchCuisine();
    return () => setMount(false);
  }, [fetchCuisine, mount]);

  return (
    <div className="my-16">
    <h3 className="w-11/12 lg:w-2/3 mx-auto">Random Choices for You</h3>
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

export default Categorypage;
