import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const context = createContext();

export const ContextProvider = (props) => {
  const [email, setEmail] = useState("");
  const [todo, setTodo] = useState([]);
  const nav = useNavigate();
  const userSignIn = (loginData) => {
    axios
      .post("https://todo-backend-5guz.onrender.com/login", loginData)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("email", loginData.email);
        nav("/contacts");
        window.alert("login successful");
        document.location.reload();
        setEmail(loginData.email);
      })
      .catch((err) => {
        //console.log(err.response.data.message)
        window.alert(err.response.data.message);
      });
  };

  const userSignUp = (userData) => {
    try {
      axios
        .post("https://todo-backend-5guz.onrender.com/register", userData)
        .then((res) => {
          nav("/");
          window.alert("registered successfully");
        })
        .catch((err) => {
          window.alert(err.response.data.error);
        });
    } catch (e) {
      window.alert(e.message);
    }
  };

  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };

  const postTodo = async (TodoData) => {
    return await axios
      .post("https://todo-backend-5guz.onrender.com/create", TodoData, config)
      .then((res) => {
        document.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const getTodo = () => {
    try {
      axios
        .get("https://todo-backend-5guz.onrender.com/allTodo", config)
        .then((res) => {
          const data = res.data.users[0].todo;
          setTodo(data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <context.Provider
      value={{
        userSignIn,
        todo,
        postTodo,
        getTodo,
        email,
        userSignUp,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
