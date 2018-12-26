function myValue(button)
{
	var num=button.value;
	// alert(num);
	document.calculator.t1.value+=num;
}
function answer()
{
	var ans=eval(calculator.t1.value);
	// alert(ans);
	document.getElementById("t1").value = ans;
}