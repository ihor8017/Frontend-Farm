export default function RadioInput(props) {
   // console.log(props);
 return (
    <div className='radio-item'>
        <input
        className='radio-button'
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.role}
        onChange={props.onChange}
        defaultChecked={props.checked}
        />
        <label className='radio-ladel' htmlFor='buyer'>
            {props.label}
        </label>
     </div>
 );

}