import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Phone } from '@mui/icons-material';

type Row = {
  [key: string]: string | boolean;
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const data: Row[] = [
  {
    nationalCode: '1234567890',
    name: 'علی',
    family: 'عباس زاده',
    male: true,
    phoneNumber: '123-456-7890',
  },
  {
    nationalCode: '0987654321',
    name: 'مژگان',
    family: 'طاهری',
    male: false,
    phoneNumber: '098-765-4321',
  },
];

const columns = [
  {
    field: 'nationalCode',
    headerName: 'کد ملی',
  },
  {
    field: 'name',
    headerName: 'تام',
  },
  {
    field: 'family',
    headerName: 'تام خانوادگی',
  },
  {
    field: 'male',
    headerName: 'جنسیت',
  },
  {
    field: 'phoneNumber',
    headerName: 'شماره تلفن',
  },
];

export interface PersonListProps {}

export function PersonList(props: PersonListProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell key={column.field}>
                {column.headerName}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, inex) => (
            <StyledTableRow key={inex}>
              {columns.map((column) => (
                <StyledTableCell key={column.field}>
                  {column.field === 'male' ? (
                    row.male ? (
                      <span>&#x2714;</span>
                    ) : (
                      <span>&#x2718;</span>
                    )
                  ) : column.field === 'phoneNumber' ? (
                    <a href={`tel:${row.phoneNumber}`}>
                      <Phone />
                      {row.phoneNumber}
                    </a>
                  ) : (
                    row[column.field]
                  )}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
