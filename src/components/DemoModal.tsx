'use client'
import { styled } from '@mui/material/styles'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

interface ModalProps {
  open: boolean
  onClose: () => void
}

export const DemoModal = ({ open, onClose }: ModalProps) => {
  const [success, setSuccess] = useState<boolean | null>(null)
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleClose = () => {
    onClose()
    setSuccess(false)
  }
  const send = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY)
    emailjs.init(process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!)
    let response
    try {
      response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        formData
      )
      if (response) setSuccess(true)
    } catch (error) {
      console.error('Error sending email:', error)
      setSuccess(false)
    }
  }

  return (
    <StyledModal open={open} onClose={handleClose}>
      <StyledModalContent>
        {success === true ? (
          <>
            <Box display="flex" justifyContent="center" width="100%" mb={1}>
              <VerifiedIcon fontSize="large" sx={{ color: 'primary.main' }} />
            </Box>
            <Typography gutterBottom align="center" color="textPrimary">
              Registro Exitoso!
            </Typography>
          </>
        ) : success === false ? (
          <Typography gutterBottom align="center" color="textPrimary">
            Algo salio mal. Por favor vuelva a intentar
          </Typography>
        ) : null}
        <Typography gutterBottom align="center" color="textPrimary">
          Escriba su email y un mensaje para agendar una demostración
        </Typography>
        <form onSubmit={send}>
          <StyledTextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <StyledTextField
            fullWidth
            label="Mensaje"
            variant="outlined"
            type="text"
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="secondary" fullWidth>
            Enviar
          </Button>
        </form>
      </StyledModalContent>
    </StyledModal>
  )
}

const StyledModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  width: '90%',
  maxWidth: 400
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main
    },
    '&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main
    }
  },
  '& .MuiInputLabel-outlined': {
    color: theme.palette.primary.main
  }
}))
const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})
