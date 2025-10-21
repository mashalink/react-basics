function Card({ name, title, age }) {
  return (
    <div className="card">
      <div className="name">{name}</div>
      <div className="title">Title: {title}</div>
      <div className="age">Age: {age}</div>
    </div>
  );
}

export default Card;
