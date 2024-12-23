import { FieldProps } from "formik";
import { FC } from "react";
import Select from "react-select";
interface IAntSelect extends FieldProps<any, any> {
  options: any[];
  isClearable?: boolean;
  isMulti?: boolean;
  isDisabled?: boolean;
  isSearchable?: boolean;
  label?: string;
  onChange?: typeof  Function;
  placeholder?: string;
  errorMessage?: string | any;
  rootClassName?: string;
  className?: string;
}

export const ReactSelect: FC<IAntSelect> = (props: IAntSelect) => {
  const {
    options,
    isMulti = false,
    label,
    field: { name, value },
    placeholder = "",
    errorMessage,
    rootClassName,
    onChange = () => {},
    form: { setFieldValue, setFieldTouched, errors, touched },
  } = props;
  return (
    <div className={rootClassName + " field-container"}>
      {label && <p className="input__label">{label}</p>}
      <Select
        className={`
          field-select
          w-full 
          font-medium 
          [&_.ant-select-selector]:!rounded-[4px]
          [&_.ant-select-selector]:!border-[#E9E9E9]
          [&_.ant-select-selector]:!pl-[16px]
          [&_.ant-select-selection-placeholder]:font-normal
          [&_.ant-select-selection-placeholder]:text-[15px]
          [&_.ant-select-selection-placeholder]:leading-[20px]
          [&_.ant-select-selection-placeholder]:text-[#888888]
          `}
        key={name}
        // size="large"
        // disabled={isDisabled}
        {...(isMulti ? { mode: "multiple" } : "")}
        // status={touched[name] && errors[name] ? "error" : ""}
        value={value}
        // allowClear={isClearable}
        // showSearch={isSearchable}
        // filterOption={(input, option) =>
        //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        // }
        onBlur={() => {
          if (!value) {
            setFieldTouched(name, true);
          }
        }}
        placeholder={placeholder}
        onChange={(value) => {
          setFieldValue(name, value);
          onChange(value, value);
        }}
        options={options}
      />
      {touched[name] && errors[name] && (
        <small className="text-xs font-semibold text-red-500">
          {errorMessage ? errorMessage : errors[name]}
        </small>
      )}
    </div>
  );
};
