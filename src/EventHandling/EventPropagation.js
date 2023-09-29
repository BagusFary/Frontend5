// Disaat Popup diclose makan pop up kedua akan muncul
export default function EventPropagation() {
    return (
      <div className="Toolbar" onClick={() => {
        alert('You clicked on the toolbar!');
      }}>
        <button onClick={() => alert('Playing!')}>
          Play Movie
        </button>
        <button onClick={() => alert('Uploading!')}>
          Upload Image
        </button>
      </div>
    );
  }