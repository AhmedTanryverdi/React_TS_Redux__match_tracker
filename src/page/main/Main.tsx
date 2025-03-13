import React, { useEffect } from "react";
import { Header } from "../../widgets";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/redux/store";
import { getMatches } from "../../entities/model/slices/matchSlice";
import { Match } from "./ui/match/Match";
import { MatchType } from "../../shared/assets/types/types";
import style from "./style.module.scss";
import { url } from "../../shared/assets/constants/constants";

export const Main: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();

	const status = useSelector<RootState, string>(
		(state) => state.matches.status
	);

	const matches = useSelector<RootState, MatchType[]>(
		(state) => state.matches.matches
	);

	const errorCode = useSelector<RootState, number>(
		(state) => state.matches.errorCode
	);

	useEffect(() => {
		dispatch(getMatches(url));
	}, []);

	if (status === "pending") {
		return (
			<div className={style.pending}>
				<div className={style.container}>
					<Header />
					<h1 className={style.title}>Загрузка</h1>
				</div>
			</div>
		);
	} else if (status === "rejected") {
		console.log("[status]: ", status);
		return (
			<div className={style.rejected}>
				<div className={style.container}>
					<Header />
					<h1 className={style.title}>{errorCode}</h1>
					<p>Ошибка: не удалось загрузить информацию</p>
				</div>
			</div>
		);
	}

	return (
		<div className={style.main}>
			<div className={style.container}>
				<Header />
				<div className={style.matchList}>
					{matches?.map((match, index) => {
						return <Match key={index} {...match} />;
					})}
				</div>
			</div>
		</div>
	);
};
