import { Chat } from "../Chat"
import { Header } from "../header"
import { SearchChat } from "../SearchChat"
import { StyledLeftBar } from "./styles"

export const LeftBar = () => {
    return (
        <>
            <StyledLeftBar>
                <header>
                    <Header />
                </header>
                <div>
                    <SearchChat />
                </div>
                <section>
                    <Chat />
                    <Chat />
                    <Chat />
                    <Chat />
                    <Chat />
                </section>
            </StyledLeftBar>
        </>
    )
}