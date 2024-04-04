import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [mount, setMount] = useState(true);
  const [error, setError] = useState("");

  const fetchDetails = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setData(res.data);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    setMount(true);
    if (mount) fetchDetails();
    return () => setMount(false);
  }, [fetchDetails, mount]);

  return (
    <div className="w-11/12 lg:w-2/3 mx-auto mt-5 md:mt-16">
      {error && <p className="col-span-3 text-center text-rose-500">{error}</p>}
      {data && (
        <>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-96 h-56 border rounded-xl overflow-hidden">
              <img src={data.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="grow mt-10 md:mt-0 md:ml-10">
              <h3 className="text-2xl font-medium mb-4">{data.title}</h3>
              <h5 className="text-neutral-600 mb-6">
                Ready in: {data.cookingMinutes}mins
              </h5>
              <div className="w-full">
                <h4 className="text-lg font-medium mb-3">Ingredients</h4>
                <ul className="list-disc list-outside ml-4">
                  {data.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id} className="mb-2 last:mb-0">
                      {ingredient.original}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full mt-12">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Instructions</h3>
              <p className="text-base leading-loose" dangerouslySetInnerHTML={{ __html: data.instructions }}></p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Summary</h3>
              <p className="text-base leading-loose" dangerouslySetInnerHTML={{ __html: data.summary }}></p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;
