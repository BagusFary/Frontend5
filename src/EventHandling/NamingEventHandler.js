// Kita juga bisa merename / menamai even handler
function Button({ onSmash, children }) {
    return (
      <button onClick={onSmash}>
        {children}
      </button>
    );
  }
  
  export default function Test() {
    return (
      <div>
        <Button onSmash={() => alert('Playing!')}>
          Play Movie
        </Button>
        <Button onSmash={() => alert('Uploading!')}>
          Upload Image
        </Button>
      </div>
    );
  }
  