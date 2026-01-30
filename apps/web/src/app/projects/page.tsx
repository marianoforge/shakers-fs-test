import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function ProjectsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h1" component="h1" sx={{ mb: 1 }}>
          Buscar Proyectos
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Encuentra proyectos que se ajusten a tus habilidades y experiencia
        </Typography>
      </Box>

      <Box
        sx={{
          p: 4,
          bgcolor: 'background.paper',
          borderRadius: 2,
          border: 1,
          borderColor: 'divider',
          textAlign: 'center',
        }}
      >
        <Typography variant="body1" color="text.secondary">
          Cargando proyectos...
        </Typography>
      </Box>
    </Container>
  );
}
