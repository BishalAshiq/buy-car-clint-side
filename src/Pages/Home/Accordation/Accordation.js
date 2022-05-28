import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./Accordation.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div
      className="Accordation"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <h2 style={{ fontSize: 30 }}>WHAT IS ON YOUR MIND</h2>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What is the Mileage On the Odometer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Asking about the mileage on the car can give you a great inclination
            of the overall wear-and-tear and depreciation and value of the
            vehicle. Say you’re looking at a five-year-old crossover with
            124,000 miles on its odometer. If your alarm bells aren’t ringing,
            they should be. That’s because the value of any used vehicle is
            based on how many miles are left on the car.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Does the Car Have a Maintenance Record?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A key question to ask when buying a used car is about the car’s
            maintenance records. Did the previous owner or owners get regular
            tune-ups and oil changes? If there was ever an accident, were the
            repairs recorded? You can also ask the seller for a copy of the
            CarFax report or look for it online.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Is the Vehicle Under Any Warranty?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you’re buying a car from a private seller, they may not have this
            information, however, a dealership should have access to warranty
            information. Knowing whether or not the car is covered under
            warranty is useful information and could limit additional coverage
            costs for you.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
