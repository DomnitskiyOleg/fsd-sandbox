import { Button, Container, Paper, Stack, TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Grid from '@mui/material/Grid2'
import { Dayjs } from 'dayjs'
import { useCallback, useState } from 'react'
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import { useDeviceQuery } from '@/shared/lib'
import { useTranslation } from 'react-i18next'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { addTaskAction, TaskStatus } from '@/entities/task'

type FormValues = {
  name: string
  description: string | null
}

export function AddTaskForm() {
  const { t } = useTranslation('tasks')
  const { t: commonT } = useTranslation()

  const { isMobile, isMedium } = useDeviceQuery()
  const dispatch = useDispatch()

  const [date, setDate] = useState<Dayjs | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = useCallback(
    (data) => {
      const completeBy = date ? date.toString() : date
      dispatch(
        addTaskAction({
          ...data,
          status: TaskStatus.ToDo,
          completeBy,
          position: 0,
        }),
      )
      setDate(null)
      reset()
    },
    [date],
  )

  return (
    <Container sx={{ mt: 4 }} maxWidth='xl'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper elevation={4} sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 12, lg: 3 }}>
              <TextField
                required
                size='small'
                fullWidth
                {...register('name', {
                  required: commonT('validation.required'),
                })}
                error={!!errors.name}
                helperText={
                  errors.name ? commonT('validation.required') : undefined
                }
                label={t('AddTaskForm.nameLabel')}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 8, lg: 6 }}>
              <TextField
                size='small'
                {...register('description')}
                fullWidth
                label={t('AddTaskForm.descriptionLabel')}
                multiline={isMobile}
                rows={2}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4, lg: 3 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  name='date'
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  label={t('AddTaskForm.dateLabel')}
                  slotProps={{
                    textField: {
                      size: 'small',
                      fullWidth: true,
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
              fullWidth={isMedium}
              endIcon={<RestartAltOutlinedIcon />}
              variant='outlined'
              onClick={() => {
                setDate(null)
                reset()
              }}
            >
              {t('AddTaskForm.resetButton')}
            </Button>
            <Button
              type='submit'
              fullWidth={isMedium}
              endIcon={<AddBoxOutlinedIcon />}
              variant='contained'
            >
              {t('AddTaskForm.addButton')}
            </Button>
          </Stack>
        </Paper>
      </form>
    </Container>
  )
}
