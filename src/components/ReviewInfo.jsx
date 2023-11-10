import React, { useState, useEffect } from 'react';
import {
  Typography,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Button,
  Modal,
  CircularProgress,
  Box,
  Zoom,
} from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ReviewInfo = ({ formik }) => {
  const { values } = formik;
  const [consentChecked, setConsentChecked] = useState(false);
  const [isSigning, setIsSigning] = useState(false);
  const [signSuccess, setSignSuccess] = useState(false);
  const [signDuration, setSignDuration] = useState(0);

  const documentFields = [
    { name: 'PAN Card', fieldName: 'panCard' },
    { name: 'Aadhar Card', fieldName: 'aadharCard' },
    { name: 'Other Document', fieldName: 'otherDocument' },
  ];

  const personalDetailsFields = [
    { label: 'Salutation', value: values.salutation },
    { label: 'First Name', value: values.firstName },
    { label: 'Last Name', value: values.lastName },
    { label: 'Gender', value: values.gender },
    { label: 'Nationality', value: values.nationality },
  ];

  const presentAddressFields = [
    { label: 'Period Of Stay', value: values.PeriodOfStay },
    { label: 'From Date', value: values.FromDate },
    { label: 'Owned/Rented', value: values.OwnedRented },
    { label: 'Apartment Name', value: values.ApartmentName },
    { label: 'Street', value: values.Street },
    { label: 'Landmark', value: values.Landmark },
    { label: 'City', value: values.City },
    { label: 'Pincode', value: values.Pincode },
    { label: 'State', value: values.state },
    { label: 'Country', value: values.country },
  ];

  const additionalDetailsFields = [
    { label: 'Phone', value: values.Phone },
    { label: 'Email', value: values.Email },
    { label: 'Date of Birth', value: values.DOB },
    { label: 'PAN', value: values.PAN },
    { label: 'Passport No', value: values.PassportNo },
  ];

  const educationFields = [
    { label: 'Degree1', value: values.Degree1 },
    { label: 'Institution', value: values.Institution },
    { label: 'Discipline', value: values.Discipline },
    { label: 'Percentage', value: values.Percentage },
    { label: 'Year', value: values.Year },
    { label: 'Degree2', value: values.Degree2 },
  ];

  const digiLockerDocuments = [
    { name: '12th Passing Certificate', fieldName: '12thPassingCertificate' },
    { name: 'Degree Certificate', fieldName: 'degreeCertificate' },
  ];

  const handleConsentChange = () => {
    setConsentChecked(!consentChecked);
  };

  const handleESign = () => {
    setIsSigning(true);
    setSignSuccess(false);

    // Random duration between 5 and 10 seconds
    const duration = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
    setSignDuration(duration);
    formik.setFieldValue('esign', true);
    // Simulate e-sign process
    setTimeout(() => {
      setSignSuccess(true);
      setIsSigning(false);
    }, duration);
  };

  useEffect(() => {
    if (signSuccess) {
      // Reset the e-sign success state after showing the success animation
      setTimeout(() => {
        setSignSuccess(false);
      }, 3000);
    }
  }, [signSuccess]);

  return (
    <>
      <Typography variant="overline">Personal Information</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {personalDetailsFields.map((field, index) => (
              <TableRow key={index}>
                <TableCell>{field.label}</TableCell>
                <TableCell>{field.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="overline">Present Address</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {presentAddressFields.map((field, index) => (
              <TableRow key={index}>
                <TableCell>{field.label}</TableCell>
                <TableCell>{field.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="overline">Additional Details</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {additionalDetailsFields.map((field, index) => (
              <TableRow key={index}>
                <TableCell>{field.label}</TableCell>
                <TableCell>{field.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="overline">Educational Qualifications</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {educationFields.map((field, index) => (
              <TableRow key={index}>
                <TableCell>{field.label}</TableCell>
                <TableCell>{field.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="overline">Documents</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {documentFields.map((document) => (
              <TableRow key={document.fieldName}>
                <TableCell>{document.name}</TableCell>
                <TableCell align="right">
                  {values[document.fieldName] && <CloudDownloadIcon />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="overline">DigiLocker Documents</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {digiLockerDocuments.map((document) => (
              <TableRow key={document.fieldName}>
                <TableCell>{document.name}</TableCell>
                <TableCell align="right">
                  {values[document.fieldName] && <CloudDownloadIcon />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="overline">Consent</Typography>
      <Checkbox
        checked={consentChecked}
        onChange={handleConsentChange}
        color="primary"
      />
      <Typography>
        I confirm that the information provided is true and accurate.
      </Typography>
      {consentChecked && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleESign}
          disabled={formik.values?.esign}
        >
          e-Sign
        </Button>
      )}

      {/* Modal for E-Sign in Progress */}
      <Modal open={isSigning} disableBackdropClick>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <Zoom in={isSigning}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
              }}
            >
              <Typography variant="h6" align="center" gutterBottom>
                e-Sign Submission in Progress
              </Typography>
              <CircularProgress size={40} color="primary" />
            </div>
          </Zoom>
        </Box>
      </Modal>

      {/* Modal for E-Sign Success */}
      <Modal open={signSuccess} disableBackdropClick>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <Zoom in={signSuccess}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
              }}
            >
              <Typography variant="h6" align="center" gutterBottom>
                e-Sign Successful
              </Typography>
              <CheckCircleIcon color="success" style={{ fontSize: 80 }} />
            </div>
          </Zoom>
        </Box>
      </Modal>
    </>
  );
};

export default ReviewInfo;
