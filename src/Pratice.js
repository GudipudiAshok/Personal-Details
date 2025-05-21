import { useState } from "react";

function Pratice() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [dob, setDob] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
            
        margin: '0 auto',
        padding: 20,
        border: '1px solid black',
        gap: 20,
     borderRadius:10
      }}
    >

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <label style={{ width: 150 }}>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ flex: 1, padding: 5 }}
        />
      </div>


      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <label style={{ width: 150 }}>Surname:</label>
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Enter your surname"
          style={{ flex: 1, padding: 5 }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <label style={{ width: 150 }}>Father's Name:</label>
        <input
          type="text"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
          placeholder="Enter father's name"
          style={{ flex: 1, padding: 5 }}
        />
      </div>

    <div style={{display:'flex',alignItems:'center',gap:10}}>

        <label style={{width:150,}}>Date of birth :</label>
        <input
          type="date"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
          placeholder="Enter father's name"
          style={{ flex: 1, padding: 5 }}
        />
    </div>
    </div>
  );
}

export default Pratice;
