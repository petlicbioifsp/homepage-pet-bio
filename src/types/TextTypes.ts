export interface InscricoesProps{
  title:string, 
  introducao:string, 
  email:string, 
  prazo:string, 
  data:string, 
  estado:string, 
  detalhes:string,
  drive: string;
}

export interface IRequisitosProps{
  requirements: any;
  title:string, 
  introducao:string, 
  items: string[];
}

export interface IInformationProps{
  title :string; 
  content: string; 
}