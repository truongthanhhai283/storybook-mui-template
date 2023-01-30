import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";

import Button from "@/components/atoms/Button";
import OutlinedInputText from "@/components/atoms/OutlinedInputText";
import useLoginForm from "@/hooks/features/login/useLoginForm";

type Props = {
  onLogin(email: string, password: string): void;
};

function LoginForm({ onLogin }: Props) {
  const { handleSubmit, register, errors, isValidating } = useLoginForm({
    onLogin,
  });

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 6,
        margin: "auto",
        maxWidth: "sm",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <FormControl>
            <Grid container>
              <Grid xs={4}>
                <label htmlFor="email">Email address</label>
              </Grid>
              <Grid xs={8}>
                <OutlinedInputText
                  id="email"
                  size="medium"
                  placeholder="Email address"
                  fullWidth
                  error={!!errors.email}
                  {...register("email")}
                />
              </Grid>
            </Grid>
          </FormControl>
          <FormControl>
            <Grid container>
              <Grid xs={4}>
                <label htmlFor="password">Password</label>
              </Grid>
              <Grid xs={8}>
                <OutlinedInputText
                  id="password"
                  type="password"
                  size="medium"
                  placeholder="Password"
                  fullWidth
                  error={!!errors.password}
                  {...register("password")}
                />
              </Grid>
            </Grid>
          </FormControl>
          <Button type="submit" size="large" disabled={isValidating}>
            Login
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}

export default LoginForm;
