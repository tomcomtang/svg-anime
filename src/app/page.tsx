export default function Home() {
  return (
    <main style={{ 
      minHeight: "100vh", 
      background: "#ffffff", 
      display: "flex", 
      alignItems: "flex-start", 
      justifyContent: "center",
      paddingTop: "50px"
    }}>
      <img 
        src="/dotted_world_map_with_lines.svg" 
        alt="Dotted World Map with Lines" 
        style={{ 
          width: "90%", 
          maxWidth: "1000px", 
          height: "auto", 
          display: "block" 
        }}
      />
    </main>
  );
}
