
import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

type HeaderProps = {
    onOpenNewTransactionModal: () => void
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />

                <button type="button" onClick={onOpenNewTransactionModal}>
                    New transaction
                </button>
            </Content>
        </Container>
    )
}