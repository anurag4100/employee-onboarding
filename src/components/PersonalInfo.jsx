import React from 'react';
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

const documentFields = [
  { name: 'PAN Card', fieldName: 'panCard' },
  { name: 'Aadhar Card', fieldName: 'aadharCard' },
  { name: 'Other Document', fieldName: 'otherDocument' },
];

const PersonalInfo = (props) => {
  const { formik } = props;

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

  return (
    <Grid container spacing={2}>
      
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
