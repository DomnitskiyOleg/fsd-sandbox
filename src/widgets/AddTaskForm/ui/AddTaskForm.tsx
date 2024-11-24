import { Button, Container, Paper, Stack, TextField } from '@mui/material'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Grid from '@mui/material/Grid2'
import { Dayjs } from 'dayjs'
import { useState } from 'react'

import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined'
import { useMobileQuery } from '@/shared/lib'
import { AddTaskButton } from '@/features/task/add'

export function AddTaskForm() {
  const [value, setValue] = useState<Dayjs | null>(null)
  const isMobile = useMobileQuery()

  return (
    <Container sx={{ mt: 4 }} maxWidth='xl'>
      <form>
        <Paper elevation={6} sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 12, lg: 3 }}>
              <TextField
                size='small'
                fullWidth
                required
                id='outlined-required'
                label='Название задачи'
              />
            </Grid>
            <Grid size={{ xs: 12, md: 8, lg: 6 }}>
              <TextField
                size='small'
                fullWidth
                id='outlined-required'
                label='Описание'
                multiline={isMobile}
                rows={2}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4, lg: 3 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: '1' }}
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  label='Выполнить до'
                  slotProps={{
                    textField: {
                      size: 'small',
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Stack
            mt={2}
            gap={1}
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='end'
          >
            <Button
              fullWidth={isMobile}
              endIcon={<RestartAltOutlinedIcon />}
              variant='outlined'
            >
              Сбросить
            </Button>
            <AddTaskButton />
          </Stack>
        </Paper>
      </form>
    </Container>
  )
}
