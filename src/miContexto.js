import { createContext, useState } from "react";

//const contexto = createContext(/* valor inicial no mutable del contexto */)
export const contexto = createContext(/* { carrito: [] } */)

export const Provider = contexto.Provider