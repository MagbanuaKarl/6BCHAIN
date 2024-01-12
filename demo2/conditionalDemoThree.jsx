    function Raining() {
        return(
            <h3>Use Car!</h3>
        );
    }

    function NotRaining() {
        return(
            <h3>Use your Feet.</h3>
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
            <NotRaining />
        );
      }
    
      export default function DemoThree() {
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
