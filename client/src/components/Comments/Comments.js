import { useField } from "../../hooks/index";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../reducers/blogReducer";
import { Button, FormControl, FormLabel, Grid, Text, Textarea, UnorderedList, ListItem } from "@chakra-ui/react";
import { FormContainer } from "../accountBox/common.jsx";


const Comments = ({ blog }) => {
  const { reset: resetComment, ...comment } = useField("text");

  const dispatch = useDispatch();

  const { id, comments } = blog;

  const user = useSelector(state => state.user);

  const handleComment = (event) => {
    event.preventDefault();

    if (!comment.value.trim()) return;

    dispatch(createComment(id, comment.value.trim(), user));
    resetComment();
  };

  return (
    <div>
      <Text as="h3" fontSize="xl" fontWeight="semibold">Comments</Text>
      <FormContainer onSubmit={handleComment}>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <Grid item>
            <FormControl id="comment">
              <FormLabel>Write your thoughts</FormLabel>
              <Textarea {...comment} resize="both" />
            </FormControl>
          </Grid>
          <Grid item alignSelf="flex-end">
            <Button variant="solid" colorScheme="teal" type="submit">
              Add comment
            </Button>
          </Grid>
        </Grid>
      </FormContainer>
      {comments.length > 0 ? (
        <UnorderedList mt={4}>
          {comments.map((comment, i) => (
            <React.Fragment key={i}>
              <ListItem>{comment.content}</ListItem>
              <Text as="h4" fontSize="md" fontWeight="semibold">
                Added by {comment.user.name}
              </Text>
            </React.Fragment>
          ))}
        </UnorderedList>
      ) : (
        <Text mt={4}>No comments yet...</Text>
      )}

    </div>
  );
};

export default Comments;
