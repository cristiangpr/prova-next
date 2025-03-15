import { Stack, Box, Typography, Paper, Grid } from '@mui/material'

const steps = [
  {
    title: 'Para quien es PROVA?',
    description:
      'Fotógrafos profesionales, agencias de noticias, creadores de contenido, ajustadores de seguros y sus clientes, así como agentes de las fuerzas del orden, pueden certificar imágenes y videos. La extensión de navegador y los complementos para redes sociales están diseñados para ser utilizados por partes interesadas y el público en general para verificarlos.'
  },
  {
    title: 'Como garantiza la autenticidad?',
    description:
      'Mediante la implementación de métodos criptográficos robustos, garantizamos que los archivos solo puedan certificarse a través de una cámara física y verificamos la ubicación en el momento de la captura.'
  },
  {
    title: 'Por que es necesario el blockchain?',
    description:
      'La tecnología blockchain o de contabilidad distribuida (DLT) es necesaria para garantizar la inmutabilidad y la transparencia, asegurando que los registros sean verificables y confiables para cualquier persona.'
  }
]

export default function FAQ() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography
        sx={{ color: 'primary.main' }}
        variant="h4"
        align="center"
        gutterBottom
        padding={8}
      >
        Preguntas Frecuentes
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {steps.map((step, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%'
              }}
            >
              <Stack alignItems="center" spacing={2}>
                <Typography sx={{ color: 'primary.main' }} variant="h6">
                  {step.title}
                </Typography>
                <Typography variant="body2">{step.description}</Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
