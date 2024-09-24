import { IFaq } from "./FaqTypes";
import { IProject } from "./ProjectTypes";
import { ICard, IEquipeData } from "./EquipeTypes";
import { IPlatform } from "./DigitalPlataforms";

export interface IFetchProjects {
  render: (data: IProject[]) => React.ReactNode;
}

export interface IFetchEquipeProps {
  render: (data: IEquipeData) => React.ReactNode;
}

export interface IFetchFaq {
  render: (faqs: IFaq[]) => React.ReactNode;
}

export interface IFetchPlatforms {
  render: (plataformas: IPlatform[]) => React.ReactNode;
}
