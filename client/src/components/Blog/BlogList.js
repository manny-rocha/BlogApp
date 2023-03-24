import { useSelector } from "react-redux";
import { orderBy } from "lodash";
import { Link } from "react-router-dom";

import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs);

  const sortedBlogs = orderBy(blogs, ["likes"], ["desc"]);

  return (
    <Box w="100%" bg="white" borderRadius="md" boxShadow="md" overflow="hidden">
      <Table variant="simple">
        <Thead bg="gray.100">
          <Tr>
            <Th>Title</Th>
            <Th>Author</Th>
            <Th>Likes</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedBlogs.map((blog) => (
            <Tr key={blog.id}>
              <Td>
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
              </Td>
              <Td>{blog.author}</Td>
              <Td>{blog.likes}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default BlogList;
