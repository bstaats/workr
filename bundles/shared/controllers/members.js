Workr.membersController = SC.ArrayController.create({
    contentBinding: 'Workr.workrController.members',
    contentBindingDefault: SC.Binding.multiple().oneWay(),
    selection: null
});