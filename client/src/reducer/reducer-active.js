export default function (state = {}, action) {
  switch (action.type) {
    case "Option clicked":
      return action.payload;
    default:
      return "Option clicked";
  }
}
