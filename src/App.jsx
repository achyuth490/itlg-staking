import {useState} from "react";
import "./App.css";


function App(){


const [amount,setAmount]=useState("");
const [lock,setLock]=useState(0);
const [vest,setVest]=useState(0);



const ratioTable={

0:{0:160,12:130,24:105,36:85,48:70,60:60,72:52,84:46,96:41,108:38,120:36},

1:{0:80,12:65,24:52,36:42,48:35,60:30,72:26,84:23,96:20,108:19,120:18},

2:{0:40,12:32,24:26,36:21.25,48:17,60:15,72:13,84:11,96:10,108:9,120:9},

3:{0:20,12:16,24:13,36:10,48:8,60:7,72:6,84:5,96:5,108:4,120:4},

4:{0:10,12:8,24:6,36:5,48:4,60:3,84:2,96:2,108:2,120:2},

5:{0:5,12:4,24:3,36:2,48:2,60:1.875,72:1,84:1,96:1,108:1,120:1.125}

};



let ratio=ratioTable[lock][vest];


let total =
amount==="" ? 0 :
(amount/ratio).toFixed(4);


let monthly =
amount==="" ? 0 :
vest==0 ? total :
(total/vest).toFixed(4);





return(

<div className="page">


<header>

<div className="logo"></div>

<h2>
InterLink
</h2>


</header>





<div className="card">



<h3>
TOTAL ITL RECEIVE
</h3>


<h1 className="total">

{total}

<span> ITL</span>

</h1>





<div className="inputBox">


<input

type="text"

inputMode="decimal"

placeholder="Enter ITLG"

value={amount}


onChange={(e)=>{


let v=e.target.value;


if(/^\d*\.?\d*$/.test(v))

setAmount(v);


}}


/>


</div>







<div className="selects">


<div>

<label>
Lock
</label>


<select

value={lock}

onChange={(e)=>setLock(e.target.value)}

>

<option value="0">0 Years</option>
<option value="1">1 Year</option>
<option value="2">2 Years</option>
<option value="3">3 Years</option>
<option value="4">4 Years</option>
<option value="5">5 Years</option>


</select>


</div>







<div>


<label>
Vesting
</label>



<select

value={vest}

onChange={(e)=>setVest(e.target.value)}

>


<option value="0">0 Months</option>
<option value="12">12 Months</option>
<option value="24">24 Months</option>
<option value="36">36 Months</option>
<option value="48">48 Months</option>
<option value="60">60 Months</option>
<option value="72">72 Months</option>
<option value="84">84 Months</option>
<option value="96">96 Months</option>
<option value="108">108 Months</option>
<option value="120">120 Months</option>


</select>


</div>



</div>








<div className="results">


<div>

<p>Ratio</p>

<h2>{ratio}</h2>

</div>




<div>

<p>Monthly</p>

<h2>{monthly}</h2>

</div>





<div>

<p>Unlock</p>

<h2>{lock}Y</h2>

</div>





<div>

<p>Vest</p>

<h2>{vest}M</h2>

</div>




</div>






</div>




</div>


)

}


export default App;