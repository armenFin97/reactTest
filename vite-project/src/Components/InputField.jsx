export function InputField({ label, type = "text", name, value, onChange, placeholder, autoComplete }) {
    return (
        <div className="input__wrapper">
            <label htmlFor={name} className="label">
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                autoComplete={autoComplete || 'off'}
                className="input"
            />
        </div>
    );
}