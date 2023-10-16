import React from 'react';
import { ListItemButton, Box, Checkbox, Typography, IconButton } from '@mui/material';
import styles from '../page.module.css';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoCardProps {
  item: { id: id; value: todoValue; isDone: isDone };
  deleteItem: (id: id) => void;
  toggleItem: (id: id) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({ item, deleteItem, toggleItem }) => {
  return (
<ListItemButton key={item.id}>
  <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
    <Box display="flex" alignItems="center">
      <Checkbox
        checked={item.isDone}
        onChange={() => toggleItem(item.id)}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography
        variant="body1"
        style={{ textDecoration: item.isDone ? 'line-through' : 'none' }}  
      >
        {item.value}
      </Typography>
    </Box>
    <IconButton onClick={() => deleteItem(item.id)} aria-label="delete">
      <DeleteIcon />
    </IconButton>
  </Box>
</ListItemButton>

  );
};

export default TodoCard;
