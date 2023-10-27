import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const AboutPage = () => {
  const [data, setData] = useState(null);
  const [deleted, setDeleted] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const inputRef = useRef(null);

  const handleEdit = () => {
    axios
      .patch(
        `https://super-cuff-links-colt.cyclic.app/notes/update/${deleted}`,
        {
          title,
          body,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setDeleted("");
        alert(res.data.message);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://super-cuff-links-colt.cyclic.app/notes/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setDeleted("");
        alert("deleted successfully");
      })
      .catch((err) => console.log("error deleting"));
  };

  function changeEdit(e, ele) {
    setDeleted(ele._id);
    setTitle(ele.title);
    setBody(ele.body);
  
  }



  useEffect(() => {
    axios
      .get("https://super-cuff-links-colt.cyclic.app//notes", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [deleted]);

  return (
    <div>
      <h2>AllNotes</h2>
      {deleted && <div><h3>Editing Area:-</h3>
      <input
                  type="text"
                  value={title}
                  onChange={(e) => {setTitle(e.target.value)}}
                />
                <br />
                <input
                  type="text"
                  value={body}
                  onChange={(e) => {setBody(e.target.value)}}
                />
                <br />
                <button onClick={handleEdit} style={{color:"green",margin:"10px",border:"none",backgroundColor:"white"}}><span  class="material-symbols-outlined">
task_alt
</span> </button>
<button  onClick={(e)=>setDeleted("")} style={{color:"red",margin:"10px",border:"none",backgroundColor:"white"}}> <span class="material-symbols-outlined">
cancel
</span></button>
      </div>
      }
      {data?.map((ele) => {
        return (
          <div key={Math.random()}>
            {<h2>{ele.title}</h2>}
            {<p>{ele.body}</p>}
            {<button onClick={(e) => changeEdit(e, ele)}>EDIT</button>}
            <button onClick={(e) => handleDelete(ele._id)}>DELETE</button>
            {ele._id === deleted && (
              <div>
              
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AboutPage;
