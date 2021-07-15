const Food = ({title,calorie})=>{
    return(
        <div className="card">
                     <h1>{title}</h1>
                     <h2>you have consumed {calorie} cals today</h2>
                </div>

    );
};
 

const Calorie = () =>{
    return(
        <div className="heading">
            <h1>Calorie Read Only</h1>
            <div className="container">
                <Food title="Coke" calorie="500"/>
                <Food title="Burger" calorie="80"/>
                <Food title="Pizza" calorie="60"/>
                <Food title="Browne" calorie="50"/>
                <Food title="PaniPuri" calorie="30"/>
                <Food title="Fried Rice" calorie="150"/>
                <Food title="Lassania" calorie="90"/>

            </div>    
        </div>

    );
};

export default Calorie