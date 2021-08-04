import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FormLabel } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { alpha } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
          },
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
  }));

  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  function valuetext(value) {
    return `${value}°C`;
  }

export default function Home() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        setValue(event.target.value);
        setAge(event.target.value);
      };

    const [value, setValue] = React.useState('female');

    const [age, setAge] = React.useState('');


    return (
        <div>
            <Head>
                <meta charset="UTF-8"></meta>
                <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <title>Components</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <main>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <a href="../">Home</a>
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    </Toolbar>
                </AppBar>
                <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <div className={classes.root}>
                    <Grid container spacing={3} component="div" style={{ backgroundColor: '#cfe8fc', height: '130vh', width: '100%', marginTop: '25px', marginBottom: '25px'}}>

                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <Paper className={classes.paper} style={{ height: "100%"}}>
                                <center>
                                <Typography>Component 1 : Button</Typography>
                                <Button variant="contained" style={{marginTop: "10px"}}>Default</Button><br/>
                                <Button variant="contained" color="primary" style={{marginTop: "10px"}}>
                                    Primary
                                </Button><br/>
                                <Button variant="contained" color="secondary" style={{marginTop: "10px"}}>
                                    Secondary
                                </Button><br/>
                                <Button variant="contained" disabled style={{marginTop: "10px"}}>
                                    Disabled
                                </Button><br/>
                                <Button variant="contained" color="primary" href="#contained-buttons" style={{marginTop: "10px"}}>
                                    Link
                                </Button><br/>
                                </center>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <Paper className={classes.paper} style={{ height: "100%"}}>
                                <center>
                                <Typography>Component 2 : CheckBox </Typography>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                        label="Secondary"
                                    />
                                    <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={state.checkedB}
                                            onChange={handleChange}
                                            name="checkedB"
                                            color="primary"
                                        />
                                        }
                                        label="Primary"
                                    />
                                    <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
                                    <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
                                    <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
                                    <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={state.checkedF}
                                            onChange={handleChange}
                                            name="checkedF"
                                            indeterminate
                                        />
                                        }
                                        label="Indeterminate"
                                    />
                                    <FormControlLabel
                                        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                                        label="Custom color"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                                        label="Custom icon"
                                    />
                                    <FormControlLabel
                                        control={
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            name="checkedI"
                                        />
                                        }
                                        label="Custom size"
                                    />
                                    </FormGroup>
                                    </center>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <Paper className={classes.paper} style={{ height: "100%"}}>                            
                                <Typography>Component 3 : Floating Action Button</Typography>
                                <Fab color="primary" aria-label="add" style={{marginTop: "10px"}}>
                                    <AddIcon />
                                </Fab><br/>
                                <Fab color="secondary" aria-label="edit" style={{marginTop: "10px"}}>
                                    <EditIcon />
                                </Fab><br/>
                                <Fab variant="extended" style={{marginTop: "10px"}}>
                                    <NavigationIcon className={classes.extendedIcon} />
                                    Navigate
                                </Fab><br/>
                                <Fab disabled aria-label="like" style={{marginTop: "10px"}}>
                                    <FavoriteIcon />
                                </Fab>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <Paper className={classes.paper} style={{ height: "100%"}}>          
                                <center>
                                <Typography>Component 4 : Radio</Typography>
                                <br/>
                                <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                                </RadioGroup>
                                </FormControl>
                                </center>                  
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <Paper className={classes.paper} style={{ height: "100%"}}>
                                <Typography>Component 5 : Select</Typography>
                                <div>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
                                        <Select native defaultValue="" id="grouped-native-select">
                                        <option aria-label="None" value="" />
                                        <optgroup label="Category 1">
                                            <option value={1}>Option 1</option>
                                            <option value={2}>Option 2</option>
                                        </optgroup>
                                        <optgroup label="Category 2">
                                            <option value={3}>Option 3</option>
                                            <option value={4}>Option 4</option>
                                        </optgroup>
                                        </Select>
                                    </FormControl>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
                                        <Select defaultValue="" id="grouped-select">
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <ListSubheader>Category 1</ListSubheader>
                                        <MenuItem value={1}>Option 1</MenuItem>
                                        <MenuItem value={2}>Option 2</MenuItem>
                                        <ListSubheader>Category 2</ListSubheader>
                                        <MenuItem value={3}>Option 3</MenuItem>
                                        <MenuItem value={4}>Option 4</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <Paper className={classes.paper} style={{ height: "100%"}}>                            
                                <Typography>Component 6 : Slider</Typography><br/>

                                <Typography id="discrete-slider" gutterBottom>
                                    Temperature
                                </Typography>
                                <Slider
                                    defaultValue={30}
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider"
                                    valueLabelDisplay="auto"
                                    step={10}
                                    marks
                                    min={10}
                                    max={110}></Slider>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <Paper className={classes.paper} style={{ height: "100%"}}>                            
                                <Typography>Component 7 : Switch</Typography>
                                <Switch
                                    checked={state.checkedA}
                                    onChange={handleChange}
                                    name="checkedA"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                <Switch
                                    checked={state.checkedB}
                                    onChange={handleChange}
                                    color="primary"
                                    name="checkedB"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                                <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
                                <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
                                <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
                                <Switch
                                    defaultChecked
                                    color="default"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                />
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <Paper className={classes.paper} style={{ height: "100%"}}>                            
                                <Typography>Component 8 : TextField</Typography>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField id="standard-basic" label="Standard" />
                                    <TextField id="filled-basic" label="Filled" variant="filled" />
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                                </form>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Paper className={classes.paper} style={{ height: "100%"}}>
                                <Typography>Component 9 : Date Picker</Typography>
                                <form className={classes.container} noValidate>
                                    <TextField
                                        id="date"
                                        label="Birthday"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                </form>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Paper className={classes.paper} style={{ height: "100%"}}>                            
                                <Typography>Component 10 : Alert</Typography><br/>
                                <Alert severity="error">This is an error alert — check it outddddd!</Alert>
                                <br/>
                                <Alert severity="warning">This is a warning alert — check it out!</Alert>
                                <br/>
                                <Alert severity="info">This is an info alert — check it out!</Alert>
                                <br/>
                                <Alert severity="success">This is a success alert — check it out!</Alert>
                            </Paper>
                        </Grid>

                        

                    </Grid>

                    
                    </div>
                </Container>
                </React.Fragment>
            </main> 
        </div>

    )

}