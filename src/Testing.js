import { useEffect, useState,Text } from "react"

function Testing() {


    return (
           <div>
             <div style={{ width: '100%', border: '1px solid black', height: 500 }}>
             <p>good</p>
                </div>
                <div style={{display:'flex' , flexDirection:'row',gap:10,height:500,width:1000}}>
                    <p>Hi</p>
                    <div style={{width:'50%', border: '1px solid black', height: 500}}>
                    <p>Friends</p>
                    </div>
                    <div style={{width:'50%', border: '1px solid black', height: 500}}>
                        <p>Team</p>
                    </div>
                </div>
           </div>
    );
}


export default Testing;
