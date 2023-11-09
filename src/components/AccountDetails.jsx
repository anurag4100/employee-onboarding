import {
  Grid,
  TextField,
  FormHelperText
} from "@mui/material";

const AccountDetails = (props) => {
  const { formik } = props;
  return (
    <Grid container spacing={2}> 
      <Grid
        item
        xs={5}
      >
        <TextField
          name="Salutation"
          label="Salutation"
          variant="outlined"
          size='small'
          type="Salutation"
          fullWidth
          error={Boolean(formik.touched.Salutation && formik.errors.Salutation)}
          onChange={formik.handleChange}
          value={formik.values.Salutation}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="FirstName"
          label="First Name"
          variant="outlined"
          type="FirstName"
          fullWidth
          size="small"
          error={Boolean(formik.touched.FirstName && formik.errors.FirstName)}
          onChange={formik.handleChange}
          value={formik.values.FirstName}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="MiddleName"
          label="Middle Name"
          variant="outlined"
          type="MiddleName"
          fullWidth
          size="small"
          error={Boolean(formik.touched.MiddleName && formik.errors.MiddleName)}
          onChange={formik.handleChange}
          value={formik.values.MiddleName}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="LastName"
          label="Last Name"
          variant="outlined"
          size='small'
          type="LastName"
          fullWidth
          error={Boolean(formik.touched.LastName && formik.errors.LastName)}
          onChange={formik.handleChange}
          value={formik.values.LastName}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="Gender"
          label="Gender"
          variant="outlined"
          size='small'
          type="Gender"
          fullWidth
          error={Boolean(formik.touched.Gender && formik.errors.Gender)}
          onChange={formik.handleChange}
          value={formik.values.Gender}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="Nationality"
          label="Nationality"
          variant="outlined"
          type="Nationality"
          fullWidth
          size="small"
          error={Boolean(formik.touched.Nationality && formik.errors.Nationality)}
          onChange={formik.handleChange}
          value={formik.values.Nationality}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="PeriodOfStay"
          label="Period Of Stay"
          variant="outlined"
          type="PeriodOfStay"
          fullWidth
          size="small"
          error={Boolean(formik.touched.PeriodOfStay && formik.errors.PeriodOfStay)}
          onChange={formik.handleChange}
          value={formik.values.PeriodOfStay}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="FromDate"
          label="FromDate"
          variant="outlined"
          type="FromDate"
          fullWidth
          size="small"
          error={Boolean(formik.touched.FromDate && formik.errors.FromDate)}
          onChange={formik.handleChange}
          value={formik.values.FromDate}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="OwnedRented"
          label="OwnedRented"
          variant="outlined"
          type="OwnedRented"
          fullWidth
          size="small"
          error={Boolean(formik.touched.OwnedRented && formik.errors.OwnedRented)}
          onChange={formik.handleChange}
          value={formik.values.OwnedRented}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="ApartmentName"
          label="ApartmentName"
          variant="outlined"
          type="ApartmentName"
          fullWidth
          size="small"
          error={Boolean(formik.touched.ApartmentName && formik.errors.ApartmentName)}
          onChange={formik.handleChange}
          value={formik.values.ApartmentName}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="Street"
          label="Street"
          variant="outlined"
          type="Street"
          fullWidth
          size="small"
          error={Boolean(formik.touched.Street && formik.errors.Street)}
          onChange={formik.handleChange}
          value={formik.values.Street}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="Pin"
          label="Pin"
          variant="outlined"
          type="Pin"
          fullWidth
          size="small"
          error={Boolean(formik.touched.Pin && formik.errors.Pin)}
          onChange={formik.handleChange}
          value={formik.values.Pin}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="Landmark"
          label="Landmark"
          variant="outlined"
          type="Landmark"
          fullWidth
          size="small"
          error={Boolean(formik.touched.Landmark && formik.errors.Landmark)}
          onChange={formik.handleChange}
          value={formik.values.Landmark}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="City"
          label="City"
          variant="outlined"
          type="City"
          fullWidth
          size="small"
          error={Boolean(formik.touched.City && formik.errors.City)}
          onChange={formik.handleChange}
          value={formik.values.City}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="State"
          label="State"
          variant="outlined"
          type="State"
          fullWidth
          size="small"
          error={Boolean(formik.touched.State && formik.errors.State)}
          onChange={formik.handleChange}
          value={formik.values.State}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="Country"
          label="Country"
          variant="outlined"
          type="Country"
          fullWidth
          size="small"
          error={Boolean(formik.touched.Country && formik.errors.Country)}
          onChange={formik.handleChange}
          value={formik.values.Country}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="Phone"
          label="Phone"
          variant="outlined"
          type="Phone"
          fullWidth
          size="small"
          error={Boolean(formik.touched.Phone && formik.errors.Phone)}
          onChange={formik.handleChange}
          value={formik.values.Phone}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="Email"
          label="Email"
          variant="outlined"
          type="Email"
          fullWidth
          size="small"
          error={Boolean(formik.touched.Email && formik.errors.Email)}
          onChange={formik.handleChange}
          value={formik.values.Email}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="DOB"
          label="Date of Birth"
          variant="outlined"
          type="DOB"
          fullWidth
          size="small"
          error={Boolean(formik.touched.DOB && formik.errors.DOB)}
          onChange={formik.handleChange}
          value={formik.values.DOB}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="PAN"
          label="PAN"
          variant="outlined"
          type="PAN"
          fullWidth
          size="small"
          error={Boolean(formik.touched.PAN && formik.errors.PAN)}
          onChange={formik.handleChange}
          value={formik.values.PAN}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="Degree"
          label="Degree"
          variant="outlined"
          size="small"
          type="Degree"
          fullWidth
          error={Boolean(formik.touched.Degree && formik.errors.Degree)}
          onChange={formik.handleChange}
          value={formik.values.Degree}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="Institution"
          label="Institution"
          variant="outlined"
          size="small"
          type="Institution"
          fullWidth
          error={Boolean(formik.touched.Institution && formik.errors.Institution)}
          onChange={formik.handleChange}
          value={formik.values.Institution}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="Discipline"
          label="Discipline"
          variant="outlined"
          size="small"
          type="Discipline"
          fullWidth
          error={Boolean(formik.touched.Discipline && formik.errors.Discipline)}
          onChange={formik.handleChange}
          value={formik.values.Discipline}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="Percentage"
          label="Percentage"
          variant="outlined"
          size="small"
          type="Percentage"
          fullWidth
          error={Boolean(formik.touched.Percentage && formik.errors.Percentage)}
          onChange={formik.handleChange}
          value={formik.values.Percentage}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="Year"
          label="Year"
          variant="outlined"
          size="small"
          type="Year"
          fullWidth
          error={Boolean(formik.touched.Year && formik.errors.Year)}
          onChange={formik.handleChange}
          value={formik.values.Year}
        />
      </Grid>
      
      {formik.errors.submit && (
        <Grid
          item
          xs={12}
        >
          <FormHelperText error>
            {formik.errors.submit}
          </FormHelperText>
        </Grid>
      )}
    </Grid>
  )
}

export default AccountDetails