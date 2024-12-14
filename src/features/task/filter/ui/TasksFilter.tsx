import { TaskStatus } from '@/entities/task'
import { useMobileQuery } from '@/shared/lib'
import { Paper, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useCallback, useState, MouseEvent } from 'react'
import { Filter, setTaskFilter } from '../model/slice'
import { useDispatch } from 'react-redux'

export function TasksFilter() {
  const { isMedium } = useMobileQuery()
  const dispatch = useDispatch()
  const [filter, setFilter] = useState<Filter>('all')

  const handleChange = useCallback(
    (_: MouseEvent<HTMLElement>, value: Filter) => {
      setFilter(value)
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
        exclusive
        onChange={handleChange}
        aria-label='Platform'
      >
        <ToggleButton value={'all'}>все</ToggleButton>
        {Object.values(TaskStatus).map((v) => (
          <ToggleButton key={v} value={v}>
            {v}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Paper>
  )
}
