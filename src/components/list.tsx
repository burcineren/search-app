import { ListItem } from "./ListItem";
import { Link } from "react-router-dom";

export function List(props:any) {
  return (
    <div className="search-list">
      <div className="list-wrapper">
        <ul className="list">
          {props.data.length > 0 &&
            props.data.slice(0, 3).map((item:any) => {
              return <ListItem key={item.Company} items={item} />;
            })}
        </ul>
        <Link
          to={{
            pathname: `/detail/${props.text}`,
          }}
        >
          <b>Show more..</b>
        </Link>
      </div>
    </div>
  );
}
