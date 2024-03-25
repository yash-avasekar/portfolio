import Lottie from "react-lottie";
import loading from "../Assests/Loading.json";

const Loading = () => {
  const defaultOptions = {
    autopplay: true,
    loop: true,
    animationData: loading,
  };

  return (
    <div className="loading">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Loading;
