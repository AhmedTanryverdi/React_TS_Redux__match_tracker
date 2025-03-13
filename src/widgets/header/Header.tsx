import React from "react";
import updateIcon from "../../shared/assets/icons/Refresh.png";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/redux/store";
import { Error } from "../../shared/components/error/Error";
import { getMatches } from "../../entities/model/slices/matchSlice";

export const Header: React.FC = (): React.JSX.Element => {
	const status = useSelector<RootState, string>(
		(state) => state.matches.status
	);

	const dispatch = useAppDispatch();

	const update = ()=>{
		dispatch(getMatches("http://localhost:8000/matches"));
	}

	return (
		<div className={style.header}>
			<div className={style.container}>
				<div className={style.content}>
					<h1 className={style.title}>Match Tracker</h1>

					<div className={style.update}>
						{status === "rejected" && <Error />}
						<button type="button" data-status={status} className={style.update_btn} onClick={update}>
							Обновить
							{status === "pending" && <img src={updateIcon} alt="update icon" />}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
