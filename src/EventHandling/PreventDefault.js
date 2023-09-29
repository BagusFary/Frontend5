//untuk mencegah adanya render ulang pada event submit
export default function Signup() {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert('Submitting!');
      }}>
        <input />
        <button>Send</button>
      </form>
    );
  }