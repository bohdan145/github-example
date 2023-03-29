import TuneIcon from '@mui/icons-material/Tune';
import ViewKanbanOutlinedIcon from '@mui/icons-material/ViewKanbanOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

import HeroProject from 'components/HeroProject';
import KanbanBoard from 'components/KanbanBoard';

const HomePage = () => {
  return (
    <Container disableGutters>
      <HeroProject />
      <Divider sx={{ mt: 4 }} />
      <Box display='flex' alignItems='center' justifyContent='space-between' mt={2} mb={2}>
        <Box>
          <Button
            variant='contained'
            disableElevation
            color='inherit'
            startIcon={<ViewKanbanOutlinedIcon />}
            sx={{ mr: 1.5 }}
          >
            Kanban
          </Button>
          <Button
            sx={{ mr: 1.5 }}
            variant='text'
            color='inherit'
            startIcon={<ViewKanbanOutlinedIcon />}
          >
            Table
          </Button>
          <Button
            sx={{ mr: 1.5 }}
            variant='text'
            color='inherit'
            startIcon={<ViewKanbanOutlinedIcon />}
          >
            List view
          </Button>
        </Box>
        <Box>
          <Button variant='text' color='inherit' startIcon={<TuneIcon />}>
            Filter
          </Button>
        </Box>
      </Box>
      <Divider />
      <KanbanBoard />
    </Container>
  );
};

export default HomePage;
