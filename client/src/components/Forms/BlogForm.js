import { React, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../../reducers/blogReducer";
import { Input } from "../accountBox/common";

import { AddIcon } from "@chakra-ui/icons";

import {
  useDisclosure,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  FormLabel,
  Box,
  Button,
  Stack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const dispatch = useDispatch();

  const handleCreateBlog = async (event) => {
    event.preventDefault();

    const newBlog = {
      title,
      author,
      url,
    };

    setTitle("");
    setAuthor("");
    setUrl("");

    dispatch(createBlog(newBlog));
  };


  return (
    <>
      <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen}>
        Add Blog
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Add a new blog
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <FormLabel htmlFor='title'>Title</FormLabel>
                <Input
                  ref={firstField}
                  value={title}
                  placeholder='Please enter title'
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel htmlFor='desc'>Author</FormLabel>
                <Input
                  id={author}
                  value={author}
                  placeholder='Please enter author'
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel htmlFor='url'>Url</FormLabel>
                <InputGroup>
                  <InputLeftAddon>http://</InputLeftAddon>
                  <Input
                    type='url'
                    id='url'
                    value={url}
                    placeholder='Please enter domain'
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <InputRightAddon>.com</InputRightAddon>
                </InputGroup>
              </Box>

            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='teal' onClick={handleCreateBlog}>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default BlogForm;
