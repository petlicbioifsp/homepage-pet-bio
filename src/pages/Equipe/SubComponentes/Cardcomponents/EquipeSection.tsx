import React from "react";
import { renderMembers } from "./RenderTeam";
import styles from '../../Equipe.module.css';
import {IRenderMembersProps } from "../../../../types/EquipeTypes";


export default function MemberSection({ data, customClass, cardClass, imgContainerClass }: IRenderMembersProps) {
    return (
      <section className={styles[customClass]}>
        {renderMembers(data, cardClass, imgContainerClass)}
      </section>
    );
  }