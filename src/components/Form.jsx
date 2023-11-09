import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormHelperText,
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import PersonalInfo from './PersonalInfo';
import AccountDetails from './AccountDetails';
import ReviewInfo from './ReviewInfo';

const steps = [' Personal Info', 'Documents', 'e-Sign and Submit'];

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [failureDialogOpen, setFailureDialogOpen] = useState(false);

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleCloseDialogs = () => {
    setSuccessDialogOpen(false);
    setFailureDialogOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phone: '',
      residence: '',
    },
    
    onSubmit: async (values) => {
      try {
        setLoading(true);

        if (activeStep === steps.length - 1) {
          console.log('last step');
          console.log(values);

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
            setFailureDialogOpen(true);
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
            setSuccessDialogOpen(true);
          } else {
            console.error('Failed to submit data to MongoDB:', response);
            setFailureDialogOpen(true);
          }
        } else {
          setActiveStep((prevStep) => prevStep + 1);
        }
      } catch (error) {
        console.error('Error during form submission:', error);
        setFailureDialogOpen(true);
      } finally {
        setLoading(false);
      }
    },
  });

  const formContent = (step) => {
    switch (step) {
      case 0:
        return <AccountDetails formik={formik} />;
      case 1:
        return <PersonalInfo formik={formik} />;
      case 2:
        return <ReviewInfo formik={formik} />;
      default:
        return <div>404: Not Found</div>;
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '600px',
        padding: 2,
      }}
    >
      {/* Loading Spinner */}
      {loading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      )}

      <Stepper activeStep={activeStep} orientation="horizontal">
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container>
        <Grid item xs={12} sx={{ padding: '20px' }}>
          {formContent(activeStep)}
        </Grid>
        {formik.errors.submit && (
          <Grid item xs={12}>
            <FormHelperText error>{formik.errors.submit}</FormHelperText>
          </Grid>
        )}
        <Grid item xs={12}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
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
          )}
        </Grid>
      </Grid>

      {/* Success Dialog */}
      <Dialog open={successDialogOpen} onClose={handleCloseDialogs}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <DialogContentText>Data successfully submitted to MongoDB.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogs} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {/* Failure Dialog */}
      <Dialog open={failureDialogOpen} onClose={handleCloseDialogs}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <DialogContentText>Failed to submit data to MongoDB.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogs} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Form;
