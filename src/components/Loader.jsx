import { ThreeDots } from "react-loader-spinner";

const Loader = () => {


  
  return (
    <main>
      <ThreeDots
        height='80'
        width='80'
        radius='9'
        color='hsl(206, 100%, 85.49019607843138%)'
        ariaLabel='three-dots-loading'
        wrapperStyle={{}}
        wrapperClassName=''
        visible={true}
      />
    </main>
  );
};

export default Loader;
