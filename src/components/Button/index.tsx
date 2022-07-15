import React from "react";
import { IButton } from "interfaces/button.interface";
import * as S from "./styles";

const Button = ({children}: IButton) => {
    return <S.Botao>{children}</S.Botao>;
};

export default Button;