import React from 'react';
import style from './style.module.scss';

export const About: React.FC<{
	points: number;
	place: number;
	total_kills: number;
}> = ({points, place, total_kills}): React.JSX.Element => {
	return (
		<div className={style.about}>
			<div className={style.aboutBlock}>
				<span>Points</span>
				<span> +{points}</span>
			</div>
			<div className={style.line}></div>
			<div className={style.aboutBlock}>
				<span>Место:</span>
				<span> {place}</span>
			</div>
			<div className={style.line}></div>
			<div className={style.aboutBlock}>
				<span>Всего убийств:</span>
				<span> {total_kills}</span>
			</div>
		</div>
	);
};
