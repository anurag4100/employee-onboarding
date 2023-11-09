import React from 'react';
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
} from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const ReviewInfo = ({ formik }) => {
  const { values } = formik;

  const documentFields = [
    { name: 'PAN Card', fieldName: 'panCard' },
    { name: 'Aadhar Card', fieldName: 'aadharCard' },
    { name: 'Other Document', fieldName: 'otherDocument' },
  ];

  return (
    <>
      <Typography variant="overline">Personal Information</Typography>
      <List>
        <ListItem>
          <ListItemText primary="First Name" secondary={values.firstName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Last Name" secondary={values.lastName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Phone Number" secondary={values.phone} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Residence" secondary={values.residence} />
        </ListItem>
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
    </>
  );
};

export default ReviewInfo;
