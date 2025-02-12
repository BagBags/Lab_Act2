export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #DDD",
        height: "60px",
        width: "100%",
      }}
    >
      <img
        src="../src/assets/menu.png"
        style={{
          marginLeft: "20px",
          height: "25px",
          width: "auto",
          alignContent: "center",
        }}
      />
      <img
        src="../src/assets/google-docs.png"
        style={{
          marginLeft: "10px",
          height: "35px",
          width: "auto",
          alignContent: "center",
        }}
      />
      <p style={{ marginLeft: "10px", color: "#000000", fontSize: "22px" }}>
        Docs
      </p>

      {/* Search Container */}
      <div
        style={{
          marginLeft: "23%",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Search Icon */}
        <img
          src="../src/assets/loupe.png"
          style={{
            position: "absolute",
            left: "15px",
            width: "15px",
            height: "15px",
            pointerEvents: "none",
          }}
        />
        <input
          type="text"
          placeholder="Search"
          style={{
            backgroundColor: "#f0f4f9",
            paddingLeft: "45px",
            borderRadius: "30px",
            border: "1px solid #DDD",
            fontSize: "16px",
            height: "45px",
            width: "670px",
          }}
        />
        <img
          src="../src/assets/apps.png"
          style={{
            width: "15px",
            height: "15px",
            paddingLeft: "500px",
          }}
        />
        <img
          src="../src/assets/user.png"
          style={{
            width: "35px",
            height: "35px",
            marginLeft: "20px",
          }}
        />
      </div>
    </div>
  );
}
