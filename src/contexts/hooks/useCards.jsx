import { useContext } from "react";

import { CardContext } from "../CardContext";

export function useCardContext() {
    
   return useContext(CardContext);

   }