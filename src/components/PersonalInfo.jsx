import React, { useState } from 'react';
import {
  TextField,
  Grid,
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const documentFields = [
  { name: 'PAN Card', fieldName: 'panCard' },
  { name: 'Aadhar Card', fieldName: 'aadharCard' },
  { name: 'Other Document', fieldName: 'otherDocument' },
  { name: '12th Passing Certificate', fieldName: '12thPassingCertificate' },
  { name: 'Degree Certificate', fieldName: 'degreeCertificate' },
];

const PersonalInfo = (props) => {
  const { formik } = props;
  const [isFetching, setIsFetching] = useState(false);

  const handleFileChange = (fieldName, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue(fieldName, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFetchFromDigiLocker = () => {
    setIsFetching(true);

    // Simulate fetching process with a random duration between 3 and 5 seconds
    const duration = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
    setTimeout(() => {
      setIsFetching(false);

      // Add specified documents to the list
      formik.setFieldValue('12thPassingCertificate', '12th Passing Certificate Content');
      formik.setFieldValue('degreeCertificate', 'Degree Certificate Content');
    }, duration);
  };

  return (
    <Grid container spacing={2}>
      {/* Button to Fetch Documents from DigiLocker with DigiLocker logo */}
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CloudDownloadIcon />}
          onClick={handleFetchFromDigiLocker}
          disabled={isFetching}
        >
          {isFetching ? 'Fetching...' : 'Fetch Documents from DigiLocker'}
        </Button>
      </Grid>

      {/* File Upload Fields in Tabular View */}
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Document</TableCell>
                <TableCell>Upload</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {documentFields.map((document) => (
                <TableRow key={document.fieldName}>
                  <TableCell>{document.name}</TableCell>
                  <TableCell>
                    {isFetching ? (
                      'Fetching...'
                    ) : (
                      <>
                        {formik.values[document.fieldName] ? (
                          <CheckCircleIcon style={{ color: 'green' }} />
                        ) : (
                          <>
                            <Input
                              type="file"
                              accept="image/*,application/pdf"
                              onChange={(e) => handleFileChange(document.fieldName, e)}
                            />
                            {formik.values[document.fieldName] && (
                              <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => {
                                  // Handle e-sign for the document
                                  console.log(`E-Sign for ${document.name}`);
                                }}
                              >
                                E-Sign
                              </Button>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
