import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { CSSProperties } from "react";
import { useRef } from "react";
import { VariableSizeList as List } from "react-window";

export default {
  title: "experiment/VirtualList/VariableSizeList",
};

const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

const getItemSize1 = (index: number) => rowHeights[index];

function Row({ index, style }: { index: number; style: CSSProperties }) {
  return (
    <div
      style={{
        ...style,
        backgroundColor: index % 2 === 0 ? "lightblue" : "grey",
      }}
    >
      Row {index}
    </div>
  );
}

function Example1() {
  return (
    <Box border="1px" borderColor={"line-primary"}>
      <List height={150} itemCount={500} itemSize={getItemSize1} width={300}>
        {Row}
      </List>
    </Box>
  );
}

const columnWidths = new Array(1000)
  .fill(true)
  .map(() => 75 + Math.round(Math.random() * 50));

const getItemSize2 = (index: number) => columnWidths[index];

function Column({
  index,
  isScrolling,
  style,
}: {
  index: number;
  isScrolling?: boolean;
  style: CSSProperties;
}) {
  return (
    <div
      style={{
        ...style,
        backgroundColor: index % 2 === 0 ? "lightblue" : "grey",
      }}
    >
      {isScrolling ? "Scrolling" : `Column ${index}`}
    </div>
  );
}

function Example2() {
  const ref = useRef<List>(null);

  return (
    <Box border="1px" borderColor={"line-primary"}>
      <Stack direction={"column"}>
        <button
          onClick={() => {
            ref.current?.scrollToItem(200);
          }}
        >
          Scroll to column 200 (align: auto)
        </button>
        <button
          onClick={() => {
            ref.current?.scrollToItem(250, "smart");
          }}
        >
          Scroll to column 250 (align: smart)
        </button>
        <button
          onClick={() => {
            ref.current?.scrollToItem(300, "center");
          }}
        >
          Scroll to column 300 (align: center)
        </button>
      </Stack>
      <List
        ref={ref}
        height={150}
        itemCount={500}
        itemSize={getItemSize2}
        width={300}
        layout="horizontal"
        useIsScrolling
      >
        {Column}
      </List>
    </Box>
  );
}

export function VariableSizeList() {
  return (
    <div>
      <Box p={4}>
        <Example1 />
      </Box>
      <div style={{ padding: 10 }} />
      <Box p={4}>
        <Example2 />
      </Box>
    </div>
  );
}
