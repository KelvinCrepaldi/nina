import { ReactNode } from "react";

export default function SectionContainer({
  children,
  scrollId,
}: {
  children: ReactNode;
  scrollId?: string;
}) {
  return (
    <section
      id={scrollId}
      className=" w-full flex flex-col "
    >
      {children}
    </section>
  );
}
