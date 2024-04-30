
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { css } from './Calendar.styled';
export const Calendar = ({selected, setSelected}) => {



  let footer = <p>Выбкрите срок исполнения</p>;
  if (selected) {
    footer = <p>Вы выбрали {format(selected, 'PP', {locale: ru})}.</p>;
  }
  return (
    <>
    <style>{css}</style>
    <DayPicker
      locale= {ru}
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      modifiersClassNames={{
        selected: 'my-selected',
        today: 'my-today'
      }}
    />
    </>
  );
};
