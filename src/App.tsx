import { ApolloProvider } from "@apollo/client"
import { client } from "./lib/apollo"
import { Router } from "./Router"
import { Event } from "./pages/Event"
import { BrowserRouter } from "react-router-dom"


function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App

/** NOTES
 * 
 * [A] -> TIPAGEM: Aqui estamos dizenodoque nosso GET_LESSONS_QUERY é do tipo Lesson (nossa própria interface que criamos), poi é exigência do typescript tipar nossos objetos. Por consequência, para não dar erro de 'undefined' na hora de percorrer nosso objeto, utilizamos o símbolo '?.', para tornar a procura pelo 'data' OPCIONAL e não obrigatório.
 */