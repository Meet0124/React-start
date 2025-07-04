import React from "react";

function Card({username="MA", post="Not assigned"}) {  // instead of writing props here and doing props.() pass object
    //console.log(props);
    
  return (
    <div class="flex flex-col items-center gap-6 p-7 rounded-2xl">
      <div>
        <img
          class="size-48 shadow-xl rounded-md"
          alt=""
          src="https://images.pexels.com/photos/6982643/pexels-photo-6982643.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
      <div class="flex items-center">
        <span class="text-2xl font-medium">{username || "don"}</span>
        <span class="font-medium text-sky-500">The Anti-Patterns</span>
        <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>{post}</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  );
}

export default Card;
