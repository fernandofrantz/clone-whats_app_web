import { ChatImage, ChatInfos, StyledChat } from "./styles"

export const Chat = () => {
    return (
        <StyledChat>
            <ChatImage>
                <div></div>
            </ChatImage>
            <ChatInfos>
                <div className="text">
                    <p>
                        Nome
                    </p>
                    <p>
                        mensagem
                    </p>
                </div>
                <div className="nums">
                    <span>
                        horario
                    </span>
                    <span>
                        pinned
                    </span>
                </div>
            </ChatInfos>
        </StyledChat>
    )
}