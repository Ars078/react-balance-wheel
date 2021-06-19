import "./Header.css";
import search from "../img/search1.svg";
import vector from "../img/vector.svg";
import photo from "../img/profile_photo.png";
export const Header = ({closes}) => {
// console.log(props)
  const closess = closes ? "1342px":"1186px"
  // "1342px":"1186px"
  return (
    <header style={{ width: closess}}>
      <h1>Колесо баланса</h1>
      <div className="btn">
        <button className='btn1'>
          <img src={search} alt={"search"} />
        </button>
        <button>
          <img src={vector} alt={"vector"} />
        </button>
        <h2 className="h2">Ксюша Донская</h2>
        <button className='photo'>
          <img src={photo} alt={"photo"} />
        </button>
      </div>
    </header>
  );
};
