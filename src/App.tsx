import { useState } from "react";
import { Button } from "@material-tailwind/react";

//import { AccordionExample } from "./AccordionExample";  // if not export default
import AccordionExample from "./AccordionExample"; // w/ export default
import { DrawerExample } from "./DrawerExample";
import Signup from "./Signup";

function App() {
  const [whichPage, setWhichPage] = useState(0);

  return (
    <div className="h-lvh w-auto grid place-content-center">
      <div className="flex flex-row space-x-4">
        {whichPage === 0 ? (
          <>
            <Button onClick={() => setWhichPage(1)}>Sign Up</Button>
            <Button onClick={() => setWhichPage(2)}>Other Examples</Button>
          </>
        ) : whichPage === 1 ? (
          <div className="flex flex-col">
            <Signup />
            <Button onClick={() => setWhichPage(0)} className="mt-4 bg-red-700">
              Return To Main Page
            </Button>
          </div>
        ) : (
          <div className="flex flex-col w-[500px]">
            <AccordionExample />
            <DrawerExample />
            <Button onClick={() => setWhichPage(0)} className="mt-4 bg-red-700">
              Return To Main Page
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
