export function InputField({ label, type = "text", name, value, onChange, placeholder }) {
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
                className="input"
            />
        </div>
    );
}