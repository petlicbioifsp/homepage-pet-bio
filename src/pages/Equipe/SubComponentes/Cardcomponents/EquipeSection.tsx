import React from "react";
import { renderMembers } from "./RenderTeam";
import styles from "../../Equipe.module.css";
import { IRenderMembersProps } from "../../../../types/EquipeTypes";

export default function MemberSection({ data, customStyles, cardStyles, imageContainerStyles }: IRenderMembersProps) {
  return <section className={styles[customStyles]}>{renderMembers(data, cardStyles, imageContainerStyles)}</section>;
}
