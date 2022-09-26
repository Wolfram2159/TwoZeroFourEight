import classNames from "classnames";

type Props = {
	board: (number | null)[][]
};

function Board(props: Props) {

	const {
		board,
	} = props;

	return (
		<div className="board">
			{
				board.map(boardRow =>
					boardRow.map((item, index) =>
						<div
							key={ index }
							className={
								classNames(
									"board__item",
									{ "board__item--empty": item == null },
								)
							}
						>
							{ item }
						</div>,
					),
				)
			}
		</div>
	);
}

export default (Board);
