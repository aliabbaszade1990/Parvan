import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React from 'react';
import IranianCitizen from './components/iranian-citizen/iranian-citizen';
import Organization from './components/organization/organization';
import OtherCitizen from './components/other-citizen/other-citizen';
import { useEffect, useState } from 'react';

export interface PersonFormProps {}


export function PersonForm(props: PersonFormProps) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [widthSide ,setWidth] = useState('')

  useEffect(()=>{
   if(window.innerWidth <= 700){
    setWidth('100%')
   }
   else{
    setWidth('80%')
   }
  }, [window.innerWidth])


  return (
    <div style={{width: widthSide, float: 'left',}}>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="شهروند ایرانی" value="1" />
            <Tab label="شهروند غیر ایرانی" value="2" />
            <Tab label="شرکت/ سازمان" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <IranianCitizen />
        </TabPanel>
        <TabPanel value="2">
          <OtherCitizen />
        </TabPanel>
        <TabPanel value="3">
          <Organization />
        </TabPanel>
      </TabContext>
    </Box>
    </div>
  );
}

export default PersonForm;
