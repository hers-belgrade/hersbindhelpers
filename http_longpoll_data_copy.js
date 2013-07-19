function HTTPLongPollDataCopy (url, cb_map) {
	this.datacpy = new Collection();
	var sbs = this.datacpy.subscribe_bunch(cb_map);
	var self = this;

	this.go = function () {
		var client = new HTTP_LongPollClient (url, {
			buffer_ready : function (consumer) {
				var u ;
				while (u = consumer.next()){
					self.datacpy.commit(u);
				}
			}
		});
	}
}
