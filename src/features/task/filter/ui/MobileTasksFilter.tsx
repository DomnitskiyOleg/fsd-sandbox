import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { useCallback, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Filter, selectFilter, setTaskFilter } from '../model/slice'
import { TaskStatus } from '@/entities/task'
import { useTranslation } from 'react-i18next'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

export function MobileTasksFilter() {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation('tasks')
  const dispatch = useDispatch()
  const filter = useSelector(selectFilter)

  const handleToggle = useCallback(() => {
    setOpen((prevOpen) => !prevOpen)
  }, [])

  const handleClose = useCallback((event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }, [])

  const handleMenuItemClick = useCallback(
    (value: Filter) => {
      dispatch(setTaskFilter({ filter: value }))
      setOpen(false)
    },
    [dispatch],
  )
  return (
    <Paper elevation={4}>
      <ToggleButtonGroup color='primary' value={1} fullWidth ref={anchorRef}>
        <ToggleButton value={1}>{t(`TasksFilter.${filter}`)}</ToggleButton>
        <ToggleButton
          value={2}
          sx={{ maxWidth: '20%' }}
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='menu'
          onClick={handleToggle}
        >
          <FilterAltOutlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <Popper
        sx={{ zIndex: 1 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement='bottom-end'
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id='split-button-menu' autoFocusItem>
                  <MenuItem
                    selected={filter === 'all'}
                    onClick={() => handleMenuItemClick('all')}
                  >
                    {t('TasksFilter.all')}
                  </MenuItem>
                  {Object.values(TaskStatus).map((v) => (
                    <MenuItem
                      key={v}
                      selected={v === filter}
                      onClick={() => handleMenuItemClick(v)}
                    >
                      {t(`TasksFilter.${v}`)}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Paper>
  )
}
