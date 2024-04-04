import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
function Cards(props) {
    return (
     <Link to={`/details/${props.id}`}>
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={props.img}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
           
          </Typography>
          <Typography>
          {props.title.length < 28
              ? props.title
              : props.title.substring(0, 28) + "..."}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
      </Link>
    );
  }

  export default Cards;