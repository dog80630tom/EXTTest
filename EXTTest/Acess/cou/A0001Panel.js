var changeitem;
var changefalg = false;
Ext.define('tom_A0001_panel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.A0001_panel',
   
    width: 500,
    height: 500,
    initComponent: function () {

        Ext.apply(this, {
            border: true,
            flex: 1,
            layout: {
                type: 'border',
                region: 'center',
            },
            items: [
                {
                    xtype: 'panel', border: true, layout: 'border', flex: 1,width:500,height:500,
                    items: [
                        { xtype: 'A0001_form', height: 250, border: true, autoScroll: true, region: 'north', split: true },//, padding: '0 0 20 0'
                        { xtype: changeitem, border: true, region: 'center' }
                    ]
                }
            ]
        })

        this.callParent(arguments);
    }
});
Ext.define('tom_A0001_form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.A0001_form',
    id: 'A0001_form',
    initComponent: function () {
        var me = this;
       
        Ext.apply(this, {
            frame: false,
            layout: 'absolute',
            defaults: {
                xtype: 'textfield'//, readOnly: true
            },
            items: [
                {
                    x: 5, y: 5, xtype: 'datefield',
                    fieldLabel: '營業日期',
                    labelWidth: 60,
                    name: 'bdate',

                    width: 170,
                    value: new Date()
                }, {
                    x: 185, y: 5, xtype: 'datefield',
                    fieldLabel: '~', labelSeparator: '',
                    labelWidth: 10,
                    name: 'edate',

                    width: 120,
                    value: new Date()
                },
                {
                    x: 245, y: 5, xtype: 'button',
                    listeners: {
                        click: function () {
                            if (changefalg) {
                                changeitem = 'A0001_grid';

                            }
                            else {
                                changeitem = 'A0001_Chart';
                            }

                        }
                    }
                },
            ],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    {
                        text: '新增', itemId: 'I0501_add', scale: 'medium', disabled: false,//新增
                        handler: function () {
                        }
                    }, {
                        text: '修改', itemId: 'I0501_edit', scale: 'medium', disabled: true,
                        handler: function () {

                        }
                    }, {
                        text: '刪除', itemId: 'I0501_del', scale: 'medium', disabled: true,
                        handler: function () {

                        }
                    }, {
                        text: '存檔', itemId: 'I0501_save', scale: 'medium', disabled: true,///icon/checker.bmp
                        handler: function () {

                        }
                    }, {
                        text: '取消', itemId: 'I0501_cancel', scale: 'medium', disabled: true,
                        handler: function () {

                        }
                    }
                ]
            }]
        });
        this.callParent(arguments);
    }

});

Ext.define('tom_A0001_grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.A0001_grid',
    id: 'A0001_grid',
    initComponent: function () {
        var me = this;
        this.stype;
        Ext.define('SCH_A0001', {
            extend: 'Ext.data.Model',
            fields: [
                { name: 'id' },//對應Service set get
                { name: 'ig1_no' },
                { name: 'bdate' },
                { name: 'usr_no' },
                { name: 'zf1_no' },
                { name: 'ig1_memo' },
                { name: 'ig1_prc' },
                { name: 'ig1_tomemo' },
                { name: 'ig1_pctime' },
                { name: 'ig1_totime' },
                { name: 'ig1_pcmake' },
                { name: 'ig1_pcoktime' },
                { name: 'usr_no1' },
                { name: 'ig1_cmemo' },

            ]
        });
        this.store = new Ext.data.JsonStore();
        //this.store = new Ext.data.Store({
        //    pageSize: 10,
        //    model: 'SCH_I0501',
        //    proxy: {
        //        type: 'ajax',
        //        url: '../I0501/Query2',
        //        actionMethods: {
        //            read: 'POST'
        //        },
        //        reader: {
        //            type: 'json',
        //            root: 'data'
        //        }
        //    },
        //    autoLoad: false
        //});
        Ext.apply(this, {
            store: this.store,
            columns: [
                { text: '項次', dataIndex: 'id', width: 80 },
                { text: '差異帳序號', dataIndex: 'ig1_no', width: 110 },
                { text: '營收日期', dataIndex: 'bdate', width: 90, renderer: Ext.util.Format.dateRenderer('Y/m/d') },
                { text: '人員', dataIndex: 'usr_no', width: 110 },
                { text: '差異項目', dataIndex: 'zf1_no', width: 110 },
                { text: '差異原因', dataIndex: 'ig1_memo', width: 110 },
                { text: '金額', dataIndex: 'ig1_prc', width: 110 },
                { text: '處理結果', dataIndex: 'ig1_tomemo', width: 110 },
                { text: '計核組回覆日', dataIndex: 'ig1_pctime', width: 100, renderer: Ext.util.Format.dateRenderer('Y/m/d') },
                { text: '中心奉核日', dataIndex: 'ig1_totime', width: 100, renderer: Ext.util.Format.dateRenderer('Y/m/d') },
                { text: '補繳狀態', dataIndex: 'ig1_pcmake', width: 110 },
                { text: '料帳組奉核日期', dataIndex: 'ig1_pcoktime', width: 100, renderer: Ext.util.Format.dateRenderer('Y/m/d') },
                { text: '稽核人員', dataIndex: 'usr_no1', width: 80 },
                { text: '備註', dataIndex: 'ig1_cmemo', width: 150 }
            ],
            listeners: {//監聽
                select: function (t, record, index) {
                    var form = me.up('panel').down('I0501_form');
                    form.loadme(record.raw.AutoNumber);
                }
            },
            scope: this
        });
        this.callParent(arguments);
    }
});
var store = Ext.create('Ext.data.JsonStore', {
    fields: ['name', 'data'],
    data: [
        { 'name': 'metric one', 'data': 10 },
        { 'name': 'metric two', 'data': 7 },
        { 'name': 'metric three', 'data': 5 },
        { 'name': 'metric four', 'data': 2 },
        { 'name': 'metric five', 'data': 27 }
    ]
});

 Ext.create('Ext.chart.Chart', {
     alias: 'widget.A0001_Chart',
     id: 'A0001_Chart',
    renderTo: Ext.getBody(),
    width: 500,
    height: 350,
    animate: true,
    store: store,
    theme: 'Base:gradients',
    series: [{
        type: 'pie',
        angleField: 'data',
        showInLegend: true,
        tips: {
            trackMouse: true,
            width: 140,
            height: 28,
            renderer: function (storeItem, item) {
                // calculate and display percentage on hover
                var total = 0;
                store.each(function (rec) {
                    total += rec.get('data');
                });
                this.setTitle(storeItem.get('name') + ': ' + Math.round(storeItem.get('data') / total * 100) + '%');
            }
        },
        highlight: {
            segment: {
                margin: 20
            }
        },
        label: {
            field: 'name',
            display: 'rotate',
            contrast: true,
            font: '18px Arial'
        }
    }]
});