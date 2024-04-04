import React from "react";
import Popular from "../components/Popular";
import Vegetarian from "../components/Vegetarian";


function Homepage() {
  return (
    <div className="container mx-auto px-4 mt-8">
      <h2 className="text-3xl font-semibold mb-4">Welcome to My Recipe App</h2>
      <p className="text-lg">
        Explore a variety of delicious recipes and find your next culinary inspiration.
        <Vegetarian/>
        <Popular/>
      </p>
    </div>
  );
}

export default Homepage;
