Ext.onReady(function () {
  
    Ext.create('Ext.panel.Panel', {
        title: 'Accordion Layout',
        id:'test',
       
   
        width: 1000,
        height: 1000,
        layout: {
            type: 'border',
                // Arrange child items vertically
           // Each takes up full width
            
        },
        renderTo: document.body,
        
        items: [{
                // position for region
           
            xtype: 'Tom_2_Panel'
        }, { region: 'center', xtype:'main1_panel'}], 

        html: '<p>World!</p>',
        renderTo: Ext.getBody(),

    });
    
});
Ext.define('car_main1_panel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.main1_panel',
    id: 'main1_panel',
    width: 500,
    height: 500,
   
    initComponent: function () {
        var me = this;
       
        Ext.apply(this, {
            border: false,
            //layout: 'vbox',
            layout: 'hbox',
            items: [
                { title: "首頁" }
            ]
        });
        this.callParent(arguments);
        this.on('afterrender', function (t) {

        });
    }
});