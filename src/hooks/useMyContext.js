import { MyContext } from "../context/datacontext";
import { useContext } from "react";

const useMyContext = () => {
    const context = useContext(MyContext)
    if(!context) {
      throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }
    return context
  }
export default useMyContext