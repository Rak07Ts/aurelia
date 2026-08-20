import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'date' | 'textarea' | 'select';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  error?: string;
  helperText?: string;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  options = [],
  error,
  helperText,
  className = '',
}) => {
  const baseInputStyles =
    "w-full px-4 py-3 rounded-[2px] border bg-surface-primary text-text-primary text-body-m placeholder:text-text-muted/60 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors duration-200";
  const borderStyle = error ? "border-red-500" : "border-border-default";

  return (
    <div className={`space-y-1.5 ${className}`}>
      <label htmlFor={name} className="block text-label uppercase tracking-uppercase font-medium text-text-secondary">
        {label} {required && <span className="text-accent-secondary">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${baseInputStyles} ${borderStyle} resize-y`}
        />
      ) : type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseInputStyles} ${borderStyle} cursor-pointer`}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${baseInputStyles} ${borderStyle}`}
        />
      )}

      {error && <p className="text-caption text-red-500">{error}</p>}
      {helperText && !error && <p className="text-caption text-text-muted">{helperText}</p>}
    </div>
  );
};
