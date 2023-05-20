import { useEffect, useState } from 'react'
import { getDatabase, push, ref, set, onChildAdded } from "firebase/database";


function App() {
  const [name, setName] = useState("")
  const [tempName, setTempName] = useState("")
  const [message, setMessage] = useState()
  const [chats, setChats] = useState([])

  const db = getDatabase();
  const chatListRef = ref(db, 'chats');

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      setChats(chats => [...chats, data.val()])
    });
  }, [])

  const sendChat = () => {
    const chatRef = push(chatListRef);
    set(chatRef, {
      name, message: message
    });
    setMessage("")

  }


  return (
    <>
      <div className='border'>

        <div className='flex justify-center shadow-lg my-b fixed w-full py-5 gap-2 border bg-white'>
          <p className='font-semibold text-sm md:text-lg'>{name ? "Welcome Mr : " + name : "Enter Your Name"}</p>
          {!name && <>
            <input type="text" onChange={(e) => setTempName(e.target.value)} className="rounded border-2 border-black" />
            <button onClick={() => (setName(tempName.toUpperCase()))} className='px-4 md:py-1 bg-cyan-700 rounded shadow text-white font-semibold'>Save</button>
          </>}
        </div>
        {name != "" &&
          <>
            <div className='px-1 md:px-10 w-full h-full mt-20 pb-32'>
              <div className='mb-10'>
                {chats && chats?.map((item, i) => (
                  <div key={i} className={`flex ${item.name == name ? "flex-row-reverse" : "flex-row"} `}>
                    <div className={`flex border px-2 py-1 rounded-md ${item.name == name ? "bg-green-500" : "bg-orange-400"}`}>
                      <p className='font-semibold'>{item.name}:</p>
                      <p className='mx-2'>{item.message}</p>
                    </div>
                  </div>
                ))
                }
              </div>
            </div>

            <div className='flex justify-center shadow-lg w-full gap-2 border fixed bottom-0'>
              <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" className='px-2 w-full border py-1 shadow-md' />
              <button onClick={sendChat} className='border rounded shadow-md px-5 md:px-20 bg-indigo-700 text-white font-semibold py-1'>Send</button>
            </div>
          </>
        }

      </div>

    </>
  )
}

export default App
