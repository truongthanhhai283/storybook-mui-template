import Box from "@mui/material/Box";
import produce from "immer";
import type { CSSProperties } from "react";
import { useEffect, useRef, useCallback, useMemo, useState, memo } from "react";
import type { ListOnItemsRenderedProps, ListOnScrollProps } from "react-window";
import { areEqual, FixedSizeList as List } from "react-window";

export default {
  title: "experiment/VirtualList/MemoizedList",
};

const generateItems = (count: number) =>
  Array.from({ length: count }, (_v, k) => ({
    id: k + 1,
    isActive: false,
    label: Math.random().toString(36).substring(2),
  }));

type Item = ReturnType<typeof generateItems>[number];

const Row = memo(function Row({
  index,
  style,
  data,
}: {
  index: number;
  style: CSSProperties;
  data: {
    items: Item[];
    toggleItemActive: (index: number) => void;
  };
}) {
  console.log("render 2");

  const { items, toggleItemActive } = data;
  const item = items[index];

  return (
    <div
      style={{
        ...style,
        backgroundColor: item.isActive ? "lightgreen" : "lightblue",
      }}
    >
      {item.label} is {item.isActive ? "active" : "inactive"}
      <button onClick={() => toggleItemActive(index)}>Change active</button>
    </div>
  );
}, areEqual);

const getItemKey = (index: number, data: { items: Item[] }) => {
  const item = data.items[index];
  return item.id;
};

function Example1({
  items,
  toggleItemActive,
}: {
  items: Item[];
  toggleItemActive: (index: number) => void;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  console.log("render 1");

  const itemData = useMemo(
    () => ({ items, toggleItemActive }),
    [items, toggleItemActive]
  );

  const handleScroll = useCallback((props: ListOnScrollProps) => {
    console.log("--onScroll--");

    console.log(props);
  }, []);

  const handleItemsRendered = useCallback((props: ListOnItemsRenderedProps) => {
    console.log("--onItemsRendered--");

    console.log(props);
  }, []);

  useEffect(() => {
    console.log("outerRef", outerRef.current);
    console.log("innerRef", innerRef.current);
  }, []);

  return (
    <Box border="1px" borderColor={"line-primary"}>
      <List
        height={150}
        width={300}
        itemCount={items.length}
        itemData={itemData}
        itemSize={35}
        itemKey={getItemKey}
        onScroll={handleScroll}
        onItemsRendered={handleItemsRendered}
        innerRef={innerRef}
        outerRef={outerRef}
        overscanCount={3}
      >
        {({ index, style, data }) => (
          <Row index={index} style={style} data={data} />
        )}
      </List>
    </Box>
  );
}

export function MemoizedList() {
  const [items, setItems] = useState(() => generateItems(1000));

  const toggleItemActive = useCallback((index: number) => {
    setItems(
      produce((draft) => {
        const item = draft[index];
        item.isActive = !item.isActive;
      })
    );
  }, []);

  return (
    <div>
      <Box p={4}>
        <Example1 items={items} toggleItemActive={toggleItemActive} />
      </Box>
    </div>
  );
}
