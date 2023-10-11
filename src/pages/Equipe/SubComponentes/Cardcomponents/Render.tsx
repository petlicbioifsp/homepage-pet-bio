import React, { ReactNode } from "react";

interface IRenderProps<T> {
  data: T[]; 
  render: (item: T, index: number) => ReactNode;
  customClass: string;
}

export default function Render<T>({ data, render, customClass }: IRenderProps<T>) {
  return (
    <section className={customClass}>
      {data.map((item, index) => (
        <>{render(item, index)}</>
      ))}
    </section>
  );
}