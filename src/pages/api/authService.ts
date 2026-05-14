import {api} from "./api"
import secureLocalStorage from "react-secure-storage";


export async function login(email: string, senha: string) {
    try{
        //requisicao:
        const response = await api.post("Autenticacao/login", {email, senha});

        console.log("deu");
        const token = response.data.token;
        console.log(token);

        // localStorage.setItem("token", token);
        secureLocalStorage.setItem("token", token);
    }
    catch(error: any) {
        throw new Error("Email ou senha invalidos")
    }
}