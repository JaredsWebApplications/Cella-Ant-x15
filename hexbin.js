function setup()
{
	//Ant's number
	antNum = 0x15;
	
	//brute-force
	//case1 = (antNum % 32) >> 4;
	//case2 = (antNum % 16) >> 3;
	//case3 = (antNum % 8)  >> 2;
	//case4 = (antNum % 4)  >> 1;
	//case5 = (antNum % 2)	  ;
	//output verification
	//window.alert(case1*10000 + case2*1000 + case3*100 + case4*10 + case5);
	
	//By getting the state
	var cell = new Cell
	generalFormula = (antNum % (32 >> cell.getState())) >> (4 - cell.getState());
	//output verification
	//window.alert(generalFormula);
}