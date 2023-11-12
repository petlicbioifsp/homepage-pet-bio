"use client";
import "./Faq.css";
import React from "react";
import FetchFaq from "../../hooks/fetch/useFetchFAQ";
import Header from "../../components/ui/Header/header";
import { renderFaq } from "./Subcomponents/RenderFaq";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao"; // Make sure this import is correct.
import Footer from "@/components/ui/Footer/footer";

export default function Faq() {
  return (
    <div>
      <MenuNavegacao />
      <Header texto="Perguntas Frequentes" />
      <section className="faq--caixa__perguntas">
        <FetchFaq render={renderFaq} />
      </section>
      <Footer />
    </div>
  );
}
