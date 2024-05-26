import "./Loader.scss";

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    loading && (
      <div className="loader-overlay">
        <div className="loader">
          <div className="cube">
            <div className="side top"></div>
            <div className="side bottom"></div>
            <div className="side left"></div>
            <div className="side right"></div>
            <div className="side front"></div>
            <div className="side back"></div>
          </div>
        </div>
      </div>
    )
  );
};

export default Loader;
