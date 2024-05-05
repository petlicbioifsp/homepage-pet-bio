import { ReactNode } from 'react';
export interface IProject {
  id?:string,
  titulo:string, 
  tipo:string, 
  descricao:string, 
  expandido:string, 
  link:string, 
  status:string, 
  images: IImageProject[]
}

export interface IImageProject{
  id:string,
  url:string,
  descricao:string
}

export interface CarouselProps {
  images: IImageProject[];
}

export interface ICLoedContentProps{
  titulo:string,
  descricao:string, 
} 

export interface IOpennedContentProps{
  status:string,
  titulo:string, 
  expandido:string, 
  images: IImageProject[]
  children?: ReactNode;

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