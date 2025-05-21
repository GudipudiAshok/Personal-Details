import React, { Component } from 'react';

class SampleClass extends Component {
  renderRow(permanentLabel, communicationLabel) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
      }}>
        {/* Permanent Address Field */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '48%' }}>
          <label style={styles.label}>{permanentLabel}</label>
          <input type="text" style={styles.input} />
        </div>

        {/* Communication Address Field */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '48%' }}>
          <label style={styles.label}>{communicationLabel}</label>
          <input type="text" style={styles.input} />
        </div>
      </div>
    );
  }

  render() {
    const labels = [
      "Door No./ Plot No.",
      "Street / Colony",
      "Landmark",
      "Area",
      "Pin code",
      "State",
      "District",
      "Mondal"
    ];

    return (
      <div style={styles.container}>
        {/* Header Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 25 }}>
          <h3>Permanent Address</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" />
            <label style={{ color: '#374151' }}>Same as Permanent Address</label>
          </div>
          <h3>Communication Address</h3>
        </div>

        {/* Address Field Rows */}
        {labels.map((label, index) => (
          this.renderRow(label, label)
        ))}
      </div>
    );
  }
}

const styles = {
  container: {
    padding: 30,
    margin: 40,
    borderRadius: 10,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    fontFamily: 'sans-serif',
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: '#4B5563',
    fontWeight: 500
  },
  input: {
    height: 36,
    borderRadius: 5,
    border: '1px solid #D1D5DB',
    paddingLeft: 10,
    fontSize: 14
  }
};

export default SampleClass;
