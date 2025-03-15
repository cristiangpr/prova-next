import { Stack, Box, Typography, Paper, Grid } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import LockIcon from '@mui/icons-material/Lock'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import VerifiedIcon from '@mui/icons-material/Verified'

const steps = [
  {
    icon: <CameraAltIcon sx={{ color: 'primary.main' }} fontSize="large" />,
    title: 'Captura de Imagen',
    description:
      'El usuario toma una foto o video usando un teléfono o cámara conectada via USB'
  },
  {
    icon: <GpsFixedIcon sx={{ color: 'primary.main' }} fontSize="large" />,
    title: 'Extracción de Metadatos',
    description: 'La aplicación reúne los datos de localización disponibles'
  },
  {
    icon: <LockIcon sx={{ color: 'primary.main' }} fontSize="large" />,
    title: 'Generación De Certificado',
    description: 'Se generan hashes criptográficos y se firman electrónicamente'
  },
  {
    icon: <CloudUploadIcon sx={{ color: 'primary.main' }} fontSize="large" />,
    title: 'Registro on Blockchain',
    description:
      'Se registra el certificado en un contrato inteligente inmutable'
  },
  {
    icon: <VerifiedIcon sx={{ color: 'primary.main' }} fontSize="large" />,
    title: 'Verificación via Clientes',
    description:
      'La aplicación móvil, extension de navegador o complemento de medios sociales verifican en tiempo real'
  }
]

export default function Diagram() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography
        sx={{ color: 'primary.main' }}
        variant="h4"
        textAlign="center"
        gutterBottom
        padding={8}
      >
        Como funciona PROVA
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {steps.map((step, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Paper
              elevation={3}
              sx={{ p: 3, textAlign: 'center', height: '100%' }}
            >
              <Stack alignItems="center" spacing={2}>
                {step.icon}
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
