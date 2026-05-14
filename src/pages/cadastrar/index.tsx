import Footer from "../components/Footer/footer";
import Header from "../components/header/header";
import ListaCatalogo from "../components/lista-catalogo/lista-catalogo";

const Cadastrar = () => {
        return(
            <>
            <Header></Header>
                <main className="principal">
                    <form action="" className="formulario">
                        <h1>Cadastrar novo jogo</h1>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" />

                            <label htmlFor=""></label>
                            <input type="text" />

                            <label htmlFor=""></label>
                            <select name="" id=""></select>

                            <label htmlFor=""></label>
                            <select name="" id=""></select>

                            <label htmlFor=""></label>
                            <select name="" id=""></select>

                            <label htmlFor=""></label>
                            <input type="text" />

                            <textarea name="" id=""></textarea>
                        </div>
                        <button type="submit">Cadastrar</button>
                    </form>
                    <ListaCatalogo></ListaCatalogo>
                </main>
                <Footer></Footer>
            </>
        )
};
export default Cadastrar;