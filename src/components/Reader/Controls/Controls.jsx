import {ControlSection, ControlBtn} from './Controls.styled';

export const Controls = ({onChange, currentItem, total}) => {
    return <ControlSection>
    <ControlBtn type='button'
     onClick={() => onChange(-1)}
    disabled={currentItem === 1}>
      Назад
      </ControlBtn>
    <ControlBtn type='button' 
    onClick={() => onChange(+1)}
    disabled={currentItem === total}>
      Вперед
      </ControlBtn>
  </ControlSection>
}