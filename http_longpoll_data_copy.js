///KEEP THIS ONE CLEAN, SHOULD BE USED ON BOTH node AND browser side ...

function LongPollDataCopy (client_config, hook_functions) {
	var data = undefined;

	function create_data (d) {
		console.log('WILL CREATE DATA');
	}

	this.go = function () {
		var client  = new HTTP_LongPollClient(client_config, {
			buffer_ready : function (consumer) {
				var u;
				while (u = consumer.next()){
					if (u.is_init) {
						create_data(d.data);
						continue;
					}
				}
			}
		});
	}
}
