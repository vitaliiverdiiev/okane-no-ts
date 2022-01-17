import React from 'react';
import { shoppingListAPI } from 'store/services/shopping-list.service';

const ShoppingListContainer = () => {
  const {
    useFetchShoppingListQuery,
    useDeleteShoppingListItemMutation,
    useCreateShoppingListItemMutation,
  } = shoppingListAPI;

  const {
    data: shoppingListData,
    isLoading,
    error,
  } = useFetchShoppingListQuery();
  const [deleteItem] = useDeleteShoppingListItemMutation();
  const [addItem] = useCreateShoppingListItemMutation();

  return {
    shoppingListData,
    isLoading,
    error,
    deleteItem,
    addItem,
  };
};

export default ShoppingListContainer;
