import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/redux/store";
import { Error } from "../../shared/components/error/Error";
import { getMatches } from "../../entities/model/slices/matchSlice";
import { url } from "../../shared/assets/constants/constants";
import updateIcon from "../../shared/assets/icons/Refresh.png";
import style from "./style.module.scss";

export const Header: React.FC = (): React.JSX.Element => {
	const status = useSelector<RootState, string>(
		(state) => state.matches.status
	);

	const dispatch = useAppDispatch();

	const update = ()=>{
		dispatch(getMatches(url));
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
