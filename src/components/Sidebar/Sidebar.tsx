import { faker } from '@faker-js/faker';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import ProjectsList from 'components/ProjectsList';

// Mock up data
const favList = new Array(faker.datatype.number({ min: 1, max: 5 })).fill(0).map(() => ({
  name: faker.company.name(1),
  id: faker.datatype.uuid(),
  color: faker.color.cmyk(),
}));

const allProjects = new Array(faker.datatype.number({ min: 1, max: 5 })).fill(0).map(() => ({
  name: faker.company.name(1),
  id: faker.datatype.uuid(),
  color: faker.color.cmyk(),
}));

const Sidebar = () => {
  return (
    <>
      <TextField
        sx={{ mb: 3 }}
        placeholder='Search...'
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
        variant='standard'
      />
      <Box mb='auto'>
        <ProjectsList data={favList} title='Favorites' />
        <ProjectsList data={allProjects} title='All Projects' />
      </Box>
      <Button variant='contained' disableElevation fullWidth startIcon={<AddOutlinedIcon />}>
        New Project
      </Button>
    </>
  );
};

export default Sidebar;
