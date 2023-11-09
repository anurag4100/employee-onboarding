import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function AccountDetails() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="salutation"
            name="salutation"
            label="Salutation"
            // fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="gender"
            name="gender"
            label="Gender"
            fullWidth
            autoComplete="gender"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            required
            id="nationality"
            name="nationality"
            label="Nationality"
            fullWidth
            autoComplete="nationality"
            variant="standard"
          />
        </Grid>
      </Grid>
      <h1></h1>

      <Typography variant="h5" gutterBottom>
        Present Address
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="PeriodOfStay"
            name="PeriodOfStay"
            label="Period Of Stay"
            fullWidth
            autoComplete="PeriodOfStay"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            required
            id="FromDate"
            name="FromDate"
            label="From Date"
            fullWidth
            autoComplete="FromDate"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            required
            id="OwnedRented"
            name="OwnedRented"
            label="OwnedRented"
            fullWidth
            autoComplete="OwnedRented"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            id="ApartmentName"
            name="ApartmentName"
            label="Apartment Name"
            fullWidth
            autoComplete="ApartmentName"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={5}>
          <TextField
            required
            id="Street"
            name="Street"
            label="Street"
            fullWidth
            autoComplete="Street"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="Landmark"
            name="Landmark"
            label="Landmark"
            fullWidth
            autoComplete="Landmark"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={5}>
          <TextField
            required
            id="City"
            name="City"
            label="City"
            fullWidth
            autoComplete="City"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            id="Pincode"
            name="Pincode"
            label="Pincode"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="state"
            name="state"
            label="State"
            fullWidth
            autoComplete="state"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
      </Grid>

      <h1></h1>

      <Typography variant="h5" gutterBottom>
        Additional Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={5}>
          <TextField
            required
            id="Phone"
            name="Phone"
            label="Phone"
            fullWidth
            autoComplete="Phone"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="Email"
            name="Email"
            label="Email"
            fullWidth
            autoComplete="Email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={5}>
          <TextField
            required
            id="DOB"
            name="DOB"
            label="Date of Birth"
            fullWidth
            autoComplete="DOB"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            id="PAN"
            name="PAN"
            label="PAN"
            fullWidth
            autoComplete="PAN"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={5}>
          <TextField
            required
            id="PassportNo"
            name="PassportNo"
            label="Passport No"
            fullWidth
            autoComplete="PassportNo"
            variant="standard"
          />
        </Grid>
      </Grid>
      
      <h1></h1>

      <Typography variant="h5" gutterBottom>
        Educational Qualifications
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={11}>
          <TextField
            required
            id="Degree1"
            name="Degree1"
            label="Degree1"
            fullWidth
            autoComplete="Degree1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="Institution"
            name="Institution"
            label="Institution"
            fullWidth
            autoComplete="Institution"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={5}>
          <TextField
            required
            id="Discipline"
            name="Discipline"
            label="Discipline"
            fullWidth
            autoComplete="Discipline"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="Percentage"
            name="Percentage"
            label="Percentage"
            fullWidth
            autoComplete="Percentage"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={5}>
          <TextField
            required
            id="Year"
            name="Year"
            label="Year"
            fullWidth
            autoComplete="Year"
            variant="standard"
          />
        </Grid>

        <Grid item xs={11}>
          <TextField
            
            id="Degree2"
            name="Degree2"
            label="Degree2"
            fullWidth
            autoComplete="Degree2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            
            id="Institution"
            name="Institution"
            label="Institution"
            fullWidth
            autoComplete="Institution"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={5}>
          <TextField
            
            id="Discipline"
            name="Discipline"
            label="Discipline"
            fullWidth
            autoComplete="Discipline"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            id="Percentage"
            name="Percentage"
            label="Percentage"
            fullWidth
            autoComplete="Percentage"
            variant="standard"
          />
        </Grid>
        <Grid item xs={6} sm={5}>
          <TextField
            
            id="Year"
            name="Year"
            label="Year"
            fullWidth
            autoComplete="Year"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
    
  );
}
