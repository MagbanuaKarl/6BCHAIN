function Raining() {
    return(
        <h3>Dont Use Motorcyle!</h3>
    );
  }
  
  
  function RainOrShine(weather) {
    const isRainy = weather.isRainy;
  
    if(isRainy){
      return(
        <Raining />
      );
    }
    return(
        <h3>Use Motorcyle!</h3>
    );
  }

  export default function DemoTwo() {
    return (
      <div>
        <h2>If isRainy is true</h2>
        <RainOrShine isRainy={true} />
        <h2>If isRainy is false</h2>
        <RainOrShine isRainy={false} />
        <h2></h2>
      </div>
    )
  }