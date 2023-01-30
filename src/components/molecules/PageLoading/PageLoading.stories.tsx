import type { ComponentMeta } from "@storybook/react";
import { useState } from "react";

import Button from "@/components/atoms/Button";

import PageLoading from ".";

export default {
  title: "molecules/PageLoading",
  component: PageLoading,
} as ComponentMeta<typeof PageLoading>;

export const Default = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleShow = () => {
    setIsLoading(true);
  };

  return (
    <>
      <Button onClick={handleShow}>Show loading</Button>
      {isLoading && <PageLoading />}
    </>
  );
};
