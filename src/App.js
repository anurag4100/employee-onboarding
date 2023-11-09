import './App.css';
import { Grid } from '@mui/material';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';
const App = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <PersistentDrawerLeft />
      </Grid>
      
    </Grid>
  );
};

export default App;