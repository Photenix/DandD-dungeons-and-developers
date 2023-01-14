import '../styles/sass/Select.scss'

const Select = ({ array = [], name = 'default' }) => {

    const first = true

    return (
        <select name={ name } id={ name }>
            {
                array.map( e =>{
                    return (
                        <option value={ e } selected >
                            { e }</option>
                    )
                })
            }
        </select>
    );
};


const SelectLabel = ({ array = [], name = 'default' }) =>{
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    return(
        <div className="s-l">
            <label htmlFor={name}>{capitalized}</label>
            <Select array={array} name={name}/>
        </div>
    )
}


export default Select;
export { SelectLabel }