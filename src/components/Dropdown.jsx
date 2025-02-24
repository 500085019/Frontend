import React from 'react';

const DropdownForm = ({ createType,letterHead, hearingType, disputeType, StatementofClaimant, fieldNames, onDropdownchange }) => {
  // const onDropdownchange = (e, type) => {
  //   console.log(`${type} selected:`, e.target.value);
  // };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "24px",
        backgroundColor: "#f9fafb",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>createType</label>
          <select
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "16px",
              color: "#1f2937",
              backgroundColor: "#ffffff",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              outline: "none",
              cursor: "pointer",
            }}
            onChange={(e) => onDropdownchange(e, "createType")}
            name={fieldNames[0]}
          >
            {Array .isArray(createType) &&
            createType.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>Choose letterhead</label>
          <select
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "16px",
              color: "#1f2937",
              backgroundColor: "#ffffff",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              outline: "none",
              cursor: "pointer",
            }}
            onChange={(e) => onDropdownchange(e, "letterHead")}
            name={fieldNames[1]}
          >
            {Array .isArray(letterHead) &&
            letterHead.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>hearingType</label>
          <select
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "16px",
              color: "#1f2937",
              backgroundColor: "#ffffff",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              outline: "none",
              cursor: "pointer",
            }}
            onChange={(e) => onDropdownchange(e, "hearingType")}
            name={fieldNames[2]}
          >
            {Array .isArray(hearingType) &&
            hearingType.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

    
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>Type of Dispute</label>
          <select
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "16px",
              color: "#1f2937",
              backgroundColor: "#ffffff",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              outline: "none",
              cursor: "pointer",
            }}
            onChange={(e) => onDropdownchange(e, "disputeType")}
            name={fieldNames[3]}
          >
            {Array .isArray(disputeType) &&
            disputeType.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

    
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>Statement of Claimant</label>
          <select
            style={{
              width: "100%",
              padding: "10px 12px",
              fontSize: "16px",
              color: "#1f2937",
              backgroundColor: "#ffffff",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              outline: "none",
              cursor: "pointer",
            }}
            onChange={(e) => onDropdownchange(e, "StatementofClaimant")}
            name={fieldNames[4]}
          >{Array .isArray(StatementofClaimant)&&
            StatementofClaimant.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DropdownForm;
