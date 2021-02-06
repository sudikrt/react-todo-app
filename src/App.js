import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import  {HashRouter as Router, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import ContactUs from './components/ContactUs';

const App = () => {
  const API_ENDPOINT = 'https://my-json-server.typicode.com/sudikrt/db-demo-repo/tasks';
  //'http://localhost:5000/tasks'
  const [showAddTask, setShowAddTask] = useState (false);

  const [tasks, setTasks] = useState ([]);

  useEffect ( () => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks ();
        setTasks (tasksFromServer);
      }
      getTasks ();
  }, [])

  //Fetch Tasks 
  const fetchTasks = async () => {
      const res = await fetch (API_ENDPOINT, {
        headers : {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json;odata.metadata=full',
        }
      });
      const data = await res.json ();
      return data;
  }
  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch (`${API_ENDPOINT}/${id}`);
    const data = await res.json ();
    return data;
}

  //Add Task
  const addTask = async (task) => {
      const res = await fetch  (API_ENDPOINT,
        {
          method : 'POST',
          headers : {
            'Content-type' : 'application/json'
          },
          body : JSON.stringify (task)
        }
      )

      const data = await res.json ();
      setTasks ([...tasks, data]);

      // const id = Math.floor (Math.random () * 1000);
      // const newTask = {
      //   id, ...task
      // }
      // setTasks ([...tasks, newTask]);
  }

  //delete 
  const deleteTask =  async (id) => {
      await fetch (`${API_ENDPOINT}/${id}`, {
        method : 'DELETE'
      })
      setTasks (tasks.filter (task => task.id !== id));
  }

  //toggle remainder 
  const toggleRemainder = async (id) => {
      const taskToToggle = await fetchTask (id);
      const updTask = {
        ...taskToToggle, reminder : !taskToToggle.reminder
      };

      const res = await fetch (`${API_ENDPOINT}/${id}`,
        {
          method : 'PUT',
          headers : {
            'Content-type' : 'application/JSON'
          },
          body : JSON.stringify (updTask)
        }
      );
      const data = await res.json ();

      setTasks (tasks.map ( task => task.id === id ? {...task, reminder : data.reminder} : task))
  }

  return (
    <Router basename="/">
      {
      <div>
          <Route path='/' exact render={(props) => (
            <div className="container">
              <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask}/>
              { showAddTask && <AddTask onAdd={addTask}/> }
              {
                tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleRemainder} onDelete={deleteTask}/> : 'No Tasks to Show'
              }
              <Footer/>
            </div>
          )}/>
          <Route path="/about" render={(props) => (
            <div className="container">
              <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask}/>
              <Route path="/about" component={About}/>
              <Footer/>
            </div>
          )}/>
          {/* <div className="container">
              <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask}/>
              <Route path='/' exact render={(props) => (
                <>
                  { showAddTask && <AddTask onAdd={addTask}/> }
                  {
                    tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleRemainder} onDelete={deleteTask}/> : 'No Tasks to Show'
                  }
                </>
              )}/>
              <Route path="/about" component={About}/>
              <Footer/>
          </div> */}
          <Route path="/contact-us" component={ContactUs}/>
      </div>
      }
    </Router>
  );
}

export default App;
