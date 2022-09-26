import "src/index.scss";
import Board from "src/Board.component";

function App() {
	return (
		<div className="App">
			<Board
				board={
					[
						[ null, 0, 0, null ],
						[ 0, 0, 0, 0 ],
						[ 0, 0, 0, 0 ],
						[ 0, 0, 0, 0 ],
					]
				}
			/>
		</div>
	);
}

export default App;
