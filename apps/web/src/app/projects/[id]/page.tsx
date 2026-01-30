import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          p: 4,
          bgcolor: 'background.paper',
          borderRadius: 2,
          border: 1,
          borderColor: 'divider',
        }}
      >
        <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
          Proyecto #{id}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Cargando detalles del proyecto...
        </Typography>
      </Box>
    </Container>
  );
}
