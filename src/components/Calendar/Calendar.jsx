import React from 'react';

import { format } from 'date-fns';
import ru from "date-fns/locale/ru"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export const Calendar = ({selected, setSelected}) => {


  let footer = <p>Выбкрите срок исполнения</p>;
  if (selected) {
    footer = <p>Вы выбрали {format(selected, 'PP', {locale: ru})}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
};
