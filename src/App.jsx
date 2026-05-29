import { useState } from "react";
import "./App.css";


function App(){


const [amount,setAmount]=useState("");

const [lock,setLock]=useState(0);

const [vest,setVest]=useState(0);



const locks=[0,1,2,3,4,5];


const vests=[

0,12,24,36,48,60,72,84,96,108,120

];



const ratioTable={


0:{
0:160,
12:130,
24:105,
36:85,
48:70,
60:60,
72:52,
84:46,
96:41,
108:38,
120:36
},


1:{
0:80,
12:65,
24:52,
36:42,
48:35,
60:30,
72:26,
84:23,
96:20,
108:19,
120:18
},



2:{
0:40,
12:32,
24:26,
36:21.25,
48:17,
60:15,
72:13,
84:11,
96:10,
108:9,
120:9
},



3:{
0:20,
12:16,
24:13,
36:10,
48:8,
60:7,
72:6,
84:5,
96:5,
108:4,
120:4
},



4:{
0:10,
12:8,
24:6,
36:5,
48:4,
60:3,
72:3,
84:2,
96:2,
108:2,
120:2
},



5:{
0:5,
12:4,
24:3,
36:2,
48:2,
60:1.875,
72:1,
84:1,
96:1,
108:1,
120:1.125
}


};



let ratio=ratioTable[lock][vest];



let total=

amount===""

?

0

:

(amount/ratio).toFixed(4);




let monthly=

amount===""

?

0

:

vest===0

?

total

:

(total/vest).toFixed(4);






return(


<div className="page">



<nav>


<div className="brand">


<div className="logo"></div>


<h1>

InterLink

</h1>


</div>



<button>

ⓘ Learn More

</button>



</nav>








<section className="title">


<h1>

ITLG Staking Calculator

</h1>



<p>

Stake your ITLG and calculate your future ITL allocation

</p>



</section>








<div className="reward">



<h3>

TOTAL ITL YOU WILL RECEIVE

</h3>




<h1>


{total}


<span>

 ITL

</span>



</h1>







<div className="smallcards">




<div>


<h2>

{ratio}

</h2>


<p>

Conversion Ratio

</p>


<small>

ITLG = 1 ITL

</small>



</div>







<div>



<h2>

{monthly}

</h2>



<p>

Monthly Release

</p>


<small>

ITL per month

</small>



</div>




</div>



</div>









<div className="control">





<label>

AMOUNT OF ITLG TO STAKE

</label>






<div className="amount">



<span>

◉ ITLG

</span>





<input


type="text"


inputMode="decimal"


placeholder="Enter ITLG amount"


value={amount}



onChange={(e)=>{


let value=e.target.value;


if(/^\d*\.?\d*$/.test(value)){


setAmount(value);


}


}}



/>





<span>

ITLG

</span>



</div>








<div className="grid">








<div className="box">



<h3>

🔒 LOCK PERIOD

</h3>




<h1>


{lock}


<span>

 Years

</span>


</h1>




<div className="options">



{

locks.map((item)=>(



<button


key={item}


className={

lock===item ? "active" : "choice"

}



onClick={()=>setLock(item)}

>


{item}Y


</button>



))


}



</div>



</div>











<div className="box">



<h3>

📅 VESTING PERIOD

</h3>





<h1>


{vest}


<span>

 Months

</span>



</h1>





<div className="options">




{


vests.map((item)=>(



<button


key={item}


className={


vest===item ? "active" : "choice"


}



onClick={()=>setVest(item)}



>



{item}



</button>



))


}




</div>





</div>





</div>









<div className="bottom">





<div className="purple">


<h4>

Payout Starts

</h4>


<h2>


After {lock} Years


</h2>


</div>








<div className="green">


<h4>

Total ITL

</h4>



<h2>

{total}

</h2>



</div>








<div className="orange">


<h4>

Monthly Release

</h4>


<h2>

{monthly}

</h2>



</div>









<div className="blue">


<h4>

Vesting Duration

</h4>


<h2>


{vest} Months


</h2>



</div>





</div>






</div>





</div>


)

}



export default App;