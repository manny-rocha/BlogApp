import React from 'react';
import { useField } from '../../hooks/index';
import { useDispatch } from 'react-redux';
import { createComment } from '../../reducers/blogReducer';
import {
  Button, FormControl, FormLabel, Grid, Heading, Textarea, List, ListItem, ListIcon, UnorderedList
} from '@chakra-ui/react';

const Comments = ({ blog }) => {
  const { reset: resetComment, ...comment } = useField('text');

  const dispatch = useDispatch();

  const { id, comments } = blog;

  const handleComment = (event) => {
    event.preventDefault();

    if (!comment.value.trim()) return;

    dispatch(createComment(id, comment.value.trim()));
    resetComment();
  };

  return (
    <>
      <FormControl pl={2} pr={2} onSubmit={handleComment}>
        <FormLabel>Comments</FormLabel>
        <Grid container>
          <Grid item>
            <Textarea placeholder="Write your thoughts" size="md" {...comment} />
          </Grid>
          <Grid item alignItems="stretch" style={{ display: 'flex' }}>
            <Button variant="contained" color="primary" type="submit">
              Add comment
            </Button>
          </Grid>
        </Grid>
      </FormControl>
      {comments.length > 0 ? (
        <UnorderedList>
          {comments.map((comment, i) => (
            <ListItem key={i}>{comment}</ListItem>
          ))}
        </UnorderedList>
      ) : (
        <p>No comments yet...</p>
      )}
    </>
  );
};

export default Comments;
