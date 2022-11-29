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

export default function MyTable() {
  return (
    <TableContainer
      border="1px solid"
      rounded="lg"
      p={2}
    >
      <Table>
        <Thead>
          <Tr>
            <Th>nome</Th>
            <Th>idade</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Fernando</Td>
            <Td>24</Td>
          </Tr>
          <Tr>
            <Td>Guilherme</Td>
            <Td>25</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>final</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
