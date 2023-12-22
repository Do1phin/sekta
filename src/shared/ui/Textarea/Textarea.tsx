import cx from 'classnames';
import React, { ChangeEvent, FC, FocusEvent } from 'react';

import css from './Textarea.module.scss';

interface ITextareaProps {
  cols?: number;
  disabled?: boolean;
  label?: string;
  maxLength?: number;
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  resize?: 'vertical' | 'horizontal' | 'none';
  rows?: number;
  title?: string;
  value?: string;
}

const Textarea: FC<ITextareaProps> = (props) => {
  const {
    disabled,
    label,
    onChange,
    onBlur,
    placeholder,
    resize,
    maxLength = 500,
    title,
    rows,
    cols,
    value,
  } = props;

  const text = value;

  return (
    <div className={css['textarea-wrapper']}>
      <label htmlFor='textarea' className={css.label}>
        {label}
      </label>
      <textarea
        className={cx(css.field, {
          [css[`${resize}-resize`]]: resize,
        })}
        disabled={disabled || false}
        name='textarea'
        id='textarea'
        cols={cols}
        rows={rows}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}>
        {text}
      </textarea>
      <div className={css.helper}>
        <span className={css.title}>{title}</span>
        <span className={css.counter}>{`${value?.length}/${maxLength}`}</span>
      </div>
    </div>
  );
};

export { Textarea };
