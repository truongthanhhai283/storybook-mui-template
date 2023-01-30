import { useCallback, useState } from "react";
import type { DragDropContextProps } from "react-beautiful-dnd";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import isUndefined from "@/utils/isUndefined";

export default {
  title: "experiment/DragAndDrop/SimpleVerticalList",
};

type Item = {
  id: number;
  content: string;
};

const getItems = (count: number): Item[] =>
  Array.from({ length: count }, (v, k) => ({
    id: k + 1,
    content: `item - ${k}`,
  }));

export function SimpleVerticalList() {
  const [items, setItems] = useState(() => getItems(20));

  const reorder = useCallback(
    (list: Item[], startIndex: number, endIndex: number) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      return result;
    },
    []
  );

  const handleDragStart = useCallback(() => {
    console.log("handle drag start");
  }, []);

  const handleDragUpdate = useCallback(() => {
    console.log("handle drag update");
  }, []);

  const handleDragEnd: DragDropContextProps["onDragEnd"] = useCallback(
    (...params) => {
      const [result] = params;

      // dropped outside the list
      if (isUndefined(result.destination)) {
        return;
      }

      const startIndex = result.source.index;
      const endIndex = result.destination.index;

      if (startIndex === endIndex) {
        return;
      }

      setItems((prevItems) => {
        const nextItems = reorder(prevItems, startIndex, endIndex);

        return nextItems;
      });

      console.log("handle drag end");
    },
    [reorder]
  );

  return (
    <DragDropContext
      onDragStart={handleDragStart}
      onDragUpdate={handleDragUpdate}
      onDragEnd={handleDragEnd}
    >
      <Droppable droppableId="droppableId-1">
        {(droppableProvided, droppableSnapshot) => {
          return (
            <div
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
              style={{
                background: droppableSnapshot.isDraggingOver
                  ? "lightblue"
                  : "lightgrey",
                padding: 8,
                width: 250,
              }}
            >
              {items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={`draggableId-${item.id}`}
                  index={index}
                >
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          userSelect: "none",
                          padding: 16,
                          marginBottom: 8,
                          background: snapshot.isDragging
                            ? "lightgreen"
                            : "grey",
                          ...provided.draggableProps.style,
                        }}
                      >
                        {item.content}
                      </div>
                    );
                  }}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
}
