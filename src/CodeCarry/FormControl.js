// import React from 'react';
// import { Grid, TextField, Button, Card, CardContent, makeStyles } from '@material-ui/core';
// import axios from 'axios';
// import FormTable from './FormTable';


// const useStyle = makeStyles(theme => ({
//   form: {
//     marginBottom: '1rem'
//   },
//   container:{
//     height: '90vh',
//     display: 'flex',
//     alignItems: 'center'
//   }
// }))
// function FormControl() {
//   const classes = useStyle();
    // const [user, setUser] = React.useState({
    //     description: ''
    // })
    
    // let name, value;

    // const handleInputs = (e) => {
    //     name = e.target.name;
    //     value = e.target.value;
    //     setUser({...user, [name]:value});
    // }

    // function handleClick(event){
    //   event.preventDefault();
    //   const newForm = {
    //     description: user.description
    //   }
    //   axios.post('http://localhost:3001/create', newForm)
    // }
//     return (
//         <React.Fragment>
//              <div className={classes.container}> 
//               <Grid container justify='center' align='center'>
//                 <Grid item sm={5} xs={12}>
//                   <form>
//                     <Card elevation={1}>
//                       <CardContent>
//                         <TextField label=" Description" multiline rows={14} placeholder=" description here" variant="outlined" fullWidth required name='description' value={user.description} onChange={handleInputs}  className={classes.form}/>
//                         <Button type="submit" variant="contained" name='description' color="secondary" fullWidth onClick={handleClick}>Submit</Button>
//                       </CardContent>
//                     </Card>
//                   </form>
//                 </Grid>
//                 <Grid item sm={5} xs={12}>
//                 <FormTable/>
//                 </Grid> 
//               </Grid>
//         </div>
//         </React.Fragment>
//     )
// }

// export default FormControl;
