export interface IProject {
  id?:string,
  titulo:string, 
  tipo:string, 
  descricao:string, 
  expandido:string, 
  link:string, 
  status:string, 
  tecnologias:string,
  images?: ImageProject[]
}

export interface ImageProject{
  url:string,
  descricao:string
}

export interface ICLoedContentProps{
  titulo:string,
  descricao:string, 
} 

export interface IOpennedContentProps{
  status:string,
  titulo:string, 
  expandido:string, 
  tecnologias: string, 
  images?: ImageProject[]

}

export interface IClosedCardProps extends ICLoedContentProps{ 
  link:string, 
  tipo:string,
}

export interface IOpennedCardProps extends IOpennedContentProps{
  tipo:string, 
  link:string,  
  toggleIsOpen: () => void; 

}

export interface ILogoConteinerProps{
  tipo:string, 
  link:string, 
  logoConteinerClass:string, 
  iconClass:string,
}