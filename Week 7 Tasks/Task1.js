Vue.component('global', {
    template:'<div>This is a global component!</div>',
});


var component1 = {
    template: '<div><global></global>This is the first component</div>',
};

var component2 = {
    template: '<div><component1></component1> This is the second component</div>',
    components: {
        component1,
    },
};

var app = new Vue({
    el: '#app',
    data: {
        text: 'Hello Vue! How are you doing?',
    },
    components: {
        component1,
        component2
    },
});
