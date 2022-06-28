import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
   uri: import.meta.env.VITE_API_ACCESS_URL,
   headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
   },
   cache: new InMemoryCache() // [A]
})


/** ANOTATIONS:
 * [A] -> O cache é armazenado na memória da aplicação. Outras alternativas de cache, como o localstorage. 
 * 
 * [B] -> 
 */