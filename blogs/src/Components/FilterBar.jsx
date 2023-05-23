import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl/FormControl';
import { Select, MenuItem, Grid, Button } from '@mui/material';
import CategoryIcon from '../Assets/category.png';
import reset from "../Assets/reset.png";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function FilterBar({ onFilterChange, categoryOptions }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState('');

  const categorySet = [...new Set(categoryOptions.map((category) => category.category))];
  const datePicker = [...new Set(categoryOptions.map((category) => category.date))];
 
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleDateRangeChange = (e) => {
    console.log(e.target.value);
    setSelectedDateRange(e.target.value);
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedDateRange('');
     onFilterChange('', '', '');
  };

  const handleExplore = () => {
    onFilterChange(searchQuery, selectedCategory, selectedDateRange);
  };

  return (
    <div className="filter-bar">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={3}>
          <TextField
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <SearchOutlinedIcon style={{ marginRight: '8px' }} />
              ),
            }}
            size="small"
            fullWidth
            style={{background:"#F6F5FC"}}
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <FormControl variant="outlined" fullWidth style={{background:"#F6F5FC"}}>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              startAdornment={<img src={CategoryIcon} alt="categoryIcon" style={{width:"5%",marginRight:"1%"}}/>}
              displayEmpty
              inputProps={{
                name: 'category',
                id: 'category-select',
              }}
              size='small'
            >
              <MenuItem value="" className="menu-item">
                Category
              </MenuItem>
              {categorySet.map((category, index) => (
                <MenuItem key={index} value={category} className='menuItem'>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={3}>
        <FormControl variant="outlined" fullWidth style={{background:"#F6F5FC"}}>
            <Select
              value={selectedDateRange}
              onChange={handleDateRangeChange}
              startAdornment={<CalendarTodayIcon  style={{marginRight:"5px",fontSize:"15px"}}/>}
              displayEmpty
              inputProps={{
                name: 'selectDate',
                id: 'category-selectDate',
              }}
              size='small'
            >
              <MenuItem value="" className="menu-item" >
              Date
              </MenuItem>
              {datePicker.map((date, index) => (
                <MenuItem key={index} value={date} className='menuItem'>
                  {date}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12} lg={3} justifyContent="center" className="button-container">
        {/* <div > */}
        <Button onClick={handleReset}><img src={reset} alt="reset-icon" style={{width:"40%",marginRight:"6%"}}/>Reset</Button>  
        <Button onClick={handleExplore}>Explore</Button>
     
      {/* </div> */}
        </Grid>
      </Grid>

      
    </div>
  );
}
