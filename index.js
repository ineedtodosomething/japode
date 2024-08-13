let string = "";
let num = 0;
let bool = true;

function todatype(data, data_type, misc, out) {
	if(misc == "numstr") {
		out = parseInt(data);
	}
	if(data === typeof string && data_type == "num" && misc == null){
		out = data.length;
	}
	if(data === typeof num && data_type == "str") {
		out = `${data}`;
	}
	if( data === typeof bool && data_type == "str") {
		out = `${data}`;
	}
	if (data === typeof bool && data_type == "num" && data == true) {
		out = 1;
	}
	if(data === typeof bool && data_type == "num" && data == false) {
		out = 0;
	}
	return data = out;

}
