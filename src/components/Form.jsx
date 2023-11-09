import { useState } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormHelperText,
  Button
} from '@mui/material';
import PersonalInfo from './PersonalInfo';
import AccountDetails from './AccountDetails';
import ReviewInfo from './ReviewInfo';

const steps = [' Personal Info', 'Documents', 'e-Sign and Submit'];

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phone: '',
      residence: ''
    },
    
    onSubmit: async (values) => {
      if (activeStep === steps.length - 1) {
        console.log('last step');
        console.log(values);
        try {
        // Get authentication token
      const tokenResponse = await fetch('https://realm.mongodb.com/api/client/v2.0/app/data-jttnm/auth/providers/local-userpass/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'ServiceAccount1',
          password: 'nnEVXPvFsrHeKFob',
        }),
      });
      if (!tokenResponse.ok) {
        console.error('Failed to get authentication token:', tokenResponse);
        return;
      }
      const { access_token } = await tokenResponse.json();
      
      // Submit data to MongoDB with the obtained token
      const response = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/data-jttnm/endpoint/data/v1/action/insertOne', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`, // Pass the obtained token in the Authorization header
        },
        body: JSON.stringify({
          collection: 'EmpOnboardingInfo',
          database: 'EmpOnboarding',
          dataSource: 'EmployeeInfoTest',
          document: values,
        }),
      });

      if (response.ok) {
        console.log('Data successfully submitted to MongoDB:', response);
      } else {
        console.error('Failed to submit data to MongoDB:', response);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
  });

  const formContent = (step) => {
    switch(step) {
      case 0:
        return <AccountDetails formik={formik} />;
      case 1:
        return <PersonalInfo formik={formik} />;
      case 2:
        return <ReviewInfo formik={formik} />;
      default:
        return <div>404: Not Found</div>
    }
  };

  return (
    <Box
      sx={{
        maxWidth: '600px',
        padding: 2
      }}
    >
      <Stepper
        activeStep={activeStep}
        orientation="horizontal"
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ padding: '20px' }}
        >
          {formContent(activeStep)}
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
        <Grid
          item
          xs={12}
        >
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button onClick={formik.handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button onClick={formik.handleSubmit}>
              Next
            </Button>
          ) }
        </Grid>
      </Grid>
    </Box>
  )
}

export default Form;