import React from 'react';
import styles from './Cabecalho.module.css';
import Header from '../../../../components/ui/Header/header';
import { IInformationProps} from '../../../../types/TextTypes';

export default  function Cabecalho({ title, content }: IInformationProps) {
  return (
    <div className={styles.cabecalho}>
      <Header texto={title} />
      <p className={styles.texto}>{content}</p>
    </div>
  );
}

