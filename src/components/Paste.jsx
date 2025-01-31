import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { Copy, Share2, Trash2 , Pencil, Eye } from "lucide-react";
import dayjs from "dayjs";
import '../style2.css';
const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedPastes, setSortedPastes] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // Sort pastes by createdAt in descending order (newest first)
    const sorted = [...pastes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    setSortedPastes(sorted);
  }, [pastes]);

  const filteredData = sortedPastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  function handleShare(title, id) {
    navigator.share({
      title: `Check out this paste: ${title}`,
      url: `http://localhost:5173/paste/${id}`
    });
  }

  const truncateTextByCharacters = (text, maxChars) => {
    if (text.length > maxChars) {
      return text.slice(0, maxChars) + '...';
    }
    return text;
  };

  return (
    <div>
      <input 
        className="mb-[10px] p-2 rounded-2xl min-w-[600px] mt-5 border-neutral-700 border-[2px]"
        type="search"
        placeholder=" Search Title here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col-reverse gap-5 ">
        {filteredData.length > 0 && filteredData.map((paste) => {
          return (
            <div className="flex flex-col justify-center align-middle p-2 rounded-2xl border-neutral-600 border-[2px]" key={paste?._id}>
              <div className='font-bold text-xl break-words overflow-wrap'>{truncateTextByCharacters(paste.title, 20)}</div> {/* Line 35 */}
              <div className="break-words overflow-wrap">{truncateTextByCharacters(paste.content, 60)}</div> {/* Line 36 */}
              <div className="mt-2 flex flex-row gap-1 place-content-between"> 
                <div className="pl-5 text-sm ">{dayjs(paste.createdAt).format('DD/MM/YYYY  h:mm')}</div>
                <div className="pr-5 flex flex-row gap-2">
                  <button className="decoration-white">
                    <NavLink to={`/?pasteId=${paste?._id}`}><Pencil size={15} /></NavLink>
                  </button>
                  <button>
                    <NavLink to={`/paste/${paste?._id}`}><Eye size={15}/></NavLink>
                  </button>
                  <button onClick={() => handleDelete(paste?._id)}><Trash2 size={15}/></button>
                  <button onClick={() => {
                    navigator.clipboard.writeText(paste?.content)
                    toast.success("Copied to the clipboard")
                  }}><Copy size={15}/></button>
                  <button onClick={() => handleShare(paste?.title, paste?._id)}><Share2 size={15}/></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Paste;
