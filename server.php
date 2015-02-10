<?php
if(isset($_GET['temp'])){

	$T=$_GET['temp'];
	if($T >= 17 AND $T <= 20){
		
		$makanan = array("Baso","Mie Ayam","Bubur Kacang Ijo");
		$minuman = array("Kopi","Susu","Coklat Panas");
		$arr = array(
					"label"=>"RM. ABC",
					"makanan"=>$makanan,
					"minuman"=>$minuman
				);		
	}
	elseif($T > 20 AND $T <= 24 ){
		$makanan = array("Rendang","Ayam Goreng","Rujak");
		$minuman = array("Teh Manis","Kopi","Coklat");
		$arr = array(
					"label"=>"RM. ABC",
					"makanan"=>$makanan,
					"minuman"=>$minuman
				);
	}
	elseif($T > 24 AND $T < 38){
		$makanan = array("Agar-agar","Roti","Rujak");
		$minuman = array("Es Teh Manis","Es Kopi","Es Coklat");
		$arr = array(
					"label"=>"RM. ABC",
					"makanan"=>$makanan,
					"minuman"=>$minuman
				);
	}
	else{
		$arr=' tidak terdefinisi';
	}
}
else{
	$arr=' tidak terdefinisi';
}
echo json_encode($arr);

?>
