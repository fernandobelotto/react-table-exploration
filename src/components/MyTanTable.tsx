import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

type MyModel = {
  name: string;
  age: number;
  country: string;
  isActive: boolean;
};
const columnHelper = createColumnHelper<MyModel>();

const columns = [
  columnHelper.accessor("name", {
    header: "Nome",
    cell: (cell) => cell.getValue()
  }),
  columnHelper.accessor("country", {
    header: "Pais",
    cell: (cell) => cell.getValue()
  }),
  columnHelper.accessor("age", {
    header: "Idade",
    cell: (cell) => cell.getValue()
  }),
  columnHelper.accessor("isActive", {
    header: "Ativo",
    cell: (cell) => cell.getValue() ? 'Sim' : 'Não'
  }),
];

export default function MyTanTable() {
  const data = [
    { name: "Fernando", age: 24, country: "Brasil", isActive: true },
    { name: "Guilherme", age: 25, country: "Brasil", isActive: false },
    { name: "João", age: 26, country: "Brasil", isActive: true },

  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer
      border="1px solid"
      rounded="lg"
      p={2}
    >
      <Table>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
