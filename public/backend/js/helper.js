// function new_vue(new_app) {
//   Object.entries(new_app).forEach(([key, val]) => Object.entries(val).forEach(([key2, val2]) => app[key2] = val2));
// }
if(!(!!window.new_vue)){
	function new_vue(vue) {
		for (var main in vue) {
			for (var item in vue[main]) {
				if (main == 'data') {
					app.$root._data[item] = vue[main][item];
				}

				app.$root[item] = vue[main][item];
			}
		}
	}
}

if(!(!!window.cl)){
	function cl(v1=null, v2=null, v3=null, v4=null, v5=null, v6=null, v7=null, v8=null, v9=null, v10=null) {
		if (v10) { console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) }
		else if (v9) { console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9) }
		else if (v8) { console.log(v1, v2, v3, v4, v5, v6, v7, v8) }
		else if (v7) { console.log(v1, v2, v3, v4, v5, v6, v7) }
		else if (v6) { console.log(v1, v2, v3, v4, v5, v6) }
		else if (v5) { console.log(v1, v2, v3, v4, v5) }
		else if (v4) { console.log(v1, v2, v3, v4) }
		else if (v3) { console.log(v1, v2, v3) }
		else if (v2) { console.log(v1, v2) }
		else if (v1) { console.log(v1) }
	}
}