function InputComponent({value, onChange}) {
    return <input
        type='text'
        placeholder='Text'
        value={value}
        onChange={(event) => onChange(event.target.value)}/>;
}
export default InputComponent;