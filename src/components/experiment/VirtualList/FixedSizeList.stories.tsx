import Box from "@mui/material/Box";
import type { CSSProperties } from "react";
import { FixedSizeList as List } from "react-window";

export default {
  title: "experiment/VirtualList/FixedSizeList",
};

function Row({ index, style }: { index: number; style: CSSProperties }) {
  return <div style={style}>Row {index}</div>;
}

function Example1() {
  return (
    <Box border="1px" borderColor={"line-primary"}>
      <List height={150} itemCount={500} itemSize={35} width={300}>
        {Row}
      </List>
    </Box>
  );
}

function Column({ index, style }: { index: number; style: CSSProperties }) {
  return (
    <div
      style={{
        ...style,
        backgroundColor: index % 2 === 0 ? "lightblue" : "grey",
      }}
    >
      Column {index}
    </div>
  );
}

function Example2() {
  return (
    <Box border="1px" borderColor={"line-primary"}>
      <List
        height={150}
        itemCount={500}
        itemSize={35}
        width={300}
        layout="horizontal"
      >
        {Column}
      </List>
    </Box>
  );
}

export function FixedSizeList() {
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
