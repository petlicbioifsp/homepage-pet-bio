import '../../equipe.css';
import React, { ReactNode } from "react";

interface IRenderProps {
  data: any[]; 
  render: (item: any, index: number) => ReactNode;
  customClass: string;
}

export default function Render({ data, render, customClass }: IRenderProps) {
  return (
    <section className={customClass}>
      {data.map((item, index) => (
        <div key={index}>{render(item, index)}</div>
      ))}
    </section>
  );
}
