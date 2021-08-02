import Modal from 'react-modal';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('depositi');

    const handleCreateNewTransaction = (event: FormEvent) => {
        event.preventDefault();

        const data = {
            title,
            category,
            amount,
            type
        };

        api.post('transactions', data);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button className="react-modal-close" type="button" onClick={onRequestClose}>
                <img src={closeImg} alt="Close modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Add transaction</h2>

                <input
                    placeholder="Title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('income')}
                        isActive={type === 'income'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Income" />
                        <span>Income</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType('outcome')}
                        isActive={type === 'outcome'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Outcome" />
                        <span>Outcome</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Category"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">Add</button>
            </Container>
        </Modal>
    )
}