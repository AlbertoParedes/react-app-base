export default function (state=null, action){
  switch (action.type) {
    case "DATAEJEMPLO" :
      return action.dataEjemplo;
    default :
      return state;
  }
}
