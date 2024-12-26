import { TaskStatus } from '@/entities/task'
import { Paper, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useCallback, MouseEvent } from 'react'
import { Filter, selectFilter, setTaskFilter } from '../model/slice'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

export function TasksFilter() {

  const { t } = useTranslation('tasks')
  const dispatch = useDispatch()
  const filter = useSelector(selectFilter)

  const handleChange = useCallback(
    (_: MouseEvent<HTMLElement>, value: Filter) => {
      if (!value) return
      dispatch(setTaskFilter({ filter: value }))
    },
    [],
  )

  return (
    <Paper>
      <ToggleButtonGroup
        fullWidth
        color='primary'
        value={filter}
        defaultValue={'all'}
        exclusive
        onChange={handleChange}
    
      >
        <ToggleButton value={'all'}>{t('TasksFilter.all')}</ToggleButton>
        {Object.values(TaskStatus).map((v) => (
          <ToggleButton key={v} value={v}>
            {t(`TasksFilter.${v}`)}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Paper>
  )
}
