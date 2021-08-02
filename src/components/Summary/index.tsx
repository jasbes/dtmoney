import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsConetxt';

import { Container } from "./styles"


export const Summary = () => {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'income') {
            acc.income += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.outcome += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        income: 0,
        outcome: 0,
        total: 0
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="Incomes" />
                </header>
                <strong className="highlight-income">
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(summary.income)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Outcomes</p>
                    <img src={outcomeImg} alt="Outcomes" />
                </header>
                <strong className="highlight-outcome">
                    -{new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(summary.outcome)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}