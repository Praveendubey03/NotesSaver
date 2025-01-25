
import '../styles.css';
import { useParams} from "react-router-dom";
import {  useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Copy } from "lucide-react";
const ViewPaste = () =>{
  const {id} = useParams();
  const allPastes = useSelector((state) => 
    state.paste.pastes);

  const paste = allPastes.find((p) => p._id === id);

//   return (
//   <div className=" h-full py-10 w-[1200px] mx-auto px-5 lg:px-0">
//   <div className="flex flex-row gap-y-5 items-start">
//     <div className="w-full flex flex-row gap-x-4 justify-between items-center">
//       <input className='w-[100%] text-white border border-input rounded-md p-2'
//         type="text"
//         disabled
//         placeholder="Enter title here:"
//         value={paste.title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//     </div>

  
//   </div>
//   <div className="w-full flex flex-col items-start relative rounded-bg-opacity-10 border border-white backdrop-blur-2xl">
//     <div className="w-full rounded-t flex items-center justify-between gap-x-[4px] px-4 py-2 border-b border-[rgba(128, 121, 121, 0.3)]">
//       <div className="w-full flex gap-x-[60px] items-center select-none group">
//         <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden b bg-red-600" />
//         <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-yellow-300" />
//         <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-green-400" />
//         </div>
//         <div className="w-fit rounded-t flex items-center justify-between gap-x-4 px-4">
//           <button onClick={() => {
//                       navigator.clipboard.writeText(paste.content)
//                       toast.success("Copied to the clipboard")
//                     }}
//                   className="flex justify-center items-center transition-all duration-300 ease-in-out group"><Copy/></button>
//            </div>
//            </div>
//            <div className="w-full flex">
//            <div className="flex w-full">
//           <textarea
//           className="p-3 min-h-[300px] text-sm overflow-y-auto border-none rounded-none focus:ring-0 pt-2 w-full 
//           bg-neutral-2 dark:bg-blend-darken font-normal placeholder:text-gray-300 focus:outline-none resize-none
//           leading-tight dark:text-white dark:caret-white" rows="29"
//           disabled
//             value={paste.content}
//             placeholder="Enter Content Here"
//             onChange={(e) => setValue(e.target.value)}
            
//           />
//         </div> 
//      </div>
   
//   </div>
// </div>
// );


return (
  <div className=" h-full py-10 w-[1200px] mx-auto px-5 lg:px-0">
    <div className="flex flex-row gap-y-5">
      <div className="w-full  flex flex-row gap-x-4 justify-between items-center ">
        <input
          type="text"
          placeholder="Enter title here:"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
          className='pl-2 text-neutral-400 min-w-[1200px] border-neutral-700 bg-neutral-900 border border-input rounded-md p-2'
        /> 
      </div>
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
                    navigator.clipboard.writeText(paste.content)
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
              value={paste.content}
              disabled
              placeholder="Enter Content Here"
              onChange={(e) => setValue(e.target.value)}
              //rows={20}
            />
          </div> 
       </div>
     
    </div>
  </div>
);

}

export default ViewPaste
