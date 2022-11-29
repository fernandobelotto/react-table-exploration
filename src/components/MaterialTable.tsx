import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";

type Food = {
  name: string;
  calories: number;
};

const data = [
  { name: "Frozen yoghurt", calories: 159 },
  { name: "Ice cream sandwich", calories: 23 },
  { name: "Eclair", calories: 26 },
  { name: "Cupcake", calories: 30 },
  { name: "Gingerbread", calories: 35 },
];

const columnHelper = createColumnHelper<Food>();

const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (cell) => cell.getValue(),
  }),
  columnHelper.accessor("calories", {
    header: "Calories",
    cell: (cell) => cell.getValue(),
  }),
];

export default function MaterialTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer component={Paper}>
      <Table
        aria-label="simple table"
      >
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}{" "}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>

          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}
