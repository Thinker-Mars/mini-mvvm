import Minimvvm from './core';

window.obj = {
	boo: 'mini-mvvm'
};

const setValue = (value) => {
	document.getElementById('newValue').innerHTML = value;
};

new Minimvvm(obj, setValue);

setValue(window.obj.boo);

