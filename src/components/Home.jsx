import { useEffect, useState } from "react";
import '../styles.css';
import { Copy, PlusCircle } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import toast from "react-hot-toast";

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  function createPaste() {
    if (!title.trim() || !value.trim()) {
      toast.error("Title and content cannot be empty");
      return;
    }
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36) + Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      // Update the paste
      dispatch(updateToPastes(paste));
    } else {
      // Create the paste
      dispatch(addToPastes(paste));
    }

    // After creation or updation
    setTitle('');
    setValue('');
    setSearchParams({});
  }

  function resetPaste() {
    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <div className=" h-full py-10 w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-row gap-y-5 items-start">
        <div className="w-full flex flex-row gap-x-4 justify-between items-center">
          <input
            type="text"
            placeholder="Enter title here:"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`${
              pasteId ? "w-[80%]" : "w-[85%]"
            } text-neutral-400 border-neutral-700 bg-neutral-900 border border-input rounded-md p-2`}
          />

          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={createPaste}
          >
            {pasteId ? "Update Note" : "Create Note"}
          </button>
        </div>

        {pasteId && (
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={resetPaste}
          >
            <PlusCircle size={20} />
          </button>
        )}
      </div>
      <div className="w-full flex flex-col items-start relative rounded-bg-opacity-10 rounded-md mt-[5px] border border-neutral-600 backdrop-blur-2xl">
        <div className="w-full rounded-t flex items-center justify-between gap-x-[4px] px-4 py-2 border-b border-neutral-600">
          <div className="w-full flex gap-x-[6px] items-center select-none group">
            <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden b bg-red-600" />
            <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-yellow-300" />
            <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-green-400" />
            </div>
            <div className="w-fit rounded-t flex items-center justify-between gap-x-4 px-4">
              <button onClick={() => {
                      if (!value.trim()) {
                        toast.error("There is nothing to copy!");
                        return;
                      }
                      
                      toast.success("Copied to the clipboard")
                    }} className="flex justify-center items-center transition-all duration-300 ease-in-out group"><Copy/> </button>
               </div>
               </div>
               <div className="w-full flex">
               <div className="flex w-full">
              <textarea
              className=" p-3 min-h-[300px] text-sm overflow-y-auto border-none rounded-none focus:ring-0 pt-2 w-full 
              bg-neutral-900 font-normal placeholder:text-neutral-400 focus:outline-none resize-none
              leading-tight dark:text-white dark:caret-white" rows="20"
                value={value}
                placeholder="Enter Content Here"
                onChange={(e) => setValue(e.target.value)}
              />
            </div> 
         </div>
       
      </div>
    </div>
  );
}

export default Home;
