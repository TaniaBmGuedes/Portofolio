import type { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>{children}</FormProvider>
  );
}
