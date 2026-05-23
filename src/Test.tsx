import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Test() {
  const notify = () => toast("Hello");

  return (
    <>
      <button onClick={notify}>Show</button>
      <ToastContainer />
    </>
  );
}

export default Test