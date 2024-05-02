import { Link } from "react-router-dom"
import * as S from "./PopExit.styled";
import { constRoutes } from "../../../paths";
import { useUserContext } from "../../../contexts/hooks/useUsers";

export function PopExit() {
const {userLogout} = useUserContext()
    return (
       <S.PopExit>
		<S.PopExitContainer>
			<S.ExitBlock>
					<S.ExitTtl>
					Выйти из аккаунта?
					</S.ExitTtl>
						<S.ExitForm>
						<S.ExitFormGroup>
								<S.ExitButtonYes onClick={userLogout}><Link to={constRoutes.LOGIN}><S.ExitButtonYesLink>Да, выйти</S.ExitButtonYesLink></Link></S.ExitButtonYes>
								<S.ExitButtonNo><Link to ={constRoutes.HOME}><S.ExitButtonNoLink>Нет, остаться</S.ExitButtonNoLink></Link></S.ExitButtonNo>
							</S.ExitFormGroup>
						</S.ExitForm>
			</S.ExitBlock>
		</S.PopExitContainer>
  </S.PopExit>
    )
}
