import React from 'react';
import {  Grid } from '@material-ui/core';

import './App.css';
import Menu from './components/Menu';
import tabs from './tabs';

const App = () => {
  const [menuActiveTab, setMenuActiveTab] = React.useState(0);
  
  const currentTab = tabs[menuActiveTab];

  return (
    <Grid container>
      <Menu value={menuActiveTab} tabs={tabs} handleChange={setMenuActiveTab} />
      <Grid container item >
        {currentTab.component}
      </Grid>
    </Grid>
  );
}
 
export default App;
