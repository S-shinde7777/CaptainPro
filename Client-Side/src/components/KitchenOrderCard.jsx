function KitchenOrderCard({

table,
items,
time,
buttonText,
buttonColor,
onClick,

}) {

return (

<div className="bg-[#16233D] rounded-2xl p-4 border border-slate-700">

<div className="flex justify-between">

<h2 className="font-bold text-lg">
Table {table}
</h2>

<span className="text-cyan-400 text-sm">
{time}
</span>

</div>

<div className="mt-4 space-y-2">

{items.map((item,index)=>(

<div
key={index}
className="flex justify-between text-gray-300"
>

<span>{item.name}</span>

<span>x{item.qty}</span>

</div>

))}

</div>

<button

onClick={onClick}

className={`

w-full
mt-5
py-3
rounded-xl
font-semibold
transition
hover:scale-105

${buttonColor}

`}

>

{buttonText}

</button>

</div>

);

}

export default KitchenOrderCard;