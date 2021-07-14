import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import { Button,Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

import Switch from '@material-ui/core/Switch';

import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

   
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

    
  

export default function Home() {  


  return (
  <div>
    <Head>
      <title>หน้าแรก</title>
    </Head>
    <main>
      <center>
        <h1><center>index pages</center></h1>
        <br></br>
        <Link href="/">
          <a>Home</a>
        </Link>
         |
        <Link href="/about">
          <a>About</a>
        </Link>
         |
        <Link href="/service">
          <a>Service</a>
        </Link>
         |
        <Link href="/products/P024">
          <a>Products</a>
        </Link>
         |
        <Link href="/components">
          <a>components<br></br></a>
        </Link>
        <br></br>
        
        <Button variant="contained">Default<br></br></Button>
        <br></br>
        <br></br>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three<br></br></Button>
      </ButtonGroup>
      <br></br>
      <br></br>

      <div>

      <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
      <Checkbox
        defaultChecked
        indeterminate
        inputProps={{ 'aria-label': 'indeterminate checkbox' }}
      />
      <Checkbox
        defaultChecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
      <Checkbox
        defaultChecked
        size="small"
        inputProps={{ 'aria-label': 'checkbox with small size' }}
      /><br></br>
    </div>
    <br></br>
    <br></br>

     

    <div>
    <Fab color="primary" aria-label="add">
    <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
      <EditIcon />    
      </Fab>
      <Fab variant="extended">
      <NavigationIcon/> 
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
      <FavoriteIcon />
       <br></br>
      </Fab>
      </div>
      <br></br>
    <br></br>




    <form>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
       
        InputLabelProps={{
          shrink: true,
        }}
      /><br></br>
    </form>
    <br></br>
    <br></br>




    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup><br></br>
    </FormControl>
    <br></br>
    <br></br>




    <div>
    <FormControl>
        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
              
          
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl><br></br>
    </div>
    <br></br>
    <br></br>





    <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
        <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider aria-labelledby="continuous-slider"/>
        </Grid>
        <Grid item>
        <VolumeUp />
        </Grid><br></br>
      </Grid>
      <br></br>
      <br></br>
    


      <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch
        defaultChecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
      <br></br>
      <br></br>


      <form>
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br></br>
      </form>
      <br></br>
      <br></br>





        </center>
       
    </main>
  </div>  
  )
}
