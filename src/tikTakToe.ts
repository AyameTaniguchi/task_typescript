
interface info {
    history: object[],
    stepNumber: number,
    xIsNext: boolean
}

class Class {
    private calculate: Calculate = new Calculate();
    private state:info = {
        history: [
            {
                squares: Array(9).fill(null),
            }
        ],
        stepNumber: 0,
        xIsNext: true,
    }

    // typescriptではいらないかも
    // private square() {
    //     // 〇×をhtmlに返す
    //
    // }

    private board () {
        // 〇×結果をhtmlに返す

    }

    private game () {

        const handleClick = (i:number) => {
            const history:any = this.state.history.slice(0, this.state.stepNumber + 1);
            const current:any = history[history.length - 1];
            const squares:any = current.squares.slice();
            if (this.calculate.calculateWinner(squares) || squares[i]) {
                return;
            }
            squares[i] = this.state.xIsNext ? "X" : "O";
            this.state = {
                history: history.concat([
                    {
                        squares: squares
                    }
                ]),
                stepNumber: history.length,
                xIsNext: !this.state.xIsNext
            };
        }

        const jumpTo = (step:any) => {
            this.state.stepNumber = step,
            this.state.xIsNext = (step % 2) === 0
        }

        // クリックされたら関数呼ぶ



    }
}

export class Calculate {
    public calculateWinner (squares:string) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
}