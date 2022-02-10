/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {v4 as uuid} from 'uuid'

import MaterialityHeader from '../MaterialityHeader'

export function Examples() {
    type ColumType = {
      combine?: any
      destination?:
        | {
            droppableId: string
            index: number
          }
        | undefined
      draggableId: string
      mode: string
      reason: string
      source: {
        droppableId: string
        index: number
      }
      type: string
    }
  
    const onDragEnd = (result: ColumType, columns: any, setColumns: any) => {

    if (!result.destination) return

    const {source, destination} = result

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId]
      const destColumn = columns[destination.droppableId]
      const sourceItems = [...sourceColumn.items]
      const destItems = [...destColumn.items]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      })
    } else {
      const column = columns[source.droppableId]
      const copiedItems = [...column.items]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      })
    }
  }
  const itemsBack = [
    {id: uuid(), content: 'Play Fifa'},
    {id: uuid(), content: 'Buy Milk'},
    {id: uuid(), content: 'Read a book'},
    {id: uuid(), content: 'Learn Piano'},
    {id: uuid(), content: 'Call some friends'},
    {id: uuid(), content: 'Learn VueJs'},
  ]
  const columsBack = {
    [uuid()]: {name: 'In Process', items: itemsBack},
    [uuid()]: {name: 'Working', items: []},
    [uuid()]: {name: 'Done', items: []},
  }

  const [col, setCol] = useState(columsBack)

  return (
    <>
      <MaterialityHeader />

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'stretch'}}>
        <DragDropContext onDragEnd={(result: any) => onDragEnd(result, col, setCol)}>
          {Object.entries(col).map(([id, column]) => {
            return (
              <div key={id} style={{margin: 8, background: '#fff', cursor: 'all-scroll'}}>
                <Droppable droppableId={id} key={id}>
                  {(provided: any, snapshot: any) => {
                    return (
                      <>
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            padding: 14,
                            paddingLeft: 24,
                            paddingRight: 24,
                            width: 280,
                          }}
                        >
                          <h4 style={{marginBottom: '40px', fontWeight: 500}}>{column.name}</h4>
                          {column.items.map((item, index) => {
                            return (
                              <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided: any, snapshot: any) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        borderRadius: '6px',
                                        cursor: 'all-scroll',
                                        padding: 12,
                                        margin: '0 0 12px 0',
                                        background: 'rgb(242, 242, 242)',
                                        fontWeight: '600',
                                        color: '  #5c6ca3',
                                        boxShadow: '0 0 2px 2px rgba(242, 242, 242, 0.3)',
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  )
                                }}
                              </Draggable>
                            )
                          })}
                        </div>
                      </>
                    )
                  }}
                </Droppable>
              </div>
            )
          })}
        </DragDropContext>
      </div>
    </>
  )
}
