import { Button, FormControl, FormHelperText, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { Box } from "@mui/system";
import { ErrorMessage } from "@hookform/error-message";
import { useUserContext } from "../hooks/useUserContext";

export function Login() {
  const { onLogin } = useUserContext();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
      })
    ),
  });

  const handleSubmit = async ({ email, password }) => {
    const { user, error } = await onLogin({ email, password });

    if (!user && error?.message) {
      form.setError("email", error);
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Box sx={{ margin: 2, maxWidth: 1024 }}>
          <Box my={2}>
            <FormControl fullWidth>
              <Controller
                name="email"
                render={({ field, formState: { isValid } }) => (
                  <TextField
                    fullWidth
                    error={isValid}
                    label="Email"
                    {...field}
                  />
                )}
              />
              <ErrorMessage name="email" as={<FormHelperText error />} />
            </FormControl>
          </Box>

          <Box my={2}>
            <FormControl fullWidth>
              <Controller
                name="password"
                render={({ field, formState: { isValid } }) => (
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    error={isValid}
                    {...field}
                  />
                )}
              />
              <ErrorMessage name="password" as={<FormHelperText error />} />
            </FormControl>
          </Box>

          <Box my={2}>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
}
