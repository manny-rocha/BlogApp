import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  TableContainer,
} from "@chakra-ui/react";

const Users = () => {
  const users = useSelector((state) => state.users);

  return (
    <TableContainer>
      <h2>Users</h2>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>
              <strong>Name</strong>
            </Th>
            <Th textAlign="right">
              <strong>Blogs created</strong>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>
                <Link to={`/users/${user.id}`}>{user.username}</Link>
              </Td>
              <Td textAlign="right">{user.blogs.length}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Users;