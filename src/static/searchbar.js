import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',height:"40px", width: 200, float:"right",position:"relative",left:"-70px",top:"-70px" }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Jobs"

      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      </IconButton>
    </Paper>
  );
}
