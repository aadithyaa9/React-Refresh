import { useState } from "react";

const Card = ({title}) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}


const App = () => {
  return (
    <div>
      
      <Card title="Your Name" />
      <Card title="Shawshank Redemption" />
      <Card title="Thr age of adeline" />
    </div>
  );
}

export default App;