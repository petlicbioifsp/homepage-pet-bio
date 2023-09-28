import { ProjectInterface } from "./ProjectTypes";
import { EquipeData } from "./EquipeTypes";
import { FaqInterface } from "./FaqTypes";

export interface FetchRenderProjectsInterface {
    render: (data: ProjectInterface[]) => React.ReactNode;
  }

export interface FetchEquipeProps {
    render: (data: EquipeData) => React.ReactNode;
  }

export interface FetchFaq {
    render: (faqs:FaqInterface[]) =>React.ReactNode
  }