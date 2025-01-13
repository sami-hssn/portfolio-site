import React from "react";
import PropTypes from "prop-types";
import makeStyles from "@mui/styles/makeStyles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Ford Motor Company": {
      jobTitle: "Test Automation Intern @",
      duration: "JAN 2024 - APR 2024, SEP 2024 - DEC 2024",
      desc: [
        "Developed a Jenkins pipeline written in Groovy to automate Unreal Engine 4 test execution streamlining processes like file generation, building, and packaging, speeding up automation by 40%.",
        "Developed 30+ widget localization tests in Unreal Engine 4, based on TestRail outlines, to validate accurate translations across 15+ languages for Ford vehicle infotainment systems, ensuring UI consistency and enhancing user experience globally."
      ]
    },
    "Health Canada": {
      jobTitle: "Student Programmer / Developer @",
      duration: "MAY 2023 - DEC 2023, APR 2024 - AUG 2024",
      desc: [
        "Automated log archiving processes in the GPHIN web application by implementing CronJobs in Linux, streamlining storage management and eliminating manual clearance, leading to significant efficiency improvements.",
        "Redesigned and enhanced user-generated report formatting with Eclipse BIRT, improving readability and user experience, resulting in more intuitive and accessible reports."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
             
                  <li key={i}>{descItem}</li>
              
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;