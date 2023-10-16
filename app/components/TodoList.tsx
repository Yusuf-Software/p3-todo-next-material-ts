"use client";
import React, { useState } from 'react';
import { TextField, Button, List, Typography, Container, Box } from '@mui/material';
import TodoCard from './TodoCard';
import styles from '../page.module.css';

const TodoList: React.FC = () => {
  const [newItem, setNewItem] = useState<todoValue>('');
  const [items, setItems] = useState<{ id: id; value: todoValue; isDone: isDone }[]>([]);

  const addItem = () => {
    if (newItem.trim() === '') {
      alert('Please enter an item');
      return;
    }

    const newItemObject = {
      id: Math.floor(Math.random() * 1000),
      value: newItem.trim(),
      isDone: false,
    };

    setItems((oldItems) => [...oldItems, newItemObject]);
    setNewItem('');
  };

  const deleteItem = (id: id) => {
    setItems((oldItems) => oldItems.filter((item) => item.id !== id));
  };

  const toggleItem = (id: id) => {
    setItems((oldItems) =>
      oldItems.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
    console.log(items);
  };

  return (
    <Container maxWidth="md" className={styles.todoListContainer}>
      <Box className={styles.addTodo}>
        <TextField label="What do you need to do?"
          variant="outlined"
          fullWidth
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={addItem}
        >
          Add
        </Button>
      </Box>
      <div>
        <List className={styles.todoList}>
          {items.length > 0 ? (
            items.map((item) => (
              <TodoCard
                key={item.id}
                item={item}
                deleteItem={deleteItem}
                toggleItem={toggleItem}
              />
            ))
          ) : (
            <Typography variant="body1">Nothing to do.</Typography>
          )}
        </List>
      </div>
    </Container>
  );
};

export default TodoList;