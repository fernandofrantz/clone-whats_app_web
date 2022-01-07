import { StyledHeader } from "./styles"
import { AiOutlineMore } from 'react-icons/ai'
import { BsFillChatLeftTextFill, BsCircle } from 'react-icons/bs'

export const Header = () => {
    return (
        <>
            <StyledHeader>
                <div className="image">
                    <div></div>
                </div>

                <section className="menus">
                    <BsCircle className="color"/>
                    <BsFillChatLeftTextFill />
                    <AiOutlineMore />
                </section>
            </StyledHeader>
        </>
    )
}