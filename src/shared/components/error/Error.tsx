import React from 'react';
import error from '../../assets/icons/alert-triangle.png';
import style from './style.module.scss';

export const Error: React.FC = (): React.JSX.Element => {
  return (
		<div className={style.error}>
			<img src={error} alt="error icon" />
			<span>Ошибка: не удалось загрузить информацию</span>
		</div>
  );
}
