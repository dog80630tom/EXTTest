Ext.onReady(function () {
    Ext.define('Tom_2_Panel', {
        extend: 'Ext.Panel',
        id:'Tom_2_Panel',
        width: 500,
        height:500,
        alias: 'widget.Tom_2_Panel',
        defaults: {
            // applied to each contained panel
            bodyStyle: 'padding:15px'
        },
        region: 'west',
        layout: 'accordion',
        initComponent: function () {
            var Lmenu = [], i = 0, cc;
            Lmenu.push(this.treepanel1());//----帳務營收查核及差異處理作業--appacc.js

            Ext.apply(this, {
                items: Lmenu
            });
            this.callParent(arguments);
        },

    

       


        treepanel1: function () {
            this.store1 = Ext.create('Ext.data.TreeStore', {
                root: {
                    expanded: false,
                    children: [
                        {
                            id: "A00", text: "報表與統計", expanded: false,
                            children: [
                                { id: "A0001", text: "兒童新樂園營收日報表", leaf: true },
                                { id: "I0002", text: "兒童新樂園營收金額調整", leaf: true },
                                { id: "I0003", text: "兒童新樂園IC卡營收日報表", leaf: true },
                                { id: "I0004", text: "營收月報表查詢", leaf: true }
                            ]
                        }]
                }
            });
            this.tree1 = Ext.create('Ext.tree.Panel', {

                title: '料帳作業',  //帳務營收查核及差異處理作業
                width: 200,
                store: this.store1,
                rootVisible: false,
                listeners: {
                    itemclick: function (view, record, item, index, e) {
                        //console.log(index);
                        var car_main = Ext.getCmp('main1_panel');
                        if (record.raw.id.trim().length == 5) {
                            if (!car_main.setActiveTab(record.raw.id)) {
                                car_main.add(Rtab_I(record.raw.id, record.raw.text, index)).show();
                            }
                            else {
                                car_main.setActiveTab(record.raw.id);
                            }
                        }
                        
                        }
                    }
                
            });
            return this.tree1;
        },
        renderTo: Ext.getBody(),
    });
    function addTab(name, id) {
        this.ret = Ext.create('widget.' + id + '_panel', {
            title: name
           
            
        });
        return this.ret;
    }


   
    function Rtab_I(id, name, index) {
        var ret = {};

        switch (id) {
            //---I00
            case "A0001":    //-------兒童新樂園營收日報表 appacc.js
                ret = addTab(name, id);
                break;
            case "I0002":     //-------兒童新樂園營收金額調整
                ret = addTab(name, id);
                break;
            case "I0003":    //-------兒童新樂園IC卡營收日報表
                ret = addTab(name, id);
                break;
            case "I0004":    //-------營收月報表查詢
                ret = addTab(name, id);
                break;
            //---I02
            case "I0201":    //-------兒童新樂園票種販售查核 appacc.js
                ret = addTab(name, id, [{ xtype: 'I0201_panel' }]);
                break;
            case "I0202":     //-------兒童新樂園營收查核
                ret = addTab(name, id, [{ xtype: 'I0202_panel' }]);
                break;
            //---I03
            case "I0301":    //-------資料匯入
                ret = addTab(name, id);
                break;
            case "I0302":    //-------資料查詢
                ret = addTab(name, id);
                break;
            case "I0303":    //-------偽幣偽鈔資料查詢
                ret = addTab(name, id);
                break;
            //---I04
            case "I0401":    //-------開立差異帳
                ret = addTab(name, id);
                break;
            case "I0402":    //-------帳務差異項查詢
                ret = addTab(name, id);
                break;
            case "I0403":    //-------帳務差異項奉核
                ret = addTab(name, id);
                break;
            case "I0404":    //-------快捷鍵資料維護
                ret = addTab(name, id);
                break;
            //---I05
            case "I0501":    //-------歷史資料分析及查詢
                ret = addTab(name, id);
                break;
        }
        return ret;
    }
});