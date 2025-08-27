import "./AvColors.scss";
import colors from "../../data/avColors";

export const AvColors = () => {
  return (
    <div className="avColors">
        <h1 className="ar">اكثر من 20 لون</h1>
        <h1>up to 20+ colors!</h1>
      <div className="colors-con">
        {colors.map((i) => {
          return (
            <div className="color">
              <div
                className="circle"
                style={{
                  "--img": `url(${i.img})`,
                  "--color": i.colorCode,
                }}
              ></div>
              <h5>{i.colorName}</h5>
            </div>
          );
        })}
      </div>
        <h5 className="ctaH5">View All Colors <i className="fa-solid fa-arrow-right"></i></h5>
    </div>
  );
};

export default AvColors;
