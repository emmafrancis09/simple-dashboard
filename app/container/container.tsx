import React from "react";
type Props = {
  children: React.ReactNode;
};
export default function ContainerPage({ children }: Props) {
  return (
    <main className="flex items-center justify-center mt-16">{children}</main>
  );
}
