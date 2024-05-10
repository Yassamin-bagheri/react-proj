const SinglePost = (props) => {
    return (
        <div className="row shadow m-5 rounded">
        <div className="col-md-12 p-4">{props.text}</div>
      </div>
    );
};

export default SinglePost;