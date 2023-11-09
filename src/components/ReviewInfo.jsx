import React, { useState, useEffect } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Table,
  TableContainer,
  TableHead,
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

  const handleConsentChange = () => {
    setConsentChecked(!consentChecked);
  };

  const handleESign = () => {
    setIsSigning(true);
    setSignSuccess(false);

    // Random duration between 5 and 10 seconds
    const duration = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
    setSignDuration(duration);

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
      <List>
        {/* ... personal information fields ... */}
      </List>
      <Typography variant="overline">Documents</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Document Name</TableCell>
              <TableCell align="right">Download</TableCell>
            </TableRow>
          </TableHead>
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
      <Typography variant="overline">Consent</Typography>
      <List>
        <ListItem>
          <Checkbox
            checked={consentChecked}
            onChange={handleConsentChange}
            color="primary"
          />
          <ListItemText
            primary="I confirm that the information provided is true and accurate."
          />
        </ListItem>
      </List>
      {consentChecked && (
        <Button variant="contained" color="primary" onClick={handleESign}>
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
