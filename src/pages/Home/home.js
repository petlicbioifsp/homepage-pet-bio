import "./home.css"
import Footer from "../../components/Footer/footer";
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";

export default function Home() {
    return (
        <body className="home">
            <MenuNavegacao></MenuNavegacao>
            <section className="home-header">
                <h1 className="home-titulo--principal">PET.</h1>
                <h2 className="home-titulo--secundario"><strong>P</strong>rograma <strong>E</strong>ducação <strong>T</strong>utorial</h2>
                <p className="home-texto">Lorem ipsum dolor sit amet. Qui eius exercitationem et mollitia autem qui iste ullam sed minima animi eum dolorumlaboriosam nam quisquam veritatis est dolor ratione. Sed saepe voluptas et exercitationem consequatur est fugit perspiciatis vel rerum cupiditate quo inventore laboriosam est beatae nisi qui cumque minima. Hic commodi facere sit cupiditate ullam est quod fugit ut ipsam</p>
            </section>
            <Footer></Footer>
        </body>
    )
}
