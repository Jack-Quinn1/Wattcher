import React from "react";
import "./App.css";
import ChartDetail from "../containers/chart";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div
            id="content-body"
            className="col-12 col-md-9 col-xl-10 pl-4 pr-4 bd-content"
          >
            <div className="row">
              <div className="col-md-12 pt-4 mt-3">
                <h2>Energy Dashboard</h2>
              </div>

              <div className="row mt-3">
                <div className="col-md-7">
                  <ul className="buttonwrapper">
                    <li id="day" className="active">
                      <label id="l1">DAY</label>
                    </li>
                    <li id="month">
                      <label id="l2">MONTH</label>
                    </li>
                    <li id="year">
                      <label id="l3">YEAR</label>
                    </li>
                  </ul>
                </div>
                <div className="col-md-5 text-right date-indicator" id="date">
                  Date
                </div>
              </div>
              <div className="row mt-3 db-chart">
                <div id="parent1" className="col-lg-6 col-xl-4">
                  <div className="chart-card mb-4">
                    <div className="chart-title" id="text1">
                      TOTAL CONSUMPTION
                    </div>
                    <div id="chart1" className="chart">
                      Chart 1
                    </div>
                  </div>
                </div>
                <div id="parent2" className="col-lg-6 col-xl-4">
                  <div className="chart-card mb-4">
                    <div className="chart-title" id="text2">
                      COST
                    </div>
                    <div id="chart2" className="chart">
                      Chart 2
                    </div>
                  </div>
                </div>
                <div id="parent3" className="col-lg-6 col-xl-4">
                  <div className="chart-card mb-4">
                    <div className="chart-title" id="text3">
                      AREAS
                    </div>
                    <div id="chart3" className="chart">
                      Chart 3
                    </div>
                  </div>
                </div>
                <div id="parent4" className="col-lg-6 col-xl-4">
                  <div className="chart-card mb-4">
                    <div className="chart-title" id="text4">
                      REAL TIME LIVE
                    </div>
                    <div id="chart4" className="chart">
                      Chart 4
                    </div>
                  </div>
                </div>
                <div id="parent5" className="col-lg-6 col-xl-4">
                  <div className="chart-card mb-4">
                    <div className="chart-title" id="text5">
                      RECOMMENDATIONS
                    </div>
                    <div id="chart5" className="chart">
                      Chart 5
                    </div>
                  </div>
                </div>
              </div>
              <ChartDetail />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// function App() {
//   const [todos, setTodos] = useState([]);
//   const [popupActive, setPopupActive] = useState(false);
//   const [newTodo, setNewTodo] = useState("");

//   useEffect(() => {
//     GetTodos();
//   }, []);

//   const GetTodos = () => {
//     fetch(api_base + "/todos")
//       .then((res) => res.json())
//       .then((data) => setTodos(data))
//       .catch((err) => console.error("Error: ", err));
//   };

//   const completeTodo = async (id) => {
//     const data = await fetch(api_base + "/todo/complete/" + id).then((res) =>
//       res.json()
//     );

//     setTodos((todos) =>
//       todos.map((todo) => {
//         if (todo._id === data._id) {
//           todo.complete = data.complete;
//         }

//         return todo;
//       })
//     );
//   };

//   const addTodo = async () => {
//     const data = await fetch(api_base + "/todo/new", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         text: newTodo,
//       }),
//     }).then((res) => res.json());

//     setTodos([...todos, data]);

//     setPopupActive(false);
//     setNewTodo("");
//   };

//   const deleteTodo = async (id) => {
//     const data = await fetch(api_base + "/todo/delete/" + id, {
//       method: "DELETE",
//     }).then((res) => res.json());

//     setTodos((todos) => todos.filter((todo) => todo._id !== data.result._id));
//   };

//   return (
//     <div className="App">
//       <h1>Welcome, Jack</h1>
//       <h4>Your tasks</h4>

//       <div className="todos">
//         {todos.length > 0 ? (
//           todos.map((todo) => (
//             <div
//               className={"todo" + (todo.complete ? " is-complete" : "")}
//               key={todo._id}
//               onClick={() => completeTodo(todo._id)}
//             >
//               <div className="checkbox"></div>

//               <div className="text">{todo.text}</div>

//               <div className="delete-todo" onClick={() => deleteTodo(todo._id)}>
//                 x
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>You currently have no tasks</p>
//         )}
//       </div>

//       <div className="addPopup" onClick={() => setPopupActive(true)}>
//         +
//       </div>

//       {popupActive ? (
//         <div className="popup">
//           <div className="closePopup" onClick={() => setPopupActive(false)}>
//             X
//           </div>
//           <div className="content">
//             <h3>Add Task</h3>
//             <input
//               type="text"
//               className="add-todo-input"
//               onChange={(e) => setNewTodo(e.target.value)}
//               value={newTodo}
//             />
//             <div className="button" onClick={addTodo}>
//               Create Task
//             </div>
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }

export default App;
