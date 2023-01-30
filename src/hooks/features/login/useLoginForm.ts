import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";

type Params = {
  onLogin(email: string, password: string): void;
};

type FormValues = {
  email: string;
  password: string;
};

const schema = zod.object({
  email: zod
    .string()
    .email("This field is email")
    .min(1, "This field is required")
    .max(20, "This field cannot exceed 20 characters"),
  password: zod.string().min(1, "This field is required"),
});

function useLoginForm(params: Params) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValidating },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  return {
    register,
    handleSubmit: handleSubmit((data) => {
      params.onLogin(data.email, data.password);
    }),
    errors,
    isValidating,
  };
}

export default useLoginForm;
