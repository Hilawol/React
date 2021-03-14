import react from 'react'



const Basic = () => {
  const data = ["hello", "world"];
  data[0] = data[0].charAt(0).toUpperCase() + data[0].slice(1,);
  data[1] = data[1].charAt(0).toUpperCase() + data[1].slice(1,);
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!";
  return (
    <div>
      {data.join(" ")}
      <br></br>
      {`${number1}+${number2}=${number1 + number2}`}
      <br></br>
      {string}
    </div>
  )
}

export default Basic;