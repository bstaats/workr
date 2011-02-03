sc_require('core');

Workr.workrsController = SC.ArrayController.create( {
    contentBinding: 'Workr.masterWorkrController.minions',
    contentBindingDefault: SC.Binding.multiple().oneWay(),

    selection:    null,
    masterWorkr:  null
});