import React from "react";
import { ReactNode } from "react";
import styles from './links.module.css'

interface ILinkProps{
    href: string, 
    title?:string, 
    rel?:string, 
    target?:string, 
    className?:string,
    children:ReactNode
}

export default function FooterLink({ href, title, rel, target, className, children }: ILinkProps) {
    return (
      <a href={href} title={title} rel={rel} target={target} className={`${styles[className!]}`}>
       {children}
      </a>
    );
  }
  
