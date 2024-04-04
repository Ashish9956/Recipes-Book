import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
  } from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavigationBar() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate("/searched/" + inputValue);
      setTimeout(() => {
        setInputValue("");
      }, 2000);
    };
    return (
      <Navbar
        variant="gradient"
        color="blue-gray"
        className="mx-auto  from-blue-gray-900 to-blue-gray-800 px-4 py-3"
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
         <Link to="/">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
            Recipe Book
          </Typography> </Link>
         
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              label="Type here..."
              className="pr-20"
              value={inputValue}
              onChange={(e)=>setInputValue(e.target.value)}
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded"
              onClick={handleSubmit}
            >
              Search
            </Button>
          </div>
        </div>
      </Navbar>
    );
  }
export default NavigationBar;
