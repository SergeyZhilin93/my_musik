import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './style.css';

export function ProfileSettings() {
  const { register, handleSubmit } = useForm()
  const [arr, setArr] = useState([{name: "john", surName: 'wilson'}]);
  
  const result = arr.map((element, index) => {
     return <p key={index}>{element.name + " " + element.surName}</p>;
  });

  const onSubmit = (data) => {
    setArr([...arr, data])
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {result}
      <input { ...register("name")}/>
      <input {...register("surName")}/>
      <input value="Добавить элемент" type='submit'/>
    </form>
  ) 
}
// export function ProfileSettings() {
  
//   const [ value, setValue ] = useState('Profile')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     alert(`Вы выбрали страницу: ` + value)
//   }

//   const handleChange = (event) => {
//     return setValue(event.target.value)
//   }
  
//   return(
//     <>
//       <form className="profile-menu-form" onSubmit={handleSubmit}>
//         <label>User Name:</label>
//         <select value={value} onChange={handleChange}>
//           <option value="Profile">Profile</option>
//           <option value="Settings">Settings</option>
//           <option value="Notifications">Notifications</option>
//         </select>
//         <input type="submit" value="Submit"/>
//       </form>
//     </>
//   )
// }



// export class ProfileSettings extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: "Profile"
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value})
//   }

//   handleSubmit(event) {
//     alert(`Вы выбрали страницу: `+ this.state.value)
//     event.preventDefault()
//   }
//   render() {
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Имя пользователя
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="Profile">Profile</option>
//             <option value="Settings">Settings</option>
//             <option value="Notifications">Notifications</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit"/>
//       </form>
//     )
//   }
// }