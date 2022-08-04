import {useState} from "react"
import JSONDATA from "../episodes.json"
import EpisodeApp from "./TVEpisodes"
import "../App.css";

function LiveSearch(): JSX.Element{

const [searchTerm, setSearchTerm] = useState("")
const [count, setCount] = useState(0)


return (
  <div className="search">
   
  <input type="text" placeholder="seach..." onChange={e=>setSearchTerm(e.target.value)} />
  <div>
     Displaying {} episodes
  </div>
  <div style={{ height: "0", flexBasis: "100%" }}></div>

   {JSONDATA.filter((val)=>{
     if(searchTerm == ""){
     return val
  }
  else if(val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.summary.toLowerCase().includes(searchTerm.toLowerCase())){
   setCount(count+1)
    return val;  
    
  }

 }).map((val,key)=>{
  return (
  <div className="main-content" key={val.name}> <EpisodeApp  {...val} />
  </div>)
})}


</div> 
)} 
        
export default LiveSearch;