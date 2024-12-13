// import { Box, Container, Stack } from '@mui/material'
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult,
// } from '@hello-pangea/dnd'
// import { useSelector } from 'react-redux'
// import {
//   FilteredTasks,
//   selectTasks,
//   TaskStatus,
// } from '@/app/Store/slices/tasksSlice'

// import { useMemo } from 'react'
// import { TaskCard } from './Card'

// const STATUSES = Object.values(TaskStatus)

// export function TasksKanban() {
//   const tasks = useSelector(selectTasks)

//   const filteredTasks = useMemo(() => {
//     const res: FilteredTasks = {
//       todo: [],
//       inProgress: [],
//       done: [],
//     }

//     Object.values(TaskStatus).forEach((status) => {
//       res[status] = [...tasks.filter((v) => v.status === status)].sort(
//         (a, b) => {
//           if (a.position > b.position) return 1
//           if (a.position < b.position) return -1
//           return 0
//         },
//       )
//     })

//     return res
//   }, [tasks])

//   return (
//     <Container>
//       <div style={{ display: 'flex', width: 600, overflow: 'scroll' }}>
//         <DragDropContext onDragEnd={() => {}}>
//           <Stack
//             flexDirection='row'
//             minWidth={900}
//             sx={{ overflow: 'auto' }}
//             gap={1}
//           >
//             {STATUSES.map((v, i) => (
//               <Box key={v} flex={1} position='relative'>
//                 <Stack key={v} flexDirection='column'>
//                   <Box
//                     alignItems='center'
//                     p={2}
//                     border={1}
//                     borderBottom={0}
//                     borderRadius={1}
//                     justifyContent='space-between'
//                   >
//                     {v}
//                   </Box>
//                   <Droppable droppableId={v}>
//                     {(providedDrop) => (
//                       <div
//                         ref={providedDrop.innerRef}
//                         style={{ padding: 10, backgroundColor: 'blue' }}
//                       >
//                         {filteredTasks[v].map((task, index) => (
//                           <Draggable
//                             key={task.id}
//                             draggableId={task.id}
//                             index={index}
//                             isDragDisabled={false}
//                           >
//                             {(provided, snapshot) => (
//                               <div
//                                 ref={provided.innerRef}
//                                 {...provided.draggableProps}
//                                 {...provided.dragHandleProps}
//                               >
//                                 <TaskCard task={task} />
//                               </div>
//                             )}
//                           </Draggable>
//                         ))}
//                         {providedDrop.placeholder}
//                       </div>
//                     )}
//                   </Droppable>
//                 </Stack>
//               </Box>
//             ))}
//           </Stack>
//         </DragDropContext>
//       </div>
//     </Container>
//   )
// }
