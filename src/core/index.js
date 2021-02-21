
class Minimvvm {

	constructor(obj, callback) {

		this.callback = callback;

		this.observe(obj);

	}

	observe(obj) {
		Object.keys(obj).forEach((key, index, keyArray) => {

			let oldValue = obj[key];

			Object.defineProperty(obj, key, {
				configurable: true,
				enumerable: true,
				get: function() {
					return oldValue;
				},
				set: function(newValue) {
					if (newValue !== oldValue) {
						oldValue = newValue;
						this.callback(newValue);
					}
				}.bind(this)
			})
			
		})
	}
};


export default Minimvvm;