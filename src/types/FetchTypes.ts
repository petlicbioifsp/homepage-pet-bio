import { IFaq } from "./FaqTypes";
import { IProject } from "./ProjectTypes";
import { IEquipeData } from "./EquipeTypes";

export interface IFetchRenderProjects {
    render: (data: IProject[]) => React.ReactNode;
  }

export interface IFetchEquipeProps {
    render: (data: IEquipeData) => React.ReactNode;
  }

export interface IFetchFaq {
    render: (faqs:IFaq[]) =>React.ReactNode
  }