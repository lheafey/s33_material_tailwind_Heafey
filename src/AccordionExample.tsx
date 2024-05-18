import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function AccordionExample() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Option #1
        </AccordionHeader>
        <AccordionBody>Text for Accordion Option #1</AccordionBody>
      </Accordion>

      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Option #2
        </AccordionHeader>
        <AccordionBody>Text for Accordion Option #2</AccordionBody>
      </Accordion>

      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Option #3
        </AccordionHeader>
        <AccordionBody>Text for Accordion Option #3</AccordionBody>
      </Accordion>

      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Option #4
        </AccordionHeader>
        <AccordionBody>Text for Accordion Option #4</AccordionBody>
      </Accordion>
    </>
  );
}

export default AccordionExample;
