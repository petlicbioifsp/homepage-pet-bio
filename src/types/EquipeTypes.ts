export interface ICard {
    id?:string
    nome: string;
    ano?: string;
    srcFoto: string;
    tipo?: string;
    github?: string;
    linkedin?: string 
    altFoto:string;
}

export interface IEquipeData {
    alunos: ICard[];
    tutores: ICard[];
    exAlunos: ICard[];
    exTutores: ICard[];
}


enum BlurStyles {
    WithBlur = "blur(2px) grayscale(80%) brightness(0.5)",
    NoBlur = "blur(0px) grayscale(0%)",
}
  
export const noBlurStyle: React.CSSProperties = {
    filter: BlurStyles.NoBlur,
};
  
export const withBlurStyle: React.CSSProperties = {
    filter: BlurStyles.WithBlur,
};