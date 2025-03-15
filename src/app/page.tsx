import React from 'react'
import { Container, Typography, Box, Grid } from '@mui/material'

import Image from 'next/image'
import { FadeInSection } from '@/components/FadeInSection'

import Diagram from '@/components/Diagram'
import FAQ from '@/components/FAQ'
import Trigger from '@/components/Trigger'

const features = [
  {
    title: 'Certificación de Autenticidad Estandarizada',
    description:
      'En una era donde el contenido digital se manipula con facilidad, la confianza y la autenticidad son fundamentales. Al implementar el estándar C2PA (Coalition for Content Provenance and Authenticity), nuestra solución garantiza que cada archivo sea rastreado de manera segura y su integridad verificada. Únete a nosotros para revolucionar la forma en que se protege el contenido digital.',
    image: '/GAI.png'
  },
  {
    title: 'Prevención del Fraude',
    description:
      'El fraude en medios digitales es una preocupación creciente para las compañías de seguros, causando pérdidas significativas y problemas de confianza. Nuestra solución de cadena de custodia basada en DLT proporciona un registro inalterable de los activos digitales, garantizando autenticidad y transparencia durante todo su ciclo de vida. Al adoptar nuestro sistema, las aseguradoras pueden reducir drásticamente los riesgos de fraude y fortalecer la confianza de sus clientes.',
    image: '/insurance.png'
  },

  {
    title: 'Certificación de Evidencia',
    description:
      'Las agencias de aplicación de la ley enfrentan grandes desafíos para garantizar la integridad de la evidencia digital, con riesgos de manipulación y problemas en la cadena de custodia. Counterweight proporciona un registro inmutable que garantiza la autenticidad y trazabilidad de los medios digitales, desde su recolección hasta su presentación en los tribunales. Al implementar nuestro sistema, las agencias pueden fortalecer sus procesos de investigación y aumentar la credibilidad de sus casos.',
    image: '/popo.png'
  },
  {
    title: 'Confianza en los medios',
    description:
      'La confianza en los medios está en su punto más bajo, y los periodistas enfrentan grandes desafíos para demostrar la autenticidad de sus fuentes. Al almacenar hashes criptográficos en contratos inteligentes on-chain, Counterweight garantiza que cada pieza de contenido digital sea verificable públicamente, protegiendo su integridad desde la creación hasta la publicación. Con esta tecnología, los periodistas pueden defender su trabajo contra la desinformación y reforzar su credibilidad.',
    image: '/journo.png'
  }
]

export default function Home() {
  return (
    <Container
      sx={{
        flex: 1,
        backgroundColor: 'background.default'
      }}
      maxWidth="lg"
    >
      <Box
        sx={{ paddingY: 8, paddingX: 4, backgroundColor: 'background.default' }}
      >
        {/* Hero Section */}

        <FadeInSection>
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{
              flexDirection: { sm: 'column-reverse', md: 'row' }
            }}
          >
            <Grid
              size={{ xs: 12, md: 6 }}
              paddingTop={{ xs: 0 }}
              sx={{
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Typography variant="h4" gutterBottom color="primary.main">
                Un registro inmutable de procedencia para contenido digital.
              </Typography>
              <Trigger label="Solicitar Demostración" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Image
                style={{
                  width: '100%',
                  height: 'auto'
                }}
                src="/icon.png"
                alt="Product Hero"
                width={600}
                height={400}
              />
            </Grid>
          </Grid>
        </FadeInSection>

        {/* Feature Sections */}
        {features.map((feature, index) => (
          <FadeInSection key={feature.title} delay={(index + 1) * 0.2}>
            <Grid
              container
              spacing={4}
              sx={{
                flexDirection: {
                  sm: 'column-reverse',
                  md: index % 2 === 0 ? 'row-reverse' : 'row'
                },
                alignItems: 'center'
              }}
            >
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ color: 'primary.main' }}
                  px={1}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  component={'p'}
                  color="textPrimary"
                  px={1}
                >
                  {feature.description}
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    ml: {
                      xs: 0,
                      lg: index === 0 ? '-120px' : index === 2 ? '-100px' : 0
                    }
                  }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    style={{
                      width: '100%',
                      height: 'auto'
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </FadeInSection>
        ))}
        <FadeInSection>
          <Diagram />
        </FadeInSection>
        <FadeInSection>
          <FAQ />
        </FadeInSection>

        <Grid container alignItems="center" spacing={4}>
          <Grid
            size={12}
            sx={{
              textAlign: 'center'
            }}
          >
            {' '}
            <Trigger label="Solicitar Demostración" />
          </Grid>
        </Grid>

        {/* Early Access Modal */}
      </Box>
    </Container>
  )
}
