function Raining() {
    return(
        <h3>Bring Umbrella!</h3>
    );
}

function NotRaining() {
    return(
        <h3>Use Sunscreen!</h3>
    );
  }
  
  
  function RainOrShine(weather) {
    const isRainy = weather.isRainy;
    
    return isRainy ? <NotRaining /> : <Raining />;
  }

  export default function DemoFour() {
    return (
        <div>
            <div className={'${isRainy === true ? ${Raining} : ${NotRaining}}'}>
                <h3>If is Rainy is True</h3>
                <RainOrShine />
            </div>
        </div>
    );
  }
