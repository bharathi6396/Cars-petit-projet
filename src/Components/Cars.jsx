import React from 'react' 
// const Car = (props) => {
//     console.log(props);
const Car = ({children,color}) => {
    //     console.log(props);
    const colour = color ? (<p>Couleur:{color}</p>) : (<p>Couleur: Yellow</p>);
   
    if (children){
        return (
            <div className = "voitures" style={{backgroundColor:'pink', width:'400px', padding:'30px', margin:'10px auto'}}>
                <p>Marque:{children}</p>
                {/* <p>Marque:{props.children}</p> */}
               {colour}
            </div>
        )
    }else{
    return (
        <div className = "voitures" style={{backgroundColor:'pink', width:'400px', padding:'30px', margin:'10px auto'}}>
    <p>Pas de data!</p>
    </div>)
    }
}

export default Car
