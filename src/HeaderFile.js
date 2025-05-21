import { useState ,TextInput, StyleSheet} from "react";

function HeaderFile() {
    const [message, setMessage] = useState('Click a button');
    const [username, setUsername] = useState('');
    return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* First Block */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            height: '5%',
            background: '#634C9F',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
          }}
        >
          <div>
            <h2
              style={{
                fontSize: '15px',
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
                lineHeight: '28px',
                letterSpacing: '1px',
                fontFamily: 'Arial',
              }}
            >
              we delivery to you every day from 
            </h2>
            <h2
              style={{
                fontSize: '15px',
                color: '#EA580C',
                fontWeight: 'bold',
                textAlign: 'center',
                lineHeight: '28px',
                letterSpacing: '1px',
                fontFamily: 'Arial',
              }}
            >
             7.00 to 23:00
            </h2>
          </div>
  
          <div style={{ color: '#fff', alignSelf: 'center' }}>
            <h2
              style={{
                fontSize: '15px',
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
                letterSpacing: '1px',
                lineHeight: '28px',
              }}
            >
              Until the end of the sale : 63 days 09 hours 50 minutes 50 sec
            </h2>
          </div>
        </div>
  
        {/* Second Block */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            height: '5%',
            background: '#fff',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}
        >
          <div style={{   display: 'flex',
    flexDirection: 'colum   ',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    flexWrap: 'wrap',}}>
            <h2
              style={{
                fontSize: '13px',
                color: '#6B7280',
                fontWeight: 'bold',
                textAlign: 'center',
                lineHeight: '28px',
                letterSpacing: '1px',
                fontFamily: 'Arial',
               
              }}
            >
              About Us My account Wishist
            </h2>
            <h2
              style={{
                fontSize: '12px',
                color: '#6B7280',
                fontWeight: 'bold',
                textAlign: 'center',
                lineHeight: '28px',
                letterSpacing: '1px',
                fontFamily: 'Arial',
              }}
            >
              we delivery to every day from
            </h2>
            <h2
              style={{
                fontSize: '12px',
                color: '#EA580C',
                fontWeight: 'bold',
                textAlign: 'center',
                lineHeight: '28px',
                letterSpacing: '1px',
                fontFamily: 'Arial',
              }}
            >
             7:00 to 23:00
            </h2>
          </div>
  
          <div style={{ display: 'flex',
    flexDirection: 'colum   ',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    flexWrap: 'wrap'}}>
          <select style={{ flex: 1, padding: 5 }}>
    <option value="">English</option>
    <option value="john_doe">Telugu</option>
    <option value="michael_smith">Hindi</option>
  </select>
  <select style={{ flex: 1, padding: 5, }}>
    <option value="">USD</option>
    <option value="john_doe">NTR</option>
    <option value="michael_smith">NTR</option>
  </select>

  <h2
              style={{
                fontSize: '12px',
                color: '#6B7280',
                fontWeight: 'bold',
               
                lineHeight: '28px',
                letterSpacing: '1px',
                fontFamily: 'Arial',
              }}
            >
             Order tracking
            </h2>
          </div>
        </div>

    <div style={{height:'1px',background:'#E5E7EB',width:'100%'}}></div>

    <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px'}} >


    <div style={{ position: 'relative',
      width: '836px',
      height: '46px',alignItems:'center',alignSelf:'center',marginTop:'10px'}} > 

    <input
          type="text"
          placeholder="Enter father's name"
          style={{   width: '100%',
          height: '100%',
          padding: '10px 40px 10px 10px', 
          background: '#F3F4F6',
          border: '1px solid #ccc',
          borderRadius: '5px',
          fontSize: '16px',
          boxSizing: 'border-box',}}
        />

    </div>
    </div>

    <div style={{height:'1px',background:'#E5E7EB',width:'100%',marginTop:'10px'}}></div>


    <div style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>

<div style={{flexDirection:'row',display:'flex',gap:'12px'}}>
    <select style={{ flex: 1, height:'30px',alignItems:'center',alignSelf:'center', }}>
    <option value="">Home</option>
    <option value="john_doe">Telugu</option>
    <option value="michael_smith">Hindi</option>
  </select>
  <select style={{ flex: 1, height:'30px',alignItems:'center',alignSelf:'center' }}>
    <option value="">Shop</option>
    <option value="john_doe">Telugu</option>
    <option value="michael_smith">Hindi</option>
  </select>
  <h2 style={{ fontSize: '14px',color: '#000',fontWeight: 'bold',lineHeight: '28px',letterSpacing: '1px', fontFamily: 'Arial', }}>Fruits & Vegetables</h2>

  <h2 style={{fontSize: '14px',color: '#000',fontWeight: 'bold',lineHeight: '28px',letterSpacing: '1px', fontFamily: 'Arial',}}>Beverages</h2>

  <h2 style={{fontSize: '14px',color: '#000',fontWeight: 'bold',lineHeight: '28px',letterSpacing: '1px', fontFamily: 'Arial',}}>Blog</h2>
  <h2 style={{fontSize: '14px',color: '#000',fontWeight: 'bold',lineHeight: '28px',letterSpacing: '1px', fontFamily: 'Arial',}}>Contact</h2>
</div>

<div style={{flexDirection:'row',display:'flex',gap:'10px'}}>
    <select style={{ flex: 1, height:'30px',alignItems:'center',alignSelf:'center', }}>
    <option value="">English</option>
    <option value="john_doe">Telugu</option>
    <option value="michael_smith">Hindi</option>
  </select>
  <h2 style={{fontSize: '14px',color: '#DC2626',fontWeight: 'bold',lineHeight: '28px',letterSpacing: '1px', fontFamily: 'Arial',}}>Fruits & Vegetables</h2>

  <select style={{ flex: 1, height:'18px',alignItems:'center',alignSelf:'center',background:'#DC2626', borderRadius:'10px'}}>
    <option value="">English</option>
    <option value="john_doe">Telugu</option>
    <option value="michael_smith">Hindi</option>
  </select>


</div>

    </div>

    <div style={{height:'1px',background:'#E5E7EB',width:'100%',marginTop:'5px',display:'flex',flexWrap: 'wrap',}}></div>

    <div style={{
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
}}>
 
  <div style={{
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <h2 style={{
      fontSize: '14px',
      color: '#000',
      fontWeight: 'bold',
      lineHeight: '28px',
      letterSpacing: '1px',
      fontFamily: 'Arial'
    }}>Home</h2>

<h2 style={{
      fontSize: '14px',
      color: '#000',
      fontWeight: 'bold',
      lineHeight: '28px',
      letterSpacing: '1px',
      fontFamily: 'Arial'
    }}>Town</h2>
  </div>

</div>

<div style={{height:'1px',background:'#E5E7EB',width:'100%',marginTop:'5px',display:'flex',flexWrap: 'wrap',}}></div>

<div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      {/* Divider Line */}
      <div style={{
        height: '1px',
        background: '#E5E7EB',
        width: '100%',
        marginTop: '5px',
        display: 'flex',
        flexWrap: 'wrap'
      }}></div>

      {/* Buttons Side by Side */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button onClick={() => setMessage('Button 1 clicked')}>Button 1</button>
        <button onClick={() => setMessage('Button 2 clicked')}>Button 2</button>
        <button disabled>Disabled</button>

      </div>

      {/* Text Message */}
      <p style={{ marginTop: '20px' }}>{message}</p>

      {/* Username Input */}
      <label style={{ display: 'block', marginTop: '20px' }}>Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
    </div>

      </div>
    );
  }
  
  export default HeaderFile;
  