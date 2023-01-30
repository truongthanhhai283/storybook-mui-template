import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";

import theme from "./theme";

type Props = {
  children: ReactNode;
};

export default function MuiProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
