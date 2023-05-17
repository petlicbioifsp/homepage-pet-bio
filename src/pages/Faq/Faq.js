import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import Collapsible from 'react-collapsible'
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import "./Faq.css"


export default function Faq() {
    return (

        <body>
            <MenuNavegacao></MenuNavegacao>

            <h2 className="faq-titulo">Perguntas frequentes</h2>
            <section className="faq--caixa__perguntas">

                <Collapsible trigger={<AiFillCaretDown />} triggerWhenOpen={<AiFillCaretUp />} transitionTime='100' className="faq-pergunta">
                    <p className="faq-resposta">
                        Behold the sweetfish river running through my beloved hometown.
                    </p>
                </Collapsible>
                <Collapsible trigger={<AiFillCaretDown />} triggerWhenOpen={<AiFillCaretUp />} transitionTime='100' className="faq-pergunta">
                    <p className="faq-resposta">
                        On the first twilight, offer the six chosen by the key as sacrifices.
                        On the second twilight, those who remain shall tear apart the two who are close.
                        On the third twilight, those who remain shall praise my noble name.
                        On the fourth twilight, gouge the head and kill.
                        On the fifth twilight, gouge the chest and kill.
                    </p>
                </Collapsible>
                <Collapsible trigger={<AiFillCaretDown />} triggerWhenOpen={<AiFillCaretUp />} transitionTime='100' className="faq-pergunta">
                    <p className="faq-resposta">
                        On the sixth twilight, gouge the stomach and kill.
                        On the seventh twilight, gouge the knee and kill.
                        On the eighth twilight, gouge the leg and kill.
                        On the ninth twilight, the witch shall revive, and none shall be left alive.
                        On the tenth twilight, at journey's end, you shall attain to the power of the Golden Land's treasures, once and for the last time.
                    </p>
                </Collapsible>

                <Collapsible trigger={<AiFillCaretDown />} triggerWhenOpen={<AiFillCaretUp />}  transitionTime='100' className="faq-pergunta">
                    <p className="faq-resposta">
                        Sleep peacefully, my beloved witch, Beatrice.
                    </p>
                </Collapsible>


            </section>


        </body>
    )
}