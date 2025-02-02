import React from "react";

function Person({ id, name, images, nickName }) {
    console.log({name})
  return (
   <>
   <h1>{name}</h1>
   <h1>nickname : {nickName || "noNickName"}</h1>
   <img src={images&& images[0] && images[0].small &&images[0].small.url  } style={{width:"50px"}} alt="" />
   </>
  );
}

export default Person;
