import SinglePost from "./SinglePost";

const Panel = (props) => {
    console.log(props);
  return (
    <div className="col-md-9">
      {props.postData.map((item) => {
          return <SinglePost key={item.id} text={item.body}/>
      })}
    </div>
  );
};

export default Panel;
