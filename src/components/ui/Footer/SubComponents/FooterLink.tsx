import React from "react";
import { ReactNode } from "react";
import styles from '../footer.module.css'

interface IFooterLinkProps{
    href: string, 
    title:string, 
    rel?:string, 
    target?:string, 
    className?:string,
    children:ReactNode
}

export default function FooterLink({ href, title, rel, target, className, children }: IFooterLinkProps) {
    return (
      <a href={href} title={title} rel={rel} target={target} className={`${styles.link} ${className}`}>
        {children}
      </a>
    );
  }
  
