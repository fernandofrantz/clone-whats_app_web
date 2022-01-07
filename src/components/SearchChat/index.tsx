import { StyledSearchChat } from "./styles"
import { AiOutlineSearch } from 'react-icons/ai'

export const SearchChat = () => {
    return (
        <>
            <StyledSearchChat>
                <div>
                    <div>
                        <AiOutlineSearch />
                    </div>
                    <input type="text" placeholder="Pesquisar ou começar uma nova conversa"/>
                    
                </div>
            </StyledSearchChat>
        </>
    )
}