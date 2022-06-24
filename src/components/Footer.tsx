import { Paper } from '@mui/material'
import React from 'react'
import Copyright from './Copyright'

export const Footer = () => {
  return (
    <div>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={1}>
            <Copyright />        
        </Paper>

    </div>
  )
}