import React, { useContext, createContext, useState } from 'react';

export const UserContext = createContext(JSON.parse(localStorage.getItem("user")));

export function useUserContext() {
 const user = useContext(UserContext);

 if (!user) {
    throw new Error("Данные пользовател не были найдены");
 }

 return user;
}