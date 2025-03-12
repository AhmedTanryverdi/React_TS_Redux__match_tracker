import React from "react";
import updateIcon from "../../shared/assets/icons/Refresh.png";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../app/redux/store";
import { Error } from "../../shared/components/error/Error";

export const Header: React.FC = (): React.JSX.Element => {
	const status = useSelector<RootState, string>(
		(state) => state.trackers.status
	);

	console.log("[status]: ", status);
	return (
		<div className={style.header}>
			<div className={style.container}>
				<div className={style.content}>
					<h1 className={style.title}>Match Tracker</h1>

					<div className={style.update}>
						{status === "rejected" && <Error />}
						<button type="button" className={style.update_btn}>
							Обновить
							<img src={updateIcon} alt="update icon" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
