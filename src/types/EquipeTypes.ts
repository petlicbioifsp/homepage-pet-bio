export interface CardInterface {
    id?:string
    nome: string;
    ano?: string;
    srcFoto: string;
    tipo?: string;
    github?: string;
    linkedin?: string 
  }


export interface EquipeData {
    alunos: CardInterface[];
    tutores: CardInterface[];
    exAlunos: CardInterface[];
    exTutores: CardInterface[];
  }