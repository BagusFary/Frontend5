
// Menampilkan popup jika diklik namun data yang dibaca menggunakan props
function AlertButton({ message, children }) {
    return (
      <button onClick={() => alert(message)}>
        {children}
      </button>
    );
  }
  
  export default function Toolbar() {
    return (
      <div>
        <AlertButton message="Playing!">
          Play Movie
        </AlertButton>
        <AlertButton message="Uploading!">
          Upload Image
        </AlertButton>
      </div>
    );
  }
  