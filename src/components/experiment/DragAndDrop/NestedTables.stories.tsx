import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { forwardRef, useCallback, useState, useRef, memo } from "react";
import type {
  DragDropContextProps,
  DraggableLocation,
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import Checkbox from "@/components/atoms/Checkbox";
import useDisclosure from "@/hooks/shared/useDisclosure";
import isNil from "@/utils/isNil";

export default {
  title: "experiment/DragAndDrop/NestedTables",
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

type TableLevel2Props = {
  item: Item;
  provided: {
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps?: DraggableProvidedDragHandleProps;
  };
  isDragging: boolean;
};

const getDroppableBackgroundColor = (snapshot: DroppableStateSnapshot) => {
  // Giving isDraggingOver preference
  if (snapshot.isDraggingOver) {
    return "lightblue";
  }

  // If it is the home list but not dragging over
  if (snapshot.draggingFromThisWith) {
    return "lightpink";
  }

  // Otherwise use our default background
  return "lightgrey";
};

const TableLevel2 = forwardRef<HTMLDivElement, TableLevel2Props>(
  function TableLevel2(props, ref) {
    const { item, provided, isDragging } = props;

    const dateItem = useRef(
      JSON.parse(document.getElementById(`${item.id}`)?.dataset.item ?? "{}")
    );

    const { isOpen, onToggle } = useDisclosure({
      defaultIsOpen: dateItem.current.defaultIsOpen ?? false,
    });

    return (
      <div
        id={`${item.id}`}
        ref={ref}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
          userSelect: "none",
          padding: 16,
          marginBottom: 8,
          background: isDragging ? "lightgreen" : "lightcyan",
          ...provided.draggableProps.style,
        }}
        data-item={JSON.stringify({ defaultIsOpen: isOpen })}
        onTransitionEnd={(event) => {
          provided.draggableProps.onTransitionEnd?.(event);
        }}
      >
        <Checkbox checked={isOpen} onChange={onToggle} /> {item.content}
        <Box flex={1} ml={2}>
          <Fade in={isOpen} unmountOnExit>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Box flex={1} border={"1px"} borderColor="black">
                  title 1
                </Box>
                <Box flex={1} border={"1px"} borderColor="black">
                  title 2
                </Box>
                <Box flex={1} border={"1px"} borderColor="black">
                  title 3
                </Box>
                <Box flex={1} border={"1px"} borderColor="black">
                  title 4
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box flex={1} border={"1px"} borderColor="black">
                  content 1
                </Box>
                <Box flex={1} border={"1px"} borderColor="black">
                  content 2
                </Box>
                <Box flex={1} border={"1px"} borderColor="black">
                  content 3
                </Box>
                <Box flex={1} border={"1px"} borderColor="black">
                  content 4
                </Box>
              </Box>
            </Box>
          </Fade>
        </Box>
      </div>
    );
  }
);

const Draggables = memo(function Draggables(props: { items: Item[] }) {
  console.log("render Draggables");

  return (
    <>
      {props.items.map((item, index) => (
        <Draggable
          key={item.id}
          draggableId={`draggableId-${item.id}`}
          index={index}
        >
          {(provided, snapshot) => {
            return (
              <TableLevel2
                item={item}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
                provided={{
                  draggableProps: provided.draggableProps,
                  dragHandleProps: provided.dragHandleProps,
                }}
              />
            );
          }}
        </Draggable>
      ))}
    </>
  );
});

export function NestedTables() {
  const [items1, setItems1] = useState(() => getItems(10));
  const [items2, setItems2] = useState(() => getItems(5, 10));

  const handleDragStart = useCallback(() => {
    console.log("handle drag start");
  }, []);

  const handleDragUpdate = useCallback(() => {
    // console.log("handle drag update");
  }, []);

  const handleDragEnd: DragDropContextProps["onDragEnd"] = useCallback(
    (...params) => {
      const [result] = params;

      console.log(params);

      // dropped outside the list
      if (isNil(result.destination)) {
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
                        background:
                          getDroppableBackgroundColor(droppableSnapshot),
                        padding: 8,
                      }}
                    >
                      <Draggables items={items} />
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
