function reload(){

   location.reload();	

}

window.onload = function()
{
	document.getElementById("divone").setAttribute("hidden","");
	document.getElementById("divtwo").setAttribute("hidden","");
	document.getElementById("divthree").setAttribute("hidden","");
	document.getElementById("divfour").setAttribute("hidden","");
	document.getElementById("divfive").setAttribute("hidden","");
	document.getElementById("divsix").setAttribute("hidden","");
	document.getElementById("divseven").setAttribute("hidden","");
	document.getElementById("diveight").setAttribute("hidden","");
	document.getElementById("divnine").setAttribute("hidden","");
	document.getElementById("divzero").setAttribute("hidden","");
	
}

function calc()
{
	
	var AlexCount = document.getElementById("inputAlex").value;
	var AndreCount = document.getElementById("inputAndrew").value;
	var KostenCount = document.getElementById("inputKosten").value;
	
    
    if ((AlexCount == AndreCount) && (AndreCount==KostenCount) && (AlexCount!='' || AndreCount !='' || KostenCount!=''))
    {
        
        alert("Пейте спокойно! Никто никому не должен!");
        location.reload();
    }

    if ((AlexCount == AndreCount && KostenCount==1) || (AndreCount == KostenCount && AlexCount==1))
    {
        alert("Пейте спокойно! Никто никому не должен!");
        location.reload();
    }
    

    if ((AlexCount == KostenCount) && AndreCount==1)
    {
        alert("Нахуй так жить");
		location.reload();
    }


    if ((AlexCount == 1 && AndreCount == 1) || (AlexCount == 1 && KostenCount == 1) || (AndreCount == 1 && KostenCount == 1))
    {
       window.open('https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%BA%D0%BE%D0%B3%D0%BE%D0%BB%D0%B8%D0%B7%D0%BC');
       location.reload();
    }

    if (AlexCount == '' || AndreCount == '' || KostenCount == '')
    {
        alert("Заполните все обязательные поля");
        location.reload();
    }

    if ((!AlexCount.match(/^[0-9]+$/) || !AndreCount.match(/^[0-9]+$/) || !KostenCount.match(/^[0-9]+$/)) && 
    	(AlexCount != '' && AndreCount != '' && KostenCount != '')) 
    {
        alert("В поле должно быть введено только число");
        location.reload();
    }	

	// Cлучай когда учавствуют два человека
	if (AlexCount == 1 || AndreCount == 1 || KostenCount == 1)
	{
		var maxMoney = Math.max(AlexCount, AndreCount,KostenCount);
		var sumOfMoney = (Number(AlexCount)+Number(AndreCount)+Number(KostenCount))-1;
		var moneyPerOne = Number(sumOfMoney)/2;
		
		// Cлучай когда Андре скинул больше а Сани нет
		
		if (maxMoney == AndreCount && AlexCount == 1)
		{		
			document.getElementById("divfive").removeAttribute("hidden");
			document.getElementById("k-to-a2").innerHTML = ((Number(AndreCount)-Number(KostenCount))/2).toFixed(2);
		}
		
		// Cлучай когда Андре скинул больше а Костена нет
		if (maxMoney == AndreCount && KostenCount == 1)
		{		
			document.getElementById("divfour").removeAttribute("hidden");
			document.getElementById("s-to-a2").innerHTML = ((Number(AndreCount)-Number(AlexCount))/2).toFixed(2);	
		}
		
		// Cлучай когда Саня скинул больше а Андре нет
		if (maxMoney == AlexCount && AndreCount == 1 && AlexCount != KostenCount)
		{
			alert("Нахуй так жить");
			location.reload();			
		}
		
		// Cлучай когда Саня скинул больше а Костена нет
		if (maxMoney == AlexCount && KostenCount == 1)
		{
			
			document.getElementById("divsix").removeAttribute("hidden");
			document.getElementById("a-to-s2").innerHTML = ((Number(AlexCount)-Number(AndreCount))/2).toFixed(2);	
		}
		
		// Cлучай когда Андре скинул больше а Андре нет
		if (maxMoney == KostenCount && AndreCount == 1 && AlexCount != KostenCount)
		{
			alert("Нахуй так жить");
			location.reload();
		}
		
		// Cлучай когда Костен скинул больше а Сани нет
		if (maxMoney == KostenCount && AlexCount == 1)
		{
			document.getElementById("a-to-k2").innerHTML = ((Number(KostenCount)-Number(AndreCount))/2).toFixed(2);
			document.getElementById("diveight").removeAttribute("hidden");	
		}
	}
	
	// Cлучай когда учавствуют три человека
	else
	{
		
		var maxMoney = Math.max(AlexCount, AndreCount,KostenCount);
		var sumOfMoney = Number(AlexCount)+Number(AndreCount)+Number(KostenCount);
		var moneyPerOne = Number(sumOfMoney)/3;

		
		// Cлучай когда Саня скинул больше а Андре меньше чем ВСЁ делённое на троих
		if (maxMoney == AlexCount && AndreCount<moneyPerOne && KostenCount<moneyPerOne)
		{
			document.getElementById("divtwo").removeAttribute("hidden");
			document.getElementById("a-to-s").innerHTML = (Number(moneyPerOne)-Number(AndreCount)).toFixed(2);
			document.getElementById("k-to-s").innerHTML = (Number(moneyPerOne)-Number(KostenCount)).toFixed(2);
				
		}

		// Cлучай когда Саня скинул больше а Андре больше или равно чем ВСЁ делённое на троих
		if (maxMoney == AlexCount && AndreCount>=moneyPerOne)
        {
            document.getElementById("divfive").removeAttribute("hidden");
            var deltaMoney = Number(AndreCount)-Number(moneyPerOne);
            document.getElementById("k-to-a2").innerHTML = (Number(deltaMoney)).toFixed(2);
            document.getElementById("divseven").removeAttribute("hidden");
            document.getElementById("k-to-s2").innerHTML = (Number(moneyPerOne)-Number(deltaMoney)).toFixed(2);	
		}
		// Cлучай когда Костен скинул больше а Андре меньше чем ВСЁ делённое на троих
		if (maxMoney == KostenCount && AndreCount<moneyPerOne && AlexCount<moneyPerOne)
		{
			alert("Вы точно уверены что Константин скинул больше всех?");
			document.getElementById("divthree").removeAttribute("hidden");
			document.getElementById("s-to-k").innerHTML = (Number(moneyPerOne)-Number(AlexCount)).toFixed(2);
			document.getElementById("a-to-k").innerHTML = (Number(moneyPerOne)-Number(AndreCount)).toFixed(2);
		}

		// Cлучай когда Костен скинул больше а Андре больше или равно чем ВСЁ делённое на троих
		if (maxMoney == KostenCount && AndreCount>=moneyPerOne)
        {
            document.getElementById("divnine").removeAttribute("hidden");
            var deltaMoney = Number(AndreCount)-Number(moneyPerOne);
            document.getElementById("s-to-a2").innerHTML = (Number(deltaMoney)).toFixed(2);
            document.getElementById("divfour").removeAttribute("hidden");
            document.getElementById("s-to-k2").innerHTML = (Number(moneyPerOne)-Number(deltaMoney)).toFixed(2);
		}
		//==================================================================================

		// Cлучай когда Андре скинул больше а Саня меньше чем ВСЁ делённое на троих
		if (maxMoney == AndreCount && AlexCount<moneyPerOne && KostenCount<moneyPerOne)
		{
			document.getElementById("divone").removeAttribute("hidden");
			document.getElementById("s-to-a").innerHTML = (Number(moneyPerOne)-Number(AlexCount)).toFixed(2);
			document.getElementById("k-to-a").innerHTML = (Number(moneyPerOne)-Number(KostenCount)).toFixed(2);
		}

		// Cлучай когда Андре скинул больше а Саня больше или равно чем ВСЁ делённое на троих
		if (maxMoney == AndreCount && AlexCount>=moneyPerOne)
        {
            document.getElementById("divseven").removeAttribute("hidden");
            var deltaMoney = Number(AlexCount)-Number(moneyPerOne);
            document.getElementById("k-to-s2").innerHTML = (Number(deltaMoney)).toFixed(2);
            document.getElementById("divfive").removeAttribute("hidden");
            document.getElementById("k-to-a2").innerHTML = (Number(moneyPerOne)-Number(deltaMoney)).toFixed(2);
		}
		// Cлучай когда Костен скинул больше а Саня меньше чем ВСЁ делённое на троих
		if (maxMoney == KostenCount && AlexCount<moneyPerOne && AndreCount<moneyPerOne)
		{
			alert("Вы точно уверены что Константин скинул больше всех?");
			document.getElementById("divthree").removeAttribute("hidden");
			document.getElementById("s-to-k").innerHTML = (Number(moneyPerOne)-Number(AlexCount)).toFixed(2);
			document.getElementById("a-to-k").innerHTML = (Number(moneyPerOne)-Number(AndreCount)).toFixed(2);
		}

		// Cлучай когда Костен скинул больше а Саня больше или равно чем ВСЁ делённое на троих
		if (maxMoney == KostenCount && AlexCount>=moneyPerOne)
        {
            document.getElementById("divsix").removeAttribute("hidden");
            var deltaMoney = Number(AlexCount)-Number(moneyPerOne);
            document.getElementById("a-to-s2").innerHTML = (Number(deltaMoney)).toFixed(2);
            document.getElementById("diveight").removeAttribute("hidden");
            document.getElementById("a-to-k2").innerHTML = (Number(moneyPerOne)-Number(deltaMoney)).toFixed(2);
		}

		//================================================================================

		// Cлучай когда Андре скинул больше а Костен меньше чем ВСЁ делённое на троих
		if (maxMoney == AndreCount && KostenCount<moneyPerOne && AlexCount<moneyPerOne)
		{
			document.getElementById("divone").removeAttribute("hidden");
			document.getElementById("s-to-a").innerHTML = (Number(moneyPerOne)-Number(AlexCount)).toFixed(2);
			document.getElementById("k-to-a").innerHTML = (Number(moneyPerOne)-Number(KostenCount)).toFixed(2);
		}

		// Cлучай когда Андре скинул больше а Костен больше или равно чем ВСЁ делённое на троих
		if (maxMoney == AndreCount && KostenCount>=moneyPerOne)
        {
		    document.getElementById("divnine").removeAttribute("hidden");
            var deltaMoney = Number(KostenCount)-Number(moneyPerOne);
            document.getElementById("s-to-k2").innerHTML = (Number(deltaMoney)).toFixed(2);
            document.getElementById("divfour").removeAttribute("hidden");
            document.getElementById("s-to-a2").innerHTML = (Number(moneyPerOne)-Number(deltaMoney)).toFixed(2);	
		}
		// Cлучай когда Саня скинул больше а Костен меньше чем ВСЁ делённое на троих
		if (maxMoney == AlexCount && KostenCount<moneyPerOne && AndreCount<moneyPerOne)
		{
			document.getElementById("divtwo").removeAttribute("hidden");
			document.getElementById("a-to-s").innerHTML = (Number(moneyPerOne)-Number(AndreCount)).toFixed(2);
			document.getElementById("k-to-s").innerHTML = (Number(moneyPerOne)-Number(KostenCount)).toFixed(2);	
		}

		// Cлучай когда Саня скинул больше а Костен больше или равно чем ВСЁ делённое на троих
		if (maxMoney == AlexCount && KostenCount>=moneyPerOne)
		{
            document.getElementById("diveight").removeAttribute("hidden");
            var deltaMoney = Number(KostenCount)-Number(moneyPerOne);
            document.getElementById("a-to-k2").innerHTML = (Number(deltaMoney)).toFixed(2);
            document.getElementById("divsix").removeAttribute("hidden");
            document.getElementById("a-to-s2").innerHTML = (Number(moneyPerOne)-Number(deltaMoney)).toFixed(2);	

		}
	}
}

