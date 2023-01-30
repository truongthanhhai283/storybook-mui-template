import Box from "@mui/material/Box";
import type { BoxProps } from "@mui/material/Box";

type CenterProps = Pick<
  BoxProps,
  "width" | "height" | "children" | "bgcolor" | "border" | "onClick"
>;

export default function Center(props: CenterProps) {
  return (
    <Box
      {...props}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    />
  );
}
