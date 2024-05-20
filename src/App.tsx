import { useState } from 'react';
import { Accordion, Button, Drawer } from "@material-tailwind/react";
import { AccordionExample } from './AccordionExample';
import { DrawerExample } from './DrawerExample';
//import AccordionExample from './AccordionExample';
import Signup from './Signup';

function App() {
  const [whichpage, setWhichPage] = useState(0);
  
  return (
    <div className='h-screen w-auto grid place-content-center'>
      <div className='flex flex-row space-x-4'>
        {whichpage === 0 ? (
          <>
            <Button onClick={() => setWhichPage(1)}>Sign Up!</Button>
            <Button onClick={() => setWhichPage(2)}>
              Other Examples
            </Button>
          </>
          ):whichpage === 1 ? (
            <div className='flex flex-col'>
            <Signup />
            <Button onClick={()=>setWhichPage(0)}>Return to Home</Button>
            </div>
        ) : (
          <div className='flex flex-col w-[500px]'>
            <AccordionExample />
            <DrawerExample />
            <Button className="mt-4 bg-red-700" onClick={() => setWhichPage(0)}>
              Return to Main Page
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
