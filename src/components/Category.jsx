import React from "react";
import { Link } from "react-router-dom";
import {
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";

function Category() {
  const data = [
    {
      label: "Indian",
      value: "indian",
    },
    {
      label: "Thai",
      value: "thai",
    },
    {
      label: "Italian",
      value: "italian",
    },
    {
      label: "Korean",
      value: "korean",
    },
    {
      label: "American",
      value: "american",
    },
  ];

  return (
    <Tabs value="indian">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Link to={`/cuisine/${value}`} key={value}>
            <Tab value={value}>
              {label}
            </Tab>
          </Link>
        ))}
      </TabsHeader>
    </Tabs>
  );
}

export default Category;