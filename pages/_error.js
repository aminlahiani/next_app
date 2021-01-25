import Layouts from "../components/Layouts";

  function Error({statusCode}) {
    return (
        <Layouts title="Error!!!">
      
      {statusCode
      ? `Could not load your user data: Status Code ${statusCode}`
      : `Couldn't get that page, sorry!`}
       </Layouts>
    )
  }
  
  export default Error