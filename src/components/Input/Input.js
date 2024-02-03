// import React, {useState, useEffect, useRef} from "react";
// export default function Input(props) {
//   const {validator} = props;
//   const inputRef = useRef();
//   const [focused, setFocused] = useState(false);
//   const [validInput, setValidInput] = useState(false);
//   useEffect(()=>{
//     setValidInput(validator('name'));
//   },[])
//     return (
//         <div className={'form-article '}>
//             <div className={`form-field ${!focused && props.errorMessage && 'uncorrect-field'}`}>
//               <input
//                 className='form-input-field'
//                 placeholder = {props.placeholder}
//                 type={props.type}
//                 id={props.id}
//                 name={props.name}
//                 onChange={props.onChange}
//                 onFocus={() => setFocused(true)}
//                 onBlur={() => setFocused(false)}
//                 ref = {inputRef}
//               />
//               <label className='form-label' htmlFor='email'>
// 								{props.label}
//               </label>
//               <p style={{display: props.errorMessage ? 'none' : 'block' }} className='form-password-description'>{props.description}</p>
//             </div>
//             <p className='field-error'>
//               <img src='/img/svg/Error.svg' alt="This field cam't be empty" />
//               <span>{props.errorMessage}</span>
//             </p>
//           </div>
//     );
// } 
