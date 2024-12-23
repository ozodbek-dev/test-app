import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { TCustomRadioGroupProps } from '../input.types';
import useInputRef from '../hooks/useInputRef';
import useHooks from 'shared/hooks/useHooks';
import cn from 'shared/lib/tailwind-cls.helper';

const RadioGroup = ({
  field: { value, name },
  label,
		form: { setFieldValue, touched, errors },
		size = "large",
		className = "",
		rootClassName = "",
  isDisabled = false,
    defaultValue,
    radios,
		onChange = () => {},
}: TCustomRadioGroupProps) => {
  const {get} = useHooks()
  const RadioRef= useInputRef<any>({errors,touched,name})

  return (
    <div className={cn('flex flex-col gap-4 text-[15px]', className)}>
      <label>{label}</label>
        <Radio.Group  defaultValue={defaultValue} ref={RadioRef} size={size} rootClassName={rootClassName} onChange={onChange} value={value}>
      {
        radios.map((radio, idx:number) => (
          <Radio
            key={idx}
            value={radio.value}
            disabled={isDisabled}
            onChange={(e: RadioChangeEvent) => {
              setFieldValue(name, e.target.value);
            }}
          >
            {radio.label}
          </Radio>
        ))
      }
      </Radio.Group>
      <p>
				{get(errors, name) && get(touched, name) ? <small className='text-red-500'>{(get(errors, name) ?? "Error").toString()}</small> : null}
			</p>
  </div>
  );
};

export default RadioGroup;