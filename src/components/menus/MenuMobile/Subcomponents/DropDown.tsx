import Dot from "./Dot";
import React from "react";
import ItemList from "./ItemList";
import ShadowCut from "./Shadowcut";
import ContainerCut from "./COnteinerCut"
import { IMenuItem } from "../../../../types/MenuTypes";
export default function DropdownContent({ items, onClick }: { items: IMenuItem[]; onClick: () => void }) {
    return (
      <div className="dots" onClick={onClick}>
        <Dot />
        <Dot />
        <ShadowCut />
        <ContainerCut />
        <ItemList items={items} onClick={onClick} />
        <Dot />
      </div>
    );
  }