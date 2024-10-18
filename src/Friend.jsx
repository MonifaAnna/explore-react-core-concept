
export default function Friend({friend}){
   const {name,email,id} = friend;
    console.log(friend);
    
return (
    <div className="box"> 
        <h2>Name: {name}</h2>
        <p>Email: {email}</p>
        <p>Id: {id}</p>
    </div>
)
}