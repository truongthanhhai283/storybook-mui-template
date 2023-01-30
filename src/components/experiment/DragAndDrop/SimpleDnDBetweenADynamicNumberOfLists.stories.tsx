import { useCallback, useState } from "react";
import type {
  DragDropContextProps,
  DraggableLocation,
} from "react-beautiful-dnd";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import isUndefined from "@/utils/isUndefined";

export default {
  title: "experiment/DragAndDrop/SimpleDnDBetweenADynamicNumberOfLists",
};

type Item = {
  id: number;
  content: string;
};

const getItems = (count: number, offset = 0): Item[] =>
  Array.from({ length: count }, (v, k) => ({
    id: k + 1 + offset,
    content: `item - ${k + 1 + offset}`,
  }));

const reorder = (list: Item[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (
  source: Item[],
  destination: Item[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  const sourceCloned = Array.from(source);
  const destinationCloned = Array.from(destination);

  const [removed] = sourceCloned.splice(droppableSource.index, 1);

  destinationCloned.splice(droppableDestination.index, 0, removed);

  const result = {
    [droppableSource.droppableId]: sourceCloned,
    [droppableDestination.droppableId]: destinationCloned,
  };

  return result;
};

export function SimpleDnDBetweenADynamicNumberOfLists() {
  const [items1, setItems1] = useState(() => getItems(10));
  const [items2, setItems2] = useState(() => getItems(5, 10));

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

      const { source, destination } = result;

      const sourceDroppableId = source.droppableId;
      const destinationDroppableId = destination.droppableId;

      if (sourceDroppableId === destinationDroppableId) {
        const startIndex = source.index;
        const endIndex = destination.index;

        if (startIndex === endIndex) {
          return;
        }

        const setItems =
          sourceDroppableId === "droppableId-1" ? setItems1 : setItems2;

        setItems((prevItems) => {
          const nextItems = reorder(prevItems, startIndex, endIndex);

          return nextItems;
        });
      } else {
        const sourceItems =
          sourceDroppableId === "droppableId-1" ? items1 : items2;
        const setNextSourceItems =
          sourceDroppableId === "droppableId-1" ? setItems1 : setItems2;
        const destinationItems =
          destinationDroppableId === "droppableId-1" ? items1 : items2;
        const setNextDestinationItems =
          destinationDroppableId === "droppableId-1" ? setItems1 : setItems2;

        const result = move(sourceItems, destinationItems, source, destination);

        console.log(result);

        setNextSourceItems(result[source.droppableId]);
        setNextDestinationItems(result[destination.droppableId]);
      }

      console.log("handle drag end");
    },
    [items1, items2]
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <DragDropContext
        onDragStart={handleDragStart}
        onDragUpdate={handleDragUpdate}
        onDragEnd={handleDragEnd}
      >
        {[items1, items2].map((items, indexLevel1) => (
          <div key={indexLevel1}>
            <div style={{ fontWeight: "bold" }}>Table {indexLevel1 + 1}</div>
            <div style={{ height: 300, overflowY: "auto" }}>
              <Droppable droppableId={`droppableId-${indexLevel1 + 1}`}>
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
                                    : "lightcyan",
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
            </div>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
}
