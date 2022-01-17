import React, { Fragment } from 'react';
import {
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingListContainer from './shopping-list.container';
import { Field, Form, Formik } from 'formik';

const ShoppingList = () => {
  const { shoppingListData, isLoading, error, deleteItem, addItem } =
    ShoppingListContainer();
  return (
    <Fragment>
      <List>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>An error has occured...</h2>}
        {shoppingListData?.map((item) => (
          <ListItem key={item.id}>
            <ListItemText>{item.name}</ListItemText>
            <IconButton onClick={() => deleteItem(item)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Formik
        initialValues={{ name: '', purchased: false }}
        onSubmit={(values, actions) => {
          addItem(values);
          actions.resetForm();
          console.log('SUBMITTED!');
        }}>
        {() => (
          <Form>
            <Grid container>
              <Grid item xs={10}>
                <Field as={TextField} name='name' fullWidth />
              </Grid>
              <Grid item xs={2}>
                <Button
                  type='submit'
                  fullWidth
                  variant='outlined'
                  sx={{ height: '100%' }}>
                  Add
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default ShoppingList;
