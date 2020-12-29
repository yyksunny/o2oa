/**
 * StatementInfor 查询配置信息
 * @typedef {Object} StatementInfor
 * @example
 * {
    "query": "26d21c71-5114-4496-8ca1-a69e56324841", //所属应用id
    "id": "ee334220-66d3-4f78-afce-8ccf6b995c8c", //查询id
    "name": "测试查询", //名称
    "alias": "", //别名
    "description": "", //描述
    "table": "", //自建表的id
    "entityClassName": "com.x.processplatform.core.entity.content.Task", //系统表表名
    "entityCategory": "official", //表类型 official(系统表) 或 dynamic(自建表)
    "format": "jpql", //语句类型,jpql 或者 script(脚本)
    "type": "select", //select/update/delete
    "data": "SELECT o FROM Task o where o.person = :person", //查询语句
    "countData": "SELECT count(o.id) FROM Task o where o.person = :person", //总数语句
    "countScriptText" : "", //总数语句脚本
    "scriptText" : "", //查询语句脚本
    "viewJson": { ... } //视图相关信息
}
 */

/**
 * ViewInfor 视图配置信息
 * @typedef {Object} ViewInfor
 * @example
 * {
      "application": "db9fc893-7dbc-4e0f-a617-99089d2c6323", //视图所在应用
      "query": "db9fc893-7dbc-4e0f-a617-99089d2c6323",  //视图所在应用，同application
      "name": "视图自定义测试", //视图名称
      "viewName": "视图自定义测试",  //视图名称，同name
      "isExpand": "no",  //如果有分类，默认是否展开开
      "id": "705ce967-2f9c-425c-8873-3bd729249e1d", //视图id
      "alias": "", //视图别名
      "description": "",  //视图描述
      "display": true, //视图是否显示
      "type": "cms", //视图嵌入的数据类型, cms 或 process
      "count": 2000, //最多返回2000条
      "pageSize": 20, //每页的条数
      "createTime": "2019-09-02 10:18:27",
      "updateTime": "2020-03-26 15:53:03"
    }
 */

/**
 * @readonly
 * @enum {String} ViewFilterDataLogic
 * @property {String} or color for a white square or piece.
 * @property {String} and color for a black square or piece.
 */

/**
 * ViewFilter 视图过滤条件
 * @typedef {Object} ViewFilter
 * @property {String} logic - 可选值：“and”或者“or”，表示和前一个条件的逻辑运算关系。
 * @property {String} path - 要过滤的data数据的路径。
 * @property {String} comparison - 比较运算符，可选值：<br/>
 * <div style='padding-left:150px;'>
 * <b>equals</b> 或 <b>==</b> 或：表示等于。<br/>
 * <b>notEquals</b> 或 <b>!=</b> ：表示不等于。<br/>
 * <b>greaterThan</b> 或 <b>></b> ：表示大于。<br/>
 * <b>greaterThanOrEqualTo</b> 或 <b>=></b> ：表示大于或等于。<br/>
 * <b>lessThan</b> 或 <b><</b> ：表示小于。<br/>
 * <b>lessThanOrEqualTo</b> 或 <b><=</b> ：表示小于等于。<br/>
 * <b>like</b> ：表示部分匹配。<br/>
 * <b>notLike</b> ：表示不匹配。<br/>
 * <b>range</b> ：表示一定的范围。<br/>
 * <b>in</b> ：表示在某几个特定的值当中。<br/>
 * </div>
 * @property {String} formatType  - 过滤数据的数据类型，可选值：
 * <div style='padding-left:150px;'>
 * <b>textValue</b> ：文本。<br/>
 * <b>numberValue</b> ：数字。<br/>
 * <b>dateTimeValue</b> ：日期时间。<br/>
 * <b>booleanValue</b> ：布尔值。<br/>
 * </div>
 * @property {(String|Number|Boolean)} value - 过滤的值，根据formatType提供匹配的数据类型的值，如果是dateTimeValue数据类型，则提供日期格式的字符串，格式如“YYYY-MM-DD HH:MM:SS”。当comparison值为“range”时，此值表示范围中的第一个值。当comparison值为“in”时，多个值用半角逗号","分开。
 * @property {(String|Number|Boolean)} otherValue  - 当comparison值为“range”时，此值表示范围中的第二个值。当comparison值不为“range”时，忽略此值。
 * @example
 *  {
 *    "logic":"and",
 *    "path":"$work.title",
 *    "comparison":"like",
 *    "value":"7月",
 *    "formatType":"textValue"
 * }
 */

/**
 * StatementFilter 查询视图的过滤条件
 * @typedef {Object} StatementFilter
 * @property {String} path - 要过滤的data数据的路径，形式为查询语句中的"表别名.字段名"，如"o.title"。
 * @property {String} comparison - 比较运算符，可选值：<br/>
 * <div style='padding-left:150px;'>
 * <b>equals</b> 或 <b>==</b> 或：表示等于。<br/>
 * <b>notEquals</b> 或 <b>!=</b> ：表示不等于。<br/>
 * <b>greaterThan</b> 或 <b>></b> ：表示大于。<br/>
 * <b>greaterThanOrEqualTo</b> 或 <b>=></b> ：表示大于或等于。<br/>
 * <b>lessThan</b> 或 <b><</b> ：表示小于。<br/>
 * <b>lessThanOrEqualTo</b> 或 <b><=</b> ：表示小于等于。<br/>
 * <b>like</b> ：表示部分匹配。<br/>
 * <b>notLike</b> ：表示不匹配。<br/>
 * </div>
 * @property {String} formatType  - 过滤数据的数据类型，可选值：
 * <div style='padding-left:150px;'>
 * <b>textValue</b> ：文本。<br/>
 * <b>numberValue</b> ：数字。<br/>
 * <b>dateTimeValue</b> ：日期时间。<br/>
 * <b>booleanValue</b> ：布尔值。<br/>
 * </div>
 * @property {(String|Number|Boolean)} value - 过滤的值，根据formatType提供匹配的数据类型的值，如果是dateTimeValue数据类型，则提供日期格式的字符串，格式如“YYYY-MM-DD HH:MM:SS”。
 * @example
 *{
 *    "path":"o.title",
 *    "comparison":"like",
 *    "value":"关于",
 *    "formatType":"textValue"
 *}
 */

/**
 * StatementParameter  查询视图的过滤条件值参数，对查询语句where语句的形如":person"的参数部分进行赋值<br/>
 * 有以下规则：<br/>
 * 1、参数名称为下列值时，后台自动赋值：person(当前人),identityList(当前人身份列表),unitList(当前人所在直接组织), unitAllList(当前人所在所有组织), groupList(当前人所在群组)。<br/>
 * 2、如果对比的是日期，需要传入 Date 类型。<br/>
 * 3、如果运算符用的是 like, noLike，模糊查询，值为 "%{value}%"。
 * @typedef {Object} StatementParameter
 * @example
 * {
 *    "person" : "",
 *    "startTime" : (new Date("2020-01-01")),
 *    "applicationName" : "%test%",
 *    "processName" : "test流程" //其他写确定的值
 * }
 */


MWF.xScript = MWF.xScript || {};
MWF.xScript.ViewEnvironment = function (ev) {
    var _form = ev.view;

    this.library = COMMON;
    //this.library.version = "4.0";

    //data
    // var getJSONData = function (jData) {
    //     return new MWF.xScript.JSONData(jData, function (data, key, _self) {
    //         var p = { "getKey": function () { return key; }, "getParent": function () { return _self; } };
    //         while (p && !_forms[p.getKey()]) p = p.getParent();
    //         if (p) if (p.getKey()) if (_forms[p.getKey()]) _forms[p.getKey()].resetData();
    //     });
    // };
    // this.setData = function (data) {
    //     this.data = getJSONData(data);
    //     this.data.save = function (callback) {
    //         var formData = {
    //             "data": data,
    //             "sectionList": _form.getSectionList()
    //         };
    //         form.workAction.saveData(function (json) { if (callback) callback(); }.bind(this), null, work.id, jData);
    //     }
    // };
    // this.setData(_data);

    //dict
    this.Dict = MWF.xScript.createDict();
    //org
    var orgActions = null;
    var getOrgActions = function () {
        if (!orgActions) {
            MWF.require("MWF.xScript.Actions.UnitActions", null, false);
            orgActions = new MWF.xScript.Actions.UnitActions();
        }
    };
    var getNameFlag = function (name) {
        var t = typeOf(name);
        if (t === "array") {
            var v = [];
            name.each(function (id) {
                v.push((typeOf(id) === "object") ? (id.distinguishedName || id.id || id.unique || id.name) : id);
            });
            return v;
        } else {
            return [(t === "object") ? (name.distinguishedName || name.id || name.unique || name.name) : name];
        }
    };
    this.org = {
        //群组***************
        //获取群组--返回群组的对象数组
        getGroup: function(name, async){
            getOrgActions();
            var data = {"groupList": getNameFlag(name)};

            var v = null;

            var cb = function(json){
                v = json.data;
                v = (v && v.length===1) ? v[0] : v
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listGroup(data, cb, null, !!async);
            return (!!async) ? promise : v;

            // var v = null;
            // orgActions.listGroup(data, function(json){v = json.data;}, null, false);
            // return (v && v.length===1) ? v[0] : v;
        },
        //查询下级群组--返回群组的对象数组
        //nested  布尔  true嵌套下级；false直接下级；默认false；
        listSubGroup: function(name, nested, async){
            getOrgActions();
            var data = {"groupList": getNameFlag(name)};

            var v = null;
            // var cb = ((async && o2.typeOf(async)=="function") ? (async.isAG ? async : async.ag()) : null) || function(json){
            //     v = json.data;
            //     return v;
            // }.ag().catch(function(json){ return json; });
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise;
            if (nested){
                promise = orgActions.listSubGroupNested(data, cb, null, !!async);
            }else{
                promise = orgActions.listSubGroupDirect(data, cb, null, !!async);
            }
            return (!!async) ? promise : v;

            // var v = null;
            // if (nested){
            //     orgActions.listSubGroupNested(data, function(json){v = json.data;}, null, false);
            // }else{
            //     orgActions.listSubGroupDirect(data, function(json){v = json.data;}, null, false);
            // }
            // return v;
        },
        //查询上级群组--返回群组的对象数组
        //nested  布尔  true嵌套上级；false直接上级；默认false；
        listSupGroup:function(name, nested, async){
            getOrgActions();
            var data = {"groupList": getNameFlag(name)};

            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise
            if (nested){
                var promise = orgActions.listSupGroupNested(data, cb, null, !!async);
            }else{
                var promise = orgActions.listSupGroupDirect(data, cb, null, !!async);
            }
            return (!!async) ? promise : v;
            // var v = null;
            // if (nested){
            //     orgActions.listSupGroupNested(data, function(json){v = json.data;}, null, false);
            // }else{
            //     orgActions.listSupGroupDirect(data, function(json){v = json.data;}, null, false);
            // }
            // return v;
        },
        //人员所在群组（嵌套）--返回群组的对象数组
        listGroupWithPerson:function(name, async){
            getOrgActions();
            var data = {"personList": getNameFlag(name)};

            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listGroupWithPerson(data, cb, null, !!async);
            return (!!async) ? promise : v;
            // var v = null;
            // orgActions.listGroupWithPerson(data, function(json){v = json.data;}, null, false);
            // return v;
        },
        //群组是否拥有角色--返回true, false
        groupHasRole: function(name, role, async){
            getOrgActions();
            nameFlag = (typeOf(name)==="object") ? (name.distinguishedName || name.id || name.unique || name.name) : name;
            var data = {"group":nameFlag,"roleList":getNameFlag(role)};

            var v = false;
            var cb = function(json){
                v = json.data.value;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.groupHasRole(data, cb, null, !!async);
            return (!!async) ? promise : v;

            // var v = false;
            // orgActions.groupHasRole(data, function(json){v = json.data.value;}, null, false);
            // return v;
        },

        //角色***************
        //获取角色--返回角色的对象数组
        getRole: function(name, async){
            getOrgActions();
            var data = {"roleList": getNameFlag(name)};

            var v = null;
            var cb = function(json){
                v = json.data;
                v = (v && v.length===1) ? v[0] : v;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listRole(data, cb, null, !!async);
            return (!!async) ? promise : v;

            // var v = null;
            // orgActions.listRole(data, function(json){v = json.data;}, null, false);
            // return (v && v.length===1) ? v[0] : v;
        },
        //人员所有角色（嵌套）--返回角色的对象数组
        listRoleWithPerson:function(name, async){
            getOrgActions();
            var data = {"personList": getNameFlag(name)};

            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listRoleWithPerson(data, cb, null, !!async);
            return (!!async) ? promise : v;
            // var v = null;
            // orgActions.listRoleWithPerson(data, function(json){v = json.data;}, null, false);
            // return v;
        },

        //人员***************
        //人员是否拥有角色--返回true, false
        personHasRole: function(name, role, async){
            getOrgActions();
            nameFlag = (typeOf(name)==="object") ? (name.distinguishedName || name.id || name.unique || name.name) : name;
            var data = {"person":nameFlag,"roleList":getNameFlag(role)};

            var v = false;
            var cb = function(json){
                v = json.data.value;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listRoleWithPerson(data, cb, null, !!async);
            return (!!async) ? promise : v;

            // var v = false;
            // orgActions.personHasRole(data, function(json){v = json.data.value;}, null, false);
            // return v;
        },
        //获取人员--返回人员的对象数组
        getPerson: function(name, async){
            getOrgActions();
            var data = {"personList": getNameFlag(name)};

            var v = null;
            var cb = function(json){
                v = json.data;
                v = (v && v.length===1) ? v[0] : v;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listPerson(data, cb, null, !!async);
            return (!!async) ? promise : v;
            // var v = null;
            // orgActions.listPerson(data, function(json){v = json.data;}, null, false);
            // return (v && v.length===1) ? v[0] : v;
        },
        //查询下级人员--返回人员的对象数组
        //nested  布尔  true嵌套下级；false直接下级；默认false；
        listSubPerson: function(name, nested, async){
            getOrgActions();
            var data = {"personList": getNameFlag(name)};

            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise;
            if (nested){
                promise = orgActions.listPersonSubNested(data, cb, null, !!async);
            }else{
                promise = orgActions.listPersonSubDirect(data, cb, null, !!async);
            }
            return (!!async) ? promise : v;
        },
        //查询上级人员--返回人员的对象数组
        //nested  布尔  true嵌套上级；false直接上级；默认false；
        listSupPerson: function(name, nested, async){
            getOrgActions();
            var data = {"personList": getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise;
            if (nested){
                promise = orgActions.listPersonSupNested(data, cb, null, !!async);
            }else{
                promise = orgActions.listPersonSupDirect(data, cb, null, !!async);
            }
            return (!!async) ? promise : v;
        },
        //获取群组的所有人员--返回人员的对象数组
        listPersonWithGroup: function(name, async){
            getOrgActions();
            var data = {"groupList": getNameFlag(name)};

            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listPersonWithGroup(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //获取角色的所有人员--返回人员的对象数组
        listPersonWithRole: function(name, async){
            getOrgActions();
            var data = {"roleList": getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise
            promise = orgActions.listPersonWithRole(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //获取身份的所有人员--返回人员的对象数组
        listPersonWithIdentity: function(name, async){
            getOrgActions();
            var data = {"identityList": getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listPersonWithIdentity(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //获取身份的所有人员--返回人员的对象数组或人员对象
        getPersonWithIdentity: function(name, async){
            getOrgActions();
            var data = {"identityList": getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                v =  (v && v.length===1) ? v[0] : v;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listPersonWithIdentity(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //查询组织成员的人员--返回人员的对象数组
        //nested  布尔  true嵌套的所有成员；false直接成员；默认false；
        listPersonWithUnit: function(name, nested, async){
            getOrgActions();
            var data = {"unitList": getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise;
            if (nested){
                promise = orgActions.listPersonWithUnitNested(data, cb, null, !!async);
            }else{
                promise = orgActions.listPersonWithUnitDirect(data, cb, null, !!async);
            }
            return (!!async) ? promise : v;
        },
        //根据属性查询人员--返回人员的对象数组
        //name  string 属性名
        //value  string 属性值
        listPersonWithAttribute: function(name, value, async){
            getOrgActions();
            var data = {"name": name, "attribute": value};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listPersonWithAttribute(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //根据属性查询人员--返回人员的全称数组
        //name  string 属性名
        //value  string 属性值
        listPersonNameWithAttribute: function(name, value, async){
            getOrgActions();
            var data = {"name": name, "attribute": value};
            var v = null;
            var cb = function(json){
                v = json.data.personList;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listPersonWithAttributeValue(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },

        //人员属性************
        //添加人员属性值(在属性中添加values值，如果没有此属性，则创建一个)
        appendPersonAttribute: function(person, attr, values, success, failure, async){
            getOrgActions();
            var personFlag = (typeOf(person)==="object") ? (person.distinguishedName || person.id || person.unique || person.name) : person;
            var data = {"attributeList":values,"name":attr,"person":personFlag};

            var cb = function(json){
                if (success) return success(json);
            }.ag().catch(function(xhr, text, error){
                if (failure) return failure(xhr, text, error);
            });

            orgActions.appendPersonAttribute(data, cb, null, !!async);
        },
        //设置人员属性值(将属性值修改为values，如果没有此属性，则创建一个)
        setPersonAttribute: function(person, attr, values, success, failure, async){
            getOrgActions();
            var personFlag = (typeOf(person)==="object") ? (person.distinguishedName || person.id || person.unique || person.name) : person;
            var data = {"attributeList":values,"name":attr,"person":personFlag};

            var cb = function(json){
                if (success) return success(json);
            }.ag().catch(function(xhr, text, error){
                if (failure) return failure(xhr, text, error);
            });

            orgActions.setPersonAttribute(data, cb, null, !!async);
        },
        //获取人员属性值
        getPersonAttribute: function(person, attr, async){
            getOrgActions();
            var personFlag = (typeOf(person)==="object") ? (person.distinguishedName || person.id || person.unique || person.name) : person;
            var data = {"name":attr,"person":personFlag};
            var v = null;
            var cb = function(json){
                v = json.data.attributeList;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.getPersonAttribute(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //列出人员所有属性的名称
        listPersonAttributeName: function(name, async){
            getOrgActions();
            var data = {"personList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data.nameList;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listPersonAttributeName(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //列出人员的所有属性
        listPersonAllAttribute: function(name, async){
            getOrgActions();
            var data = {"personList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listPersonAllAttribute(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },

        //身份**********
        //获取身份
        getIdentity: function(name, async){
            getOrgActions();
            var data = {"identityList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                v = (v && v.length===1) ? v[0] : v;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listIdentity(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //列出人员的身份
        listIdentityWithPerson: function(name, async){
            getOrgActions();
            var data = {"personList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listIdentityWithPerson(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //查询组织成员身份--返回身份的对象数组
        //nested  布尔  true嵌套的所有成员；false直接成员；默认false；
        listIdentityWithUnit: function(name, nested, async){
            getOrgActions();
            var data = {"unitList": getNameFlag(name)};
            var v = null;

            // var cb = function(json){
            //     v = json.data;
            //     if (async && o2.typeOf(async)=="function") return async(v);
            //     return v;
            // }.ag().catch(function(json){ return json; });

            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var method = (nested) ? "listIdentityWithUnitNested" : "listIdentityWithUnitDirect";
            var promise = orgActions[method](data, cb, null, !!async);
            promise.name = "org";

            //
            // if (nested){
            //     orgActions.listIdentityWithUnitNested(data, cb, null, !!async);
            // }else{
            //     orgActions.listIdentityWithUnitDirect(data, cb, null, !!async);
            // }
            return (!!async) ? promise : v;
        },

        //组织**********
        //获取组织
        getUnit: function(name, async){
            getOrgActions();
            var data = {"unitList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                v = (v && v.length===1) ? v[0] : v;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listUnit(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //查询组织的下级--返回组织的对象数组
        //nested  布尔  true嵌套下级；false直接下级；默认false；
        listSubUnit: function(name, nested, async){
            getOrgActions();
            var data = {"unitList": getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise;
            if (nested){
                promise = orgActions.listUnitSubNested(data, cb, null, !!async);
            }else{
                promise = orgActions.listUnitSubDirect(data, cb, null, !!async);
            }
            return (!!async) ? promise : v;
        },
        //查询组织的上级--返回组织的对象数组
        //nested  布尔  true嵌套上级；false直接上级；默认false；
        //async 布尔 true异步请求
        listSupUnit: function(name, nested, async){
            getOrgActions();
            var data = {"unitList": getNameFlag(name)};

            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise;
            if (nested){
                promise = orgActions.listUnitSupNested(data, cb, null, !!async);
            }else{
                promise = orgActions.listUnitSupDirect(data, cb, null, !!async);
            }
            return (!!async) ? promise : v;

            // if (callback){
            //     if (nested){
            //         orgActions.listUnitSupNested(data, function(json){v = json.data; o2.runCallback(callback, "success", [v], this);});
            //     }else{
            //         orgActions.listUnitSupDirect(data, function(json){v = json.data; o2.runCallback(callback, "success", [v], this);});
            //     }
            // }else{
            //     var v = null;
            //     if (nested){
            //         orgActions.listUnitSupNested(data, function(json){v = json.data;}, null, false);
            //     }else{
            //         orgActions.listUnitSupDirect(data, function(json){v = json.data;}, null, false);
            //     }
            //     return v;
            // }
        },
        //根据个人身份获取组织
        //flag 数字    表示获取第几层的组织
        //     字符串  表示获取指定类型的组织
        //     空     表示获取直接所在的组织
        getUnitByIdentity: function(name, flag, async){
            getOrgActions();
            var getUnitMethod = "current";
            var v;
            if (flag){
                if (typeOf(flag)==="string") getUnitMethod = "type";
                if (typeOf(flag)==="number") getUnitMethod = "level";
            }

            var cb;
            var promise;
            switch (getUnitMethod){
                case "current":
                    var data = {"identityList":getNameFlag(name)};

                    // var cb = ((async && o2.typeOf(async)=="function") ? (async.isAG ? async : async.ag()) : null) || function(json){
                    //     v = json.data;  v=(v&&v.length===1) ? v[0] : v; return v;
                    // }.ag().catch(function(json){ return json; });


                    cb = function(json){
                        v = json.data;  v=(v&&v.length===1) ? v[0] : v;
                        if (async && o2.typeOf(async)=="function") return async(v);
                        return v;
                    };


                    promise = orgActions.listUnitWithIdentity(data, cb, null, !!async);
                    break;
                case "type":
                    var data = {"identity":(typeOf(name)==="object") ? (name.distinguishedName || name.id || name.unique || name.name) : name,"type":flag};

                    cb = function(json){
                        v = json.data;
                        if (async && o2.typeOf(async)=="function") return async(v);
                        return v;
                    };

                    // var cb = ((async && o2.typeOf(async)=="function") ? (async.isAG ? async : async.ag()) : null) || function(json){
                    //     v = json.data;  return v;
                    // }.ag().catch(function(json){ return json; });

                    promise = orgActions.getUnitWithIdentityAndType(data, cb, null, !!async);
                    break;
                case "level":
                    var data = {"identity":(typeOf(name)==="object") ? (name.distinguishedName || name.id || name.unique || name.name) : name,"level":flag};

                    cb = function(json){
                        v = json.data;  v=(v&&v.length===1) ? v[0] : v;
                        if (async && o2.typeOf(async)=="function") return async(v);
                        return v;
                    };

                    // var cb = ((async && o2.typeOf(async)=="function") ? (async.isAG ? async : async.ag()) : null) || function(json){
                    //     v = json.data;  return v;
                    // }.ag().catch(function(json){ return json; });

                    promise = orgActions.getUnitWithIdentityAndLevel(data, cb, null, !!async);
                    break;
            }
            return (!!async) ? promise : v;
        },
        //列出身份所在组织的所有上级组织
        listAllSupUnitWithIdentity: function(name, async){
            getOrgActions();
            var data = {"identityList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listUnitSupNestedWithIdentity(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //获取人员所在的所有组织
        listUnitWithPerson: function(name, async){
            getOrgActions();
            var data = {"personList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listUnitWithPerson(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //列出人员所在组织的所有上级组织
        listAllSupUnitWithPerson: function(name, async){
            getOrgActions();
            var data = {"personList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listUnitSupNestedWithPerson(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //根据组织属性，获取所有符合的组织
        listUnitWithAttribute: function(name, attribute, async){
            getOrgActions();
            var data = {"name":name,"attribute":attribute};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            promise = orgActions.listUnitWithAttribute(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //根据组织职务，获取所有符合的组织
        listUnitWithDuty: function(name, id, async){
            getOrgActions();
            var data = {"name":name,"identity":(typeOf(id)==="object") ? (id.distinguishedName || id.id || id.unique || id.name) : id};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listUnitWithDuty(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },

        //组织职务***********
        //获取指定的组织职务的身份
        getDuty: function(duty, id, async){
            getOrgActions();
            var data = {"name":duty,"unit":(typeOf(id)==="object") ? (id.distinguishedName || id.id || id.unique || id.name) : id};
            var v = null;

            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.getDuty(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //获取身份的所有职务名称
        listDutyNameWithIdentity: function(name, async){
            getOrgActions();
            var data = {"identityList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data.nameList;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listDutyNameWithIdentity(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //获取组织的所有职务名称
        listDutyNameWithUnit: function(name, async){
            getOrgActions();
            var data = {"unitList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data.nameList;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listDutyNameWithUnit(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //获取组织的所有职务
        listUnitAllDuty: function(name, async){
            getOrgActions();
            var data = {"unitList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listUnitAllDuty(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //列出顶层组织
        listTopUnit: function(async){
            var action = MWF.Actions.get("x_organization_assemble_control");
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = action.listTopUnit(cb, null, !!async);
            return (!!async) ? promise : v;
        },

        //组织属性**************
        //添加组织属性值(在属性中添加values值，如果没有此属性，则创建一个)
        appendUnitAttribute: function(unit, attr, values, success, failure, async){
            getOrgActions();
            var unitFlag = (typeOf(unit)==="object") ? (unit.distinguishedName || unit.id || unit.unique || unit.name) : unit;
            var data = {"attributeList":values,"name":attr,"unit":unitFlag};

            var cb = function(json){
                if (success) return success(json);
            }.ag().catch(function(xhr, text, error){
                if (failure) return failure(xhr, text, error);
            });

            orgActions.appendPersonAttribute(data, cb, null, !!async);

            // orgActions.appendUnitAttribute(data, function(json){
            //     if (json.data.value){
            //         if (success) success();
            //     }else{
            //         if (failure) failure(null, "", "append values failed");
            //     }
            // }, function(xhr, text, error){
            //     if (failure) failure(xhr, text, error);
            // }, false);
        },
        //设置组织属性值(将属性值修改为values，如果没有此属性，则创建一个)
        setUnitAttribute: function(unit, attr, values, success, failure, async){
            getOrgActions();
            var unitFlag = (typeOf(unit)==="object") ? (unit.distinguishedName || unit.id || unit.unique || unit.name) : unit;
            var data = {"attributeList":values,"name":attr,"unit":unitFlag};

            var cb = function(json){
                if (success) return success(json);
            }.ag().catch(function(xhr, text, error){
                if (failure) return failure(xhr, text, error);
            });
            orgActions.setUnitAttribute(data, cb, null, !!async);

            // orgActions.setUnitAttribute(data, function(json){
            //     if (json.data.value){
            //         if (success) success();
            //     }else{
            //         if (failure) failure(null, "", "append values failed");
            //     }
            // }, function(xhr, text, error){
            //     if (failure) failure(xhr, text, error);
            // }, false);
        },
        //获取组织属性值
        getUnitAttribute: function(unit, attr, async){
            getOrgActions();
            var unitFlag = (typeOf(unit)==="object") ? (unit.distinguishedName || unit.id || unit.unique || unit.name) : unit;
            var data = {"name":attr,"unit":unitFlag};
            var v = null;
            var cb = function(json){
                v = json.data.attributeList;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.getUnitAttribute(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //列出组织所有属性的名称
        listUnitAttributeName: function(name, async){
            getOrgActions();
            var data = {"unitList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data.nameList;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listUnitAttributeName(data, cb, null, !!async);
            return (!!async) ? promise : v;
        },
        //列出组织的所有属性
        listUnitAllAttribute: function(name, async){
            getOrgActions();
            var data = {"unitList":getNameFlag(name)};
            var v = null;
            var cb = function(json){
                v = json.data;
                if (async && o2.typeOf(async)=="function") return async(v);
                return v;
            };

            var promise = orgActions.listUnitAllAttribute(data, cb, null, !!async);
            return (!!async) ? promise : v;
        }
    };

    this.Action = (function () {
        var actions = [];
        return function (root, json) {
            var action = actions[root] || (actions[root] = new MWF.xDesktop.Actions.RestActions("", root, ""));
            action.getActions = function (callback) {
                if (!this.actions) this.actions = {};
                Object.merge(this.actions, json);
                if (callback) callback();
            };
            this.invoke = function (option) {
                action.invoke(option)
            }
        }
    })();
    this.service = {
        "jaxwsClient": {},
        "jaxrsClient": {}
    };

    var lookupAction = null;
    var getLookupAction = function (callback) {
        if (!lookupAction) {
            MWF.require("MWF.xDesktop.Actions.RestActions", function () {
                lookupAction = new MWF.xDesktop.Actions.RestActions("", "x_processplatform_assemble_surface", "");
                lookupAction.getActions = function (actionCallback) {
                    this.actions = {
                        //"lookup": {"uri": "/jaxrs/view/flag/{view}/application/flag/{application}"},
                        //"getView": {"uri": "/jaxrs/view/{id}/design"}
                        "lookup": { "uri": "/jaxrs/queryview/flag/{view}/application/flag/{application}/execute", "method": "PUT" },
                        "getView": { "uri": "/jaxrs/queryview/flag/{view}/application/flag/{application}" }
                    };
                    if (actionCallback) actionCallback();
                }
                if (callback) callback();
            });
        } else {
            if (callback) callback();
        }
    };

    /**
     * 你可以通过view对象，获取视图数据或选择视图数据。<br/>
     * @module view
     * @example
     * //您可以在流程表单、内容管理表单或门户页面中，通过this来获取view对象，如下：
     * var view = this.view;
     */
    this.view = {
        /**
         * 获取指定视图的数据。
         * @method lookup
         * @static
         * @param {Object} view - 要访问的视图信息。数据格式如下：<br/>
         * <caption>以下的filter参数参考<a href='global.html#ViewFilter'>ViewFilter</a></caption>
         * <pre><code class='language-js'>
         * {
         *  "view" : "testView", //（String）必选，视图的名称、别名或ID
         *  "application" : "test数据中心应用", //（String）必选，视图所在数据应用的名称、别名或ID
         *  "filter": [ //（Array of Object）可选，对视图进行过滤的条件。json数组格式，每个数组元素描述一个过滤条件。
         *       {
         *           "logic":"and",
         *           "path":"$work.title",
         *           "comparison":"like",
         *           "value":"7月",
         *           "formatType":"textValue"
         *       }
         *  ]
         * }
         * </pre></code>
         * @param {Function} callback - 访问成功后的回调函数
         * @param {Boolean} [async] - 同步或异步调用。true：异步；false：同步。默认为true。
         * @example
         * this.view.lookup(view, callback, async);
         * @example
         * //获取“财务管理”应用中“报销审批数据”视图中的数据
         * //过滤条件为标题（$work.title）包含包含（like））“7月”。
         * this.view.lookup({
         *   "view": "报销审批数据",
         *   "application": "财务管理",
         *   "filter": [
         *       {
         *           "logic":"and",
         *           "path":"$work.title",
         *           "comparison":"like",
         *           "value":"7月",
         *           "formatType":"textValue"
         *       }
         *   ]
         *}, function(data){
         *   var result = data.grid; //得到过滤后的数据
         *   //......
         *});
         * @example
         * //获取“财务管理”应用中“报销审批数据”视图中的数据
         * //过滤条件为标题（$work.title）包含包含（like））“7月”，并且总金额大于500小于5000
         * this.view.lookup({
         *   "view": "报销审批数据",
         *   "application": "财务管理",
         *   "filter": [
         *       {
         *           "logic":"and",
         *           "path":"$work.title",
         *           "comparison":"like",
         *           "value":"7月",
         *           "formatType":"textValue"
         *       },
         *       {
         *           "logic":"and",
         *           "path":"amount",
         *           "comparison":"range",
         *           "value":500,
         *           "otherValue":5000,
         *           "formatType":"numberValue"
         *       },
         *   ]
         *}, function(data){
         *   var result = data.grid; //得到过滤后的数据
         *   //......
         *});
         */
        "lookup": function (view, callback, async) {
            var filterList = { "filterList": (view.filter || null) };
            MWF.Actions.get("x_query_assemble_surface").loadView(view.view, view.application, filterList, function (json) {
                var data = {
                    "grid": json.data.grid || json.data.groupGrid,
                    "groupGrid": json.data.groupGrid
                };
                if (callback) callback(data);
            }, null, async);
        },

        "lookupV1": function (view, callback) {
            getLookupAction(function () {
                lookupAction.invoke({
                    "name": "lookup", "async": true, "parameter": { "view": view.view, "application": view.application }, "success": function (json) {
                        var data = {
                            "grid": json.data.grid,
                            "groupGrid": json.data.groupGrid
                        };
                        if (callback) callback(data);
                    }.bind(this)
                });
            }.bind(this));
        },

        /**
         * 通过视图进行数据选择。
         * @method select
         * @static
         * @param {Object} view - 要访问的视图信息。数据格式如下：<br/>
         * <caption>以下的filter参数参考<a href='global.html#ViewFilter'>ViewFilter</a></caption>
         * <pre><code class='language-js'>
         * {
         *  "view" : "testView", //（String）必选，视图的名称、别名或ID
         *  "application" : "test数据中心应用", //（String）必选，视图所在数据应用的名称、别名或ID
         *  "isTitle" : true, //（Boolean）可选，是否显示视图标题。默认true
         *  "isMulti" : true,  //（Boolean）可选，是否允许多选。默认true
         *  "width" : 700, //（Number）可选，选择框的宽度。默认700
         *  "height" : 400,  //（Number）可选，选择框的高度。默认400
         *  "caption" : "标题", //（String）可选，选择框的标题
         *  "filter": [ //（Array of Object）可选，对视图进行过滤的条件。json数组格式，每个数组元素描述一个过滤条件。
         *       {
         *           "logic":"and",
         *           "path":"$work.title",
         *           "comparison":"like",
         *           "value":"7月",
         *           "formatType":"textValue"
         *       }
         *  ]
         * }
         * </pre></code>
         * @param {Function} callback - 必选，当选择完成，点击“确定”之后的回调函数。
         * @example
         * this.view.select(view, callback);
         * @example
         * this.view.select({
         *    "application": "物业材料",  //数据中心中的应用
         *    "view": "物业材料视图",     //视图的名称
         *    "isMulti": false,           //只允许单选
         * }, function(items) {
         *    //如果选择了某个数据，将数据赋值给表单输入框
         *    if (items.length) {
         *        //物料名称，表单中输入框名为“materialName”， 视图中列的名称为“ylmc”
         *        this.data.materialName = items[0].data.ylmc;
         *        //规格，表单中输入框名为“specification”， 视图中列的名称为“gg”
         *        this.data.specification = items[0].data.gg;
         *        //单价，表单中输入框名为“price”， 视图中列的名称为“dj”
         *        this.data.price = items[0].data.dj;
         *    }
         * }.bind(this));
         */
        "select": function (view, callback, options) {
            if (view.view) {
                var viewJson = {
                    "application": view.application || _form.json.application,
                    "viewName": view.view || "",
                    "isTitle": (view.isTitle === false) ? "no" : "yes",
                    "select": (view.isMulti === false) ? "single" : "multi",
                    "filter": view.filter
                };
                if (!options) options = {};
                options.width = view.width;
                options.height = view.height;
                options.title = view.caption;

                var width = options.width || "700";
                var height = options.height || "400";

                if (layout.mobile) {
                    var size = document.body.getSize();
                    width = size.x;
                    height = size.y;
                    options.style = "viewmobile";
                }
                width = width.toInt();
                height = height.toInt();

                var size = _form.app.content.getSize();
                var x = (size.x - width) / 2;
                var y = (size.y - height) / 2;
                if (x < 0) x = 0;
                if (y < 0) y = 0;
                if (layout.mobile) {
                    x = 20;
                    y = 0;
                }

                var _self = this;
                MWF.require("MWF.xDesktop.Dialog", function () {
                    var dlg = new MWF.xDesktop.Dialog({
                        "title": options.title || "select view",
                        "style": options.style || "view",
                        "top": y,
                        "left": x - 20,
                        "fromTop": y,
                        "fromLeft": x - 20,
                        "width": width,
                        "height": height,
                        "html": "<div style='height: 100%;'></div>",
                        "maskNode": _form.app.content,
                        "container": _form.app.content,
                        "buttonList": [
                            {
                                "text": MWF.LP.process.button.ok,
                                "action": function () {
                                    //if (callback) callback(_self.view.selectedItems);
                                    if (callback) callback(_self.view.getData());
                                    this.close();
                                }
                            },
                            {
                                "text": MWF.LP.process.button.cancel,
                                "action": function () { this.close(); }
                            }
                        ]
                    });
                    dlg.show();

                    if (layout.mobile) {
                        var backAction = dlg.node.getElement(".MWF_dialod_Action_back");
                        var okAction = dlg.node.getElement(".MWF_dialod_Action_ok");
                        if (backAction) backAction.addEvent("click", function (e) {
                            dlg.close();
                        }.bind(this));
                        if (okAction) okAction.addEvent("click", function (e) {
                            //if (callback) callback(this.view.selectedItems);
                            if (callback) callback(this.view.getData());
                            dlg.close();
                        }.bind(this));
                    }

                    MWF.xDesktop.requireApp("query.Query", "Viewer", function () {
                        this.view = new MWF.xApplication.query.Query.Viewer(dlg.content.getFirst(), viewJson, { "style": "select" }, _form.app, _form.Macro);
                    }.bind(this));
                }.bind(this));
            }
        }
    };

    /**
     * 你可以通过statement对象，获取执行查询语句或者对查询结果进行选择。<br/>
     * @module statement
     * @example
     * //您可以在流程表单、内容管理表单、门户页面或视图中，通过this来获取statement对象，如下：
     * var statement = this.statement;
     */
    this.statement = {
        /**
         * 执行指定的查询语句。
         * @method execute
         * @static
         * @param {Object} statement - 要执行的查询语句的信息。数据格式如下：
         * <div>以下的filter参数参考<a href='global.html#StatementFilter'>StatementFilter</a>,
         * parameter参数参考<a href='global.html#StatementParameter'>StatementParameter</a></div>
         * <pre><code class='language-js'>
         * {
         *  "name" : "tesStatement", //（String）必选，查询配置的名称、别名或ID
         *  "mode" : "all", //（String）必选，“all”、“data”或者“count”，all表示同时执行查询语句和总数语句，data表示执行查询语句，count表示执行总数语句
         *  "page" : 1, //（number）可选，当前页码，默认为1
         *  "pageSize" : 20, //（number）可选，每页的数据条数，默认为20
         *  "filter": [ //（Array）可选，对查询进行过滤的条件。json数组格式，每个数组元素描述一个过滤条件，每个元素数据格式如下：
         *       {
         *           "path":"o.title",
         *           "comparison":"like",
         *           "value":"关于",
         *           "formatType":"textValue"
         *       }
         *  ],
         *  parameter : {
         *       "person" : "", //参数名称为下列值时，后台默认赋值，person(当前人),identityList(当前人身份列表),unitList(当前人所在直接组织), unitAllList(当前人所在所有组织), groupList(当前人所在群组)
         *       "startTime" : (new Date("2020-01-01")), //如果对比的是日期，需要传入 Date 类型
         *       "applicationName" : "%test%", //如果运算符用的是 like, noLike，模糊查询
         *       "processName" : "test流程" //其他写确定的值
         *     }
         * }
         * </pre></code>
         * @param {Function} callback - 访问成功后的回调函数
         * @param {Boolean} [async] - 同步或异步调用。true：异步；false：同步。默认为true。
         * @example
         * this.statement.execute(statement, callback, async);
         * @example
         * //获取“task”查询中的数据
         * //查询语句为 select o from Task o where (o.person = :person) and (o.startTime > :startTime) and (o.applicationName like :applicationName) and (o.processName = :processName)
         * //总数语句为 select count(o.id) from Task o where (o.person = :person) and (o.startTime > :startTime) and (o.applicationName like :applicationName) and (o.processName = :processName)
         * //过滤条件为标题o.title包含包含（like））“7月”。
         * this.statement.execute({
         *  "name": "task",
         *  "mode" : "all",
         *  "filter": [
         *      {
         *      "path":"o.title",
         *      "comparison":"like",
         *      "value":"7月",
         *      "formatType":"textValue"
         *      }
         * ],
         * "parameter" : {
         *     "person" : "", //参数名称为下列值时，后台默认赋值，person(当前人),identityList(当前人身份列表),unitList(当前人所在直接组织), unitAllList(当前人所在所有组织), groupList(当前人所在群组)
         *     "startTime" : (new Date("2020-01-01")), //如果对比的是日期，需要传入 Date 类型
         *     "applicationName" : "%test%", //如果运算符用的是 like, noLike，模糊查询
         *     "processName" : "test流程" //其他写确定的值
         *   }
         * }, function(json){
         *  var count = json.count; //总数语句执行后返回的数字
         *  var list = json.data; //查询语句后返回的数组
         *   //......
         * });
         */
        "execute": function (statement, callback, async) {
            var parameter = this.parseParameter(statement.parameter);
            var filterList = this.parseFilter(statement.filter, parameter);
            var obj = {
                "filterList": filterList,
                "parameter" : parameter
            };
            MWF.Actions.load("x_query_assemble_surface").StatementAction.executeV2(
                statement.name, statement.mode || "data", statement.page || 1, statement.pageSize || 20, obj,
                function (json) {
                    if (callback) callback(json);
                }, null, async);
        },
        parseFilter : function( filter, parameter ){
            if( typeOf(filter) !== "array" )return [];
            var filterList = [];
            ( filter || [] ).each( function (d) {
                var parameterName = d.path.replace(/\./g, "_");
                var value = d.value;
                if( d.comparison === "like" || d.comparison === "notLike" ){
                    if( value.substr(0, 1) !== "%" )value = "%"+value;
                    if( value.substr(value.length-1,1) !== "%" )value = value+"%";
                    parameter[ parameterName ] = value; //"%"+value+"%";
                }else{
                    if( d.formatType === "dateTimeValue" || d.formatType === "datetimeValue"){
                        value = "{ts '"+value+"'}"
                    }else if( d.formatType === "dateValue" ){
                        value = "{d '"+value+"'}"
                    }else if( d.formatType === "timeValue" ){
                        value = "{t '"+value+"'}"
                    }
                    parameter[ parameterName ] = value;
                }
                d.value = parameterName;

                filterList.push( d );
            }.bind(this));
            return filterList;
        },
        parseParameter : function( obj ){
            if( typeOf(obj) !== "object" )return {};
            var parameter = {};
            //传入的参数
            for( var p in obj ){
                var value = obj[p];
                if( typeOf( value ) === "date" ){
                    value = "{ts '"+value.format("db")+"'}"
                }
                parameter[ p ] = value;
            }
            return parameter;
        },

        /**
         * 如果查询的类型是"select"，并且配置了查询视图，可以通过本方法进行数据选择。
         * @method select
         * @static
         * @param {Object} statement - 要访问的查询配置的信息。数据格式如下：
         * <div>以下的filter参数参考<a href='global.html#StatementFilter'>StatementFilter</a>,
         * parameter参数参考<a href='global.html#StatementParameter'>StatementParameter</a></div>
         * <pre><code class='language-js'>
         * {
         *  "name" : "tesStatement", //（String）必选，查询配置的名称、别名或ID
         *  "isTitle" : true, //（Boolean）可选，是否显示视图标题。默认true
         *  "isMulti" : true,  //（Boolean）可选，是否允许多选。默认true
         *  "width" : 700, //（Number）可选，选择框的宽度。默认700
         *  "height" : 400,  //（Number）可选，选择框的高度。默认400
         *  "caption" : "标题", //（String）可选，选择框的标题
         *  "filter": [ //（Array）可选，对查询进行过滤的条件。json数组格式，每个数组元素描述一个过滤条件，每个元素数据格式如下：
         *       {
         *           "path":"o.title",
         *           "comparison":"like",
         *           "value":"关于",
         *           "formatType":"textValue"
         *       }
         *  ],
         *  parameter : {
         *       "person" : "", //参数名称为下列值时，后台默认赋值，person(当前人),identityList(当前人身份列表),unitList(当前人所在直接组织), unitAllList(当前人所在所有组织), groupList(当前人所在群组)
         *       "startTime" : (new Date("2020-01-01")), //如果对比的是日期，需要传入 Date 类型
         *       "applicationName" : "%test%", //如果运算符用的是 like, noLike，模糊查询
         *       "processName" : "test流程" //其他写确定的值
         *     }
         * }
         * </pre></code>
         * @param {Function} callback - 访问成功后的回调函数
         * @example
         * this.statement.select(statement, callback);
         * @example
         * this.statement.select({
         *     "name": "物业材料查询",     //查询的名称
         *     "isMulti": false,           //只允许单选
         * }, function(items) {
         *     //如果选择了某个数据，将数据赋值给表单输入框
         *     if (items.length) {
         *         //物料名称，表单中输入框名为“materialName”， 查询语句返回的字段名为“ylmc”
         *         this.data.materialName = items[0].ylmc;
         *         //规格，表单中输入框名为“specification”， 查询语句返回的字段名为“gg”
         *         this.data.specification = items[0].gg;
         *         //单价，表单中输入框名为“price”， 查询语句返回的字段名为“dj”
         *         this.data.price = items[0].dj;
         *     }
         * }.bind(this));
         */
        "select": function (statement, callback, options) {
            if (statement.name) {
                // var parameter = this.parseParameter(statement.parameter);
                // var filterList = this.parseFilter(statement.filter, parameter);
                var statementJson = {
                    "statementId": statement.name || "",
                    "isTitle": (statement.isTitle === false) ? "no" : "yes",
                    "select": (statement.isMulti === false) ? "single" : "multi",
                    "filter": statement.filter,
                    "parameter": statement.parameter
                };
                if (!options) options = {};
                options.width = statement.width;
                options.height = statement.height;
                options.title = statement.caption;

                var width = options.width || "700";
                var height = options.height || "400";

                if (layout.mobile) {
                    var size = document.body.getSize();
                    width = size.x;
                    height = size.y;
                    options.style = "viewmobile";
                }
                width = width.toInt();
                height = height.toInt();

                var size = _form.app.content.getSize();
                var x = (size.x - width) / 2;
                var y = (size.y - height) / 2;
                if (x < 0) x = 0;
                if (y < 0) y = 0;
                if (layout.mobile) {
                    x = 20;
                    y = 0;
                }

                var _self = this;
                MWF.require("MWF.xDesktop.Dialog", function () {
                    var dlg = new MWF.xDesktop.Dialog({
                        "title": options.title || "select statement view",
                        "style": options.style || "view",
                        "top": y,
                        "left": x - 20,
                        "fromTop": y,
                        "fromLeft": x - 20,
                        "width": width,
                        "height": height,
                        "html": "<div style='height: 100%;'></div>",
                        "maskNode": _form.app.content,
                        "container": _form.app.content,
                        "buttonList": [
                            {
                                "text": MWF.LP.process.button.ok,
                                "action": function () {
                                    //if (callback) callback(_self.view.selectedItems);
                                    if (callback) callback(_self.statement.getData());
                                    this.close();
                                }
                            },
                            {
                                "text": MWF.LP.process.button.cancel,
                                "action": function () { this.close(); }
                            }
                        ]
                    });
                    dlg.show();

                    if (layout.mobile) {
                        var backAction = dlg.node.getElement(".MWF_dialod_Action_back");
                        var okAction = dlg.node.getElement(".MWF_dialod_Action_ok");
                        if (backAction) backAction.addEvent("click", function (e) {
                            dlg.close();
                        }.bind(this));
                        if (okAction) okAction.addEvent("click", function (e) {
                            //if (callback) callback(this.view.selectedItems);
                            if (callback) callback(this.statement.getData());
                            dlg.close();
                        }.bind(this));
                    }

                    MWF.xDesktop.requireApp("query.Query", "Statement", function () {
                        this.statement = new MWF.xApplication.query.Query.Statement(dlg.content.getFirst(), statementJson, { "style": "select" }, _form.app, _form.Macro);
                    }.bind(this));
                }.bind(this));
            }
        }
    };

    //include 引用脚本
    //optionsOrName : {
    //  type : "", 默认为portal, 可以为 portal  process  cms
    //  application : "", 门户/流程/CMS的名称/别名/id, 默认为当前应用
    //  name : "" // 脚本名称/别名/id
    //}
    //或者name: "" // 脚本名称/别名/id
    // if( !window.includedScripts ){
    //     var includedScripts = window.includedScripts = [];
    // }else{
    //     var includedScripts = window.includedScripts;
    // }
    var includedScripts = [];
    this.include = function (optionsOrName, callback) {
        var options = optionsOrName;
        if (typeOf(options) == "string") {
            options = { name: options };
        }
        var name = options.name;
        var type = (options.type && options.application) ? options.type : "portal";
        var application = options.application || _form.json.application;
        var key = type + "-" + application + "-" + name;
        if (includedScripts.indexOf(key) > -1) {
            if (callback) callback.apply(this);
            return;
        }
        //if (includedScripts.indexOf( name )> -1){
        //    if (callback) callback.apply(this);
        //    return;
        //}
        var scriptAction;
        switch (type) {
            case "portal":
                if (this.scriptActionPortal) {
                    scriptAction = this.scriptActionPortal;
                } else {
                    MWF.require("MWF.xScript.Actions.PortalScriptActions", null, false);
                    scriptAction = this.scriptActionPortal = new MWF.xScript.Actions.PortalScriptActions();
                }
                break;
            case "process":
                if (this.scriptActionProcess) {
                    scriptAction = this.scriptActionProcess;
                } else {
                    MWF.require("MWF.xScript.Actions.ScriptActions", null, false);
                    scriptAction = this.scriptActionProcess = new MWF.xScript.Actions.ScriptActions();
                }
                break;
            case "cms":
                if (this.scriptActionCMS) {
                    scriptAction = this.scriptActionCMS;
                } else {
                    MWF.require("MWF.xScript.Actions.CMSScriptActions", null, false);
                    scriptAction = this.scriptActionCMS = new MWF.xScript.Actions.CMSScriptActions();
                }
                break;
        }
        scriptAction.getScriptByName(application, name, includedScripts, function (json) {
            if (json.data) {
                includedScripts.push(key);

                //名称、别名、id
                json.data.importedList.each( function ( flag ) {
                    if( type === "portal" ){
                        includedScripts.push( type + "-" + json.data.portal + "-" + flag );
                        if( json.data.portalName )includedScripts.push( type + "-" + json.data.portalName + "-" + flag );
                        if( json.data.portalAlias )includedScripts.push( type + "-" + json.data.portalAlias + "-" + flag );
                    }else if( type === "cms" ){
                        includedScripts.push( type + "-" + json.data.appId + "-" + flag );
                        if( json.data.appName )includedScripts.push( type + "-" + json.data.appName + "-" + flag );
                        if( json.data.appAlias )includedScripts.push( type + "-" + json.data.appAlias + "-" + flag );
                    }else if( type === "process" ){
                        includedScripts.push( type + "-" + json.data.application + "-" + flag );
                        if( json.data.appName )includedScripts.push( type + "-" + json.data.appName + "-" + flag );
                        if( json.data.appAlias )includedScripts.push( type + "-" + json.data.appAlias + "-" + flag );
                    }
                });

                includedScripts = includedScripts.concat(json.data.importedList);
                MWF.Macro.exec(json.data.text, this);
                if (callback) callback.apply(this);
            } else {
                if (callback) callback.apply(this);
            }
        }.bind(this), null, false);
    };

    this.define = function (name, fun, overwrite) {
        var over = true;
        if (overwrite === false) over = false;
        var o = {};
        o[name] = { "value": fun, "configurable": over };
        MWF.defineProperties(this, o);
    }.bind(this);


    //仅前台对象-----------------------------------------
    //form

    /**
     * 当查询设计中使用了select语句，并且配置了视图，可以在查询视图中使用本章API。<br/>
     * queryStatement对象在查询视图中可用。它的很多方法与queryView类似。<b>（仅前端脚本可用）</b><br/>
     * @module queryStatement
     * @borrows module:queryView.confirm as confirm
     * @borrows module:queryView.alert as alert
     * @borrows module:queryView.notice as notice
     * @borrows module:queryView.addEvent as addEvent
     * @borrows module:queryView.openWork as openWork
     * @borrows module:queryView.openJob as openJob
     * @borrows module:queryView.openDocument as openDocument
     * @borrows module:queryView.openPortal as openPortal
     * @borrows module:queryView.openCMS as openCMS
     * @borrows module:queryView.openProcess as openProcess
     * @borrows module:queryView.openApplication as openApplication
     * @borrows module:queryView.createDocument as createDocument
     * @borrows module:queryView.startProcess as startProcess
     * @example
     * //您可以在查询视图中，通过this来获取queryStatement对象，如下：
     * var queryStatement = this.queryStatement;
     */

    /**
     * 当查询视图被嵌入到门户页面、流程表单或内容管理表单的时候，可以通过这个方法来获取页面或表单的上下文。
     * @method getParentEnvironment
     * @memberOf module:queryStatement
     * @static
     * @return {MWF.xScript.Environment|MWF.xScript.CMSEnvironment} 页面或表单的上下文.
     * @example
     * this.queryStatement.getParentEnvironment();
     * @example
     * var env = this.queryStatement.getParentEnvironment(); //当视图被嵌入到页面的时候，可以在视图里获取页面的上下文
     * env.page.toPortal( "公文门户" ); //调用page的toPage() 跳转到其他门户
     */

    /**
     * 获取查询视图当前页的基本信息。
     * @method getPageInfor
     * @memberOf module:queryStatement
     * @static
     * @return {Object} 当前页的信息，格式如下:
     *<pre><code class='language-js'>{
     *     "pages": 3, //总页数
     *     "perPageCount": 50, //每页的条数
     *     "currentPageNumber": 1 // 当前页数
     * }
     * </pre></code>
     * @example
     * this.queryStatement.getPageInfor();
     */

    /**
     * 获取当前页的数据。
     * @method getPageData
     * @memberOf module:queryStatement
     * @static
     * @return {Object[]} 当前页数据。
     * <div>数据格式和 jpql 语句的写法有关</div>
     * 如:  "select o from table o" 返回 json数组
     *<pre><code class='language-js'>[
     {
        "id" : "id1",
        "title" : "title1"
    },
     {
        "id" : "id2",
        "title" : "title2"
    },
     ...
     *]
     * </pre></code>
     * 如："select id, title from table o" 返回 二维数组：
     *<pre><code class='language-js'>[
     ["id1", "title1"],
     ["id2", "title2"],
     ...
     *]
     *</pre></code>
     * @example
     * var data = this.queryStatement.getPageData();
     */

    /**
     * 跳转到指定的页面。
     * @method toPage
     * @memberOf module:queryStatement
     * @static
     * @param {Number} pageNumber - 需要跳转的页码。
     * @param {Function} [callback ] - 跳转的页面数据加载完成以后的回调方法。
     * @example
     * var data = this.queryStatement.toPage( pageNumber, callback );
     * @example
     * //　跳转到第2页并且获取该页的数据。
     * this.queryStatement.toPage( 2, function(){
     *      var data = this.queryStatement.getPageData();
     * }.bind(this) )
     */

    /**
     * 当查询视图设置了允许多选的时候，可以通过这个方法全部选中当前页面的条目。
     * @method selectAll
     * @memberOf module:queryStatement
     * @static
     * @example
     * this.queryStatement.selectAll();
     */

    /**
     * 当查询视图设置了允许多选的时候，可以通过这个方法取消选中的条目。
     * @method unSelectAll
     * @memberOf module:queryStatement
     * @static
     * @example
     * this.queryStatement.unSelectAll();
     */

    /**
     * 获取选中的条目的数据。
     * @method getSelectedData
     * @memberOf module:queryStatement
     * @static
     * @return {Object[]} 选中的条目的数据。
     * <div>数据格式和 jpql 语句的写法有关</div>
     * 如:  "select o from table o" 返回 json数组
     *<pre><code class='language-js'>[
     {
        "id" : "id1",
        "title" : "title1"
    },
     {
        "id" : "id2",
        "title" : "title2"
    },
     ...
     *]
     * </pre></code>
     * 如："select id, title from table o" 返回 二维数组：
     *<pre><code class='language-js'>[
     ["id1", "title1"],
     ["id2", "title2"],
     ...
     *]
     *</pre></code>
     * @example
     * var data = this.queryStatement.getSelectedData();
     */

    /**获取queryStatement对应的DOM对象。
     * @method node
     * @static
     * @methodOf module:queryStatement
     * @see module:form.node
     */


    /**
     * queryView对象可在视图中可用。它的很多方法与form类似。<b>（仅前端脚本可用）</b><br/>
     * @module queryView
     * @example
     * //您可以在视图中，通过this来获取queryView对象，如下：
     * var queryView = this.queryView;
     */
    this.page = this.form = this.queryView = this.queryStatement = {
        /**
         * 当视图被嵌入到门户页面、流程表单或内容管理表单的时候，可以通过这个方法来获取页面或表单的上下文。
         * @method getParentEnvironment
         * @static
         * @return {MWF.xScript.Environment|MWF.xScript.CMSEnvironment} 页面或表单的上下文.
         * @example
         * this.queryView.getParentEnvironment();
         * @example
         * var env = this.queryView.getParentEnvironment(); //当视图被嵌入到页面的时候，可以在视图里获取页面的上下文
         * env.page.toPortal( "公文门户" ); //调用page的toPage() 跳转到其他门户
         */
        "getParentEnvironment" : function () { return _form.getParentEnvironment(); }, //视图嵌入的表单或页面的上下文

        /**
         * 获取查询的配置信息。
         * @method getStatementInfor
         * @memberOf module:queryStatement
         * @static
         * @return {StatementInfor} 查询的配置信息.
         * @example
         * this.queryStatement.getStatementInfor();
         */
        "getStatementInfor" : function () { return _form.getStatementInfor ? _form.getStatementInfor() : null; },

        /**
         * 获取查询的配置信息。
         * @method getViewInfor
         * @memberOf module:queryView
         * @static
         * @return {ViewInfor} 视图的配置信息.
         * @example
         * this.queryView.getViewInfor();
         */
        "getViewInfor" : function () { return _form.getViewInfor(); },

        /**
         * 获取视图当前页的基本信息。
         * @method getPageInfor
         * @memberOf module:queryView
         * @static
         * @return {Object} 当前页的信息，格式如下:
         *<pre><code class='language-js'>{
         *     "pages": 3, //总页数
         *     "perPageCount": 50, //每页的条数
         *     "currentPageNumber": 1 // 当前页数
         * }
         * </pre></code>
         * @example
         * this.queryView.getPageInfor();
         */
        "getPageInfor" : function () { return _form.getPageInfor(); },

        /**
         * 获取当前页的数据。
         * @method getPageData
         * @memberOf module:queryView
         * @static
         * @return {Object[]} 当前页数据。
         * <div>没有分类时候，数据格式如下：</div>
         *<pre><code class='language-js'>[
         *   {
         *       "bundle": "099ed3c9-dfbc-4094-a8b7-5bfd6c5f7070", //cms 的 documentId, process 的 jobId
         *      "data": {  //视图中配置的数据
         *        "title": "考勤管理-配置-统计周期设置", //列名称及列值
         *        "time": "2018-08-25 11:29:45"
         *      }
         *    },
         *   ...
         *]
         * </pre></code>
         * 有分类的时候，数据格式如下：
         *<pre><code class='language-js'>[
         *  {
         *   "group": "工作日志",  //分类1
         *   "list": [  //分类下的数据
         *     {
         *       "bundle": "001257be-725a-43cf-9679-3892bbab696a", //cms 的 documentId, process 的 jobId
         *       "data": { //视图中配置的数据
         *         "title": "标题",  //列名称及列值
         *         "time": "2018-07-31 15:39:13",
         *         "category": "工作日志"
         *       }
         *     },
         *     ...
         *   ]
         *  },
         *  ...
         *]
         *</pre></code>
         * @example
         * var data = this.queryView.getPageData();
         */
        "getPageData" : function () { return _form.getPageData(); },

        /**
         * 跳转到指定的页面。
         * @method toPage
         * @memberOf module:queryView
         * @static
         * @param {Number} pageNumber - 需要跳转的页码。
         * @param {Function} [callback ] - 跳转的页面数据加载完成以后的回调方法。
         * @example
         * var data = this.queryView.toPage( pageNumber, callback );
         * @example
         * //　跳转到第2页并且获取该页的数据。
         * this.queryView.toPage( 2, function(){
         *      var data = this.queryView.getPageData();
         * }.bind(this) )
         */
        "toPage" : function ( pageNumber, callback ) { return _form.toPage(pageNumber, callback); },

        /**
         * 当视图设置了允许多选的时候，可以通过这个方法全部选中当前页面的条目。
         * @method selectAll
         * @memberOf module:queryView
         * @static
         * @example
         * this.queryView.selectAll();
         */
        "selectAll" : function () { return _form.selectAll(); },

        /**
         * 当视图设置了允许多选的时候，可以通过这个方法取消选中的条目。
         * @method unSelectAll
         * @memberOf module:queryView
         * @static
         * @example
         * this.queryView.unSelectAll();
         */
        "unSelectAll" : function () { return _form.unSelectAll(); },

        /**
         * 获取选中的条目的数据。
         * @method getSelectedData
         * @memberOf module:queryView
         * @static
         * @return {Object[]} 选中的条目的数据。
         * <div>格式如下：</div>
         * <pre><code class='language-js'>
         * [
            {
            "bundle": "099ed3c9-dfbc-4094-a8b7-5bfd6c5f7070", //cms 的 documentId, process 的 jobId
            "data": {  //视图中配置的数据
              "title": "考勤管理-配置-统计周期设置", //列名称及列值
              "time": "2018-08-25 11:29:45"
            }
          },
         ...
         * ]
         </pre></code>
         * @example
         * var data = this.queryView.getSelectedData();
         */
        "getSelectedData" : function () { return _form.getSelectedData(); },

        /**
         * 设置视图的过滤条件，该方法不能修改视图中默认的过滤条件（在开发视图的时候添加的过滤条件），而是在这上面新增。
         * @method setFilter
         * @memberOf module:queryView
         * @static
         * @param {(ViewFilter[]|ViewFilter|Null)} [filter] 过滤条件。<br/>
         * 当不传参数、参数为null或为空数组的情况下，表示清空非视图默认的过滤条件。<br/>
         * 如果传入对象或者非空数组的时候，参数如下：
         * <pre><code class='language-js'>[
         *    {
         *       "logic":"and",
         *       "path":"$work.title",
         *       "comparison":"like",
         *       "value":"7月",
         *       "formatType":"textValue"
         *   }
         *]
         * </pre></code>
         * @param {Function} [callback] 过滤完成并重新加载数据后的回调方法。
         * @example
         * this.queryView.setFilter( filter );
         */
        "setFilter" : function ( filter, callback ) { return _form.setFilter(filter, callback); },

        /**
         * 增加查询语句where子句的过滤条件。
         * @method setStatementFilter
         * @memberOf module:queryStatement
         * @static
         * @param {(StatementFilter[]|Null)} [filter] 过滤条件。<br/>
         * 过滤条件。当不传参数、参数为null或为空数组的情况下，表示清空非视图默认的过滤条件。<br/>
         * 如果传入非空数组的时候，参数如下：
         * <pre><code class='language-js'>[
         *    {
         *      "path":"o.title",
         *      "comparison":"like",
         *      "value":"关于",
         *      "formatType":"textValue"
         *  }
         *]
         * </pre></code>
         * @param {StatementParameter} [parameter] 过滤条件。对查询语句where子句的形如":person"的参数部分进行赋值，参数如下：
         * <pre><code class='language-js'>
         * //假设语句为 select count(o.id) from Read o where (o.person = :person) and (o.startTime > :startTime) and (o.applicationName like :applicationName) and (o.processName = :processName)。
         * //那么可能的参数如下：
         * {
         *    "person" : "", //出于安全考虑参数名称为下列值时，不需要填写参数值，后台默认赋值，person(当前人),identityList(当前人身份列表),unitList(当前人所在直接组织), unitAllList(当前人所在所有组织), groupList(当前人所在群组)
         *    "startTime" : (new Date("2020-01-01")), //如果对比的是日期，需要传入 Date 类型
         *    "applicationName" : "%test%", //如果运算符用的是 like, noLike，模糊查询
         *    "processName" : "test流程" //其他写确定的值
         * }
         * </pre></code>
         * @param {Function} [callback] 过滤完成并重新加载数据后的回调方法。
         * @example
         * this.queryStatement.setStatementFilter( filter, parameter, callback );
         */
        "setStatementFilter" : function ( filter , parameter, callback) { return _form.setFilter(filter, parameter, callback); },

        /**
         * 把当前视图切换成另外一个视图。
         * @method switchView
         * @memberOf module:queryView
         * @static
         * @param {Object} options 需要跳转的参数配置。参数说明如下：
         * <div>下列说明的filter属性参考<a href='global.html#ViewFilter'>ViewFilter</a></div>
         * <pre><code class='language-js'>{
         *     "application": application, //必选，视图的所在应用id
         *     "viewName": viewName, //必选，视图的名称
         *     "filter": [
         *         {
         *            "logic":"and",
         *             "path":"$work.title",
         *             "comparison":"like",
         *             "value":"7月",
         *             "formatType":"textValue"
         *         }
         *     ], //可选，增加视图的过滤条件（ViewFilter），如果不传，则使用原视图的配置；如果需要去掉原视图的配置，则传入空数组 []
         *     "isTitle": "yes", //可选，是否显示t视图的标题行，可选值有:yes no
         *     "select": "none", //可选，是否允许新视图选择，如果不传，则使用原视图的配置, 可选值有： 不允许选择 none, 单选 single，多选 multi
         *     "titleStyles": {
         *       "color" : "red",
         *       "font-size" : "14px"
         *     }, //可选，标题行样式，如果不传，则使用原视图的配置
         *     "itemStyles": {
         *       "color" : "#333",
         *       "font-size" : "12px"
         *     }, //可选，内容行样式，如果不传，则使用原视图的配置
         *     "isExpand": "no", //可选，默认是否展开分类，如果不传，则使用原视图的配置, 可选值有:yes no
         *   }
         * </pre></code>
         * @example
         * this.queryView.switchView( options );
         */
        "switchView" : function ( options ) { return _form.switchView(options); },

        /**
         * 把当前查询视图切换成另外一个查询视图。
         * @method switchStatement
         * @memberOf module:queryStatement
         * @static
         * @param {Object} options 需要跳转的参数配置。参数说明如下：
         * <div>下列说明的filter属性参考<a href='global.html#StatementFilter'>StatementFilter</a>，
         * parameter属性参考<a href='global.html#StatementParameter'>StatementParameter</a></div>
         * <pre><code class='language-js'>this.queryStatement.switchStatement({
         *     "statementId": statementId, //必选，查询的名称、别名、id
         *     "isTitle": "yes", //可选，是否显示视图的标题行，可选值有:yes no
         *     "select": "multi", //可选，是否允许新视图选择，如果不传，则使用原视图的配置, 可选值有： 不允许选择 none, 单选 single，多选 multi
         *     "showActionbar": false, //可选，是否显示操作条
         *     "filter": [  //可选，增加查询语句where子句的过滤条件
         *       {
         *         "path": "o.title",
         *         "title": "标题",
         *         "type": "filter",
         *         "comparison": "like",
         *         "formatType": "textValue",
         *         "value": "测试"
         *       }
         *     ],
         *     //假设语句为 select count(o.id) from Read o where (o.person = :person) and (o.startTime > :startTime) and (o.applicationName like :applicationName) and (o.processName = :processName)
         *     "parameter" : { //可选，对查询语句where语句的形如":person"的参数部分进行赋值
         *       "person" : "", //出于安全考虑参数名称为下列值时，不需要填写参数值，后台默认赋值，person(当前人),identityList(当前人身份列表),unitList(当前人所在直接组织), unitAllList(当前人所在所有组织), groupList(当前人所在群组)
         *       "startTime" : (new Date("2020-01-01")), //如果对比的是日期，需要传入 Date 类型
         *       "applicationName" : "%test%", //如果运算符用的是 like, noLike，模糊查询
         *       "processName" : "test流程" //其他写确定的值
         *     }
         *   })
         * </pre></code>
         * @example
         * this.queryStatement.switchStatement( options );
         */
        "switchStatement" : function ( options ) { if(_form.switchStatement)_form.switchStatement(options) ; },

        /**
         * 重新加载视图。
         * @method reload
         * @methodOf module:queryView
         * @static
         * @example
         * this.queryView.reload();
         */
        "reload" : function () { _form.reload(); },

        // "getInfor": function () { return ev.pageInfor; },
        // "infor": ev.pageInfor,
        // "getApp": function () { return _form.app; },
        // "app": _form.app,

        /**获取queryView对应的DOM对象。
         * @method node
         * @static
         * @methodOf module:queryView
         * @see module:form.node
         */
        "node": function () { return _form.node; },

        // "get": function (name) { return (_form.all) ? _form.all[name] : null; },
        // "getWidgetModule": function (widget, moduleName) {
        //     if (!_form.widgetModules || !_form.widgetModules[widget]) return null;
        //     var module = _form.widgetModules[widget][moduleName];
        //     return module || null;
        // },
        // "getField": function (name) { return _forms[name]; },
        // "getAction": function () { return _form.workAction },
        "getDesktop": function () { return _form.app ? _form.app.desktop : null},
        // "getData": function () { return new MWF.xScript.JSONData(_form.getData()); },
        //"save": function(callback){_form.saveWork(callback);},
        // "close": function () { _form.closeWork(); },

        // "print": function (application, form) {
        //     _form.printWork(application, form);
        // },

        /**弹出一个确认框。
         * @method confirm
         * @static
         * @methodOf module:queryView
         * @see module:form.confirm
         */
        "confirm": function (type, title, text, width, height, ok, cancel, callback, mask, style) {
            // var p = MWF.getCenter({"x": width, "y": height});
            // e = {"event": {"clientX": p.x,"x": p.x,"clientY": p.y,"y": p.y}};
            // _form.confirm(type, e, title, text, width, height, ok, cancel, callback, mask, style);
            if ((arguments.length <= 1) || o2.typeOf(arguments[1]) === "string") {
                var p = MWF.getCenter({ "x": width, "y": height });
                e = { "event": { "clientX": p.x, "x": p.x, "clientY": p.y, "y": p.y } };
                _form.confirm(type, e, title, text, width, height, ok, cancel, callback, mask, style);
            } else {
                e = (arguments.length > 1) ? arguments[1] : null;
                title = (arguments.length > 2) ? arguments[2] : null;
                text = (arguments.length > 3) ? arguments[3] : null;
                width = (arguments.length > 4) ? arguments[4] : null;
                height = (arguments.length > 5) ? arguments[5] : null;
                ok = (arguments.length > 6) ? arguments[6] : null;
                cancel = (arguments.length > 7) ? arguments[7] : null;
                callback = (arguments.length > 8) ? arguments[8] : null;
                mask = (arguments.length > 9) ? arguments[9] : null;
                style = (arguments.length > 10) ? arguments[10] : null;
                _form.confirm(type, e, title, text, width, height, ok, cancel, callback, mask, style);
            }
        },

        /**显示一个带关闭按钮的信息框。
         * @method alert
         * @static
         * @methodOf module:queryView
         * @see module:form.alert
         */
        "alert": function(type, title, text, width, height){
            _form.alert(type, title, text, width, height);
        },

        /**显示一个信息框。
         * @method notice
         * @static
         * @methodOf module:queryView
         * @see module:form.notice
         */
        "notice": function (content, type, target, where, offset, option) {
            _form.notice(content, type, target, where, offset, option);
        },

        /**　给视图添加事件。
         * @method addEvent
         * @static
         * @methodOf module:queryView
         * @see module:form.addEvent
         */
        "addEvent": function (e, f) { _form.addEvent(e, f); },

        // "openWindow": function (form, app) {
        //     _form.openWindow(form, app);
        // },
        // "toPage": function (name, par, nohis) {
        //     _form.app.toPage(name, par, nohis);
        // },
        // "toPortal": function (portal, page, par) {
        //     _form.app.toPortal(portal, page, par);
        // },

        /**打开一个在流转或已完成的流程实例。
         * @method openWork
         * @static
         * @methodOf module:queryView
         * @see module:form.openWork
         */
        "openWork": function (id, completedId, title, options) {
            var op = options || {};
            op.workId = id;
            op.workCompletedId = completedId;
            op.docTitle = title;
            op.appId = "process.Work" + (op.workId || op.workCompletedId);
            return layout.desktop.openApplication(this.event, "process.Work", op);
        },

        /**根据流程的jobId打开工作。
         * @method openJob
         * @static
         * @methodOf module:queryView
         * @see module:form.openJob
         */
        "openJob": function (id, choice, options) {
            var workData = null;
            o2.Actions.get("x_processplatform_assemble_surface").listWorkByJob(id, function (json) {
                if (json.data) workData = json.data;
            }.bind(this), null, false);

            if (workData) {
                var len = workData.workList.length + workData.workCompletedList.length;
                if (len) {
                    if (len > 1 && choice) {
                        var node = new Element("div", { "styles": { "padding": "20px", "width": "500px" } }).inject(_form.node);
                        workData.workList.each(function (work) {
                            var workNode = new Element("div", {
                                "styles": {
                                    "background": "#ffffff",
                                    "border-radius": "10px",
                                    "clear": "both",
                                    "margin-bottom": "10px",
                                    "height": "40px",
                                    "padding": "10px 10px"
                                }
                            }).inject(node);
                            var html = "<div style='height: 40px; width: 40px; float: left; background: url(../x_component_process_Xform/$Form/default/icon/work.png) no-repeat center center'></div>" +
                                "<div style='height: 40px; width: 40px; float: right'><div class='MWFAction' style='height: 20px; width: 40px; margin-top: 10px; border: 1px solid #999999; border-radius: 5px;text-align: center; cursor: pointer'>" + o2.LP.widget.open + "</div></div>" +
                                "<div style='height: 20px; line-height: 20px; margin: 0px 40px'>" + work.title + "</div>" +
                                "<div style='margin: 0px 40px'><div style='color:#999999; float: left; margin-right: 10px'>" + work.activityName + "</div>" +
                                "<div style='color:#999999; float: left; margin-right: 10px'>" + work.activityArrivedTime + "</div>" +
                                "<div style='color:#999999; float: left; margin-right: 10px'>" + (work.manualTaskIdentityText || "") + "</div></div>";
                            workNode.set("html", html);
                            var action = workNode.getElement(".MWFAction");
                            action.store("work", work);
                            action.addEvent("click", function (e) {
                                var work = e.target.retrieve("work");
                                if (work) this.openWork(work.id, null, work.title, options);
                                dlg.close();
                            }.bind(this));

                        }.bind(this));
                        workData.workCompletedList.each(function (work) {
                            var workNode = new Element("div", {
                                "styles": {
                                    "background": "#ffffff",
                                    "border-radius": "10px",
                                    "clear": "both",
                                    "margin-bottom": "10px",
                                    "height": "40px",
                                    "padding": "10px 10px"
                                }
                            }).inject(node);
                            var html = "<div style='height: 40px; width: 40px; float: left; background: url(../x_component_process_Xform/$Form/default/icon/work.png) no-repeat center center'></div>" +
                                "<div style='height: 40px; width: 40px; float: right'><div class='MWFAction' style='height: 20px; width: 40px; margin-top: 10px; border: 1px solid #999999; border-radius: 5px;text-align: center; cursor: pointer'>" + o2.LP.widget.open + "</div></div>" +
                                "<div style='height: 20px; line-height: 20px; margin: 0px 40px'>" + work.title + "</div>" +
                                "<div style='margin: 0px 40px'><div style='color:#999999; float: left; margin-right: 10px'>" + o2.LP.widget.workcompleted + "</div>" +
                                "<div style='color:#999999; float: left; margin-right: 10px'>" + work.completedTime + "</div>";
                            workNode.set("html", html);
                            var action = workNode.getElement(".MWFAction");
                            action.store("work", work);
                            action.addEvent("click", function (e) {
                                var work = e.target.retrieve("work");
                                if (work) this.openWork(null, work.id, work.title, options);
                                dlg.close();
                            }.bind(this));

                        }.bind(this));
                        var height = node.getSize().y + 20;
                        if (height > 600) height = 600;

                        var dlg = o2.DL.open({
                            "title": o2.LP.widget.choiceWork,
                            "style": "user",
                            "isResize": false,
                            "content": node,
                            "buttonList": [
                                {
                                    "type": "cancel",
                                    "text": o2.LP.widget.close,
                                    "action": function () { dlg.close(); }
                                }
                            ]
                        });
                    } else {
                        if (workData.workList.length) {
                            var work = workData.workList[0];
                            return this.openWork(work.id, null, work.title, options);
                        } else {
                            var work = workData.workCompletedList[0];
                            return this.openWork(null, work.id, work.title, options);
                        }
                    }
                }
            }
        },

        /**打开一个内容管理文档。
         * @method openDocument
         * @static
         * @methodOf module:queryView
         * @see module:form.openDocument
         */
        "openDocument": function (id, title, options) {
            var op = options || {};
            op.documentId = id;
            op.docTitle = title || "";
            layout.desktop.openApplication(this.event, "cms.Document", op);
        },

        /**打开一个门户页面。
         * @method openPortal
         * @static
         * @methodOf module:queryView
         * @see module:form.openPortal
         */
        "openPortal": function (name, page, par) {
            var action = MWF.Actions.get("x_portal_assemble_surface");
            action.getApplication(name, function (json) {
                if (json.data) {
                    if (page) {
                        action.getPageByName(page, json.data.id, function (pageJson) {
                            var pageId = (pageJson.data) ? pageJson.data.id : "";
                            layout.desktop.openApplication(null, "portal.Portal", {
                                "portalId": json.data.id,
                                "pageId": pageId,
                                "parameters": par,
                                "appId": (par && par.appId) || ("portal.Portal" + json.data.id + pageId)
                            })
                        });
                    } else {
                        layout.desktop.openApplication(null, "portal.Portal", {
                            "portalId": json.data.id,
                            "parameters": par,
                            "appId": (par && par.appId) || ("portal.Portal" + json.data.id)
                        })
                    }
                }

            });
        },

        /**打开一个内容管理栏目。
         * @method openCMS
         * @static
         * @methodOf module:queryView
         * @see module:form.openCMS
         */
        "openCMS": function (name) {
            var action = MWF.Actions.get("x_cms_assemble_control");
            action.getColumn(name, function (json) {
                if (json.data) {
                    layout.desktop.openApplication(null, "cms.Module", {
                        "columnId": json.data.id,
                        "appId": "cms.Module" + json.data.id
                    });
                }
            });
        },

        /**打开一个流程应用。
         * @method openProcess
         * @static
         * @methodOf module:queryView
         * @see module:form.openProcess
         */
        "openProcess": function (name) {
            var action = MWF.Actions.get("x_processplatform_assemble_surface");
            action.getApplication(name, function (json) {
                if (json.data) {
                    layout.desktop.openApplication(null, "process.Application", {
                        "id": json.data.id,
                        "appId": "process.Application" + json.data.id
                    });
                }
            });
        },

        /**打开一个任意一个component应用。
         * @method openApplication
         * @static
         * @methodOf module:queryView
         * @see module:form.openApplication
         */
        "openApplication": function (name, options) {
            layout.desktop.openApplication(null, name, options);
        },

        /**创建一个内容管理文档。
         * @method createDocument
         * @static
         * @methodOf module:queryView
         * @see module:form.createDocument
         */
        "createDocument": function (columnOrOptions, category, data, identity, callback, target, latest, selectColumnEnable, ignoreTitle) {
            var column = columnOrOptions;
            var onAfterPublish, onPostPublish;
            if (typeOf(columnOrOptions) == "object") {
                column = columnOrOptions.column;
                category = columnOrOptions.category;
                data = columnOrOptions.data;
                identity = columnOrOptions.identity;
                callback = columnOrOptions.callback;
                target = columnOrOptions.target;
                latest = columnOrOptions.latest;
                selectColumnEnable = columnOrOptions.selectColumnEnable;
                ignoreTitle = columnOrOptions.ignoreTitle;
                onAfterPublish = columnOrOptions.onAfterPublish;
                onPostPublish = columnOrOptions.onPostPublish;
            }
            if (target) {
                if (layout.app && layout.app.inBrowser) {
                    layout.app.content.empty();
                    layout.app = null;
                }
            }

            MWF.xDesktop.requireApp("cms.Index", "Newer", function () {
                var starter = new MWF.xApplication.cms.Index.Newer(null, null, _form.app, null, {
                    "documentData": data,
                    "identity": identity,

                    "ignoreTitle": ignoreTitle === true,
                    "ignoreDrafted": latest === false,
                    "selectColumnEnable": !category || selectColumnEnable === true,
                    "restrictToColumn": !!category && selectColumnEnable !== true,

                    "categoryFlag": category, //category id or name
                    "columnFlag": column, //column id or name,
                    "onStarted": function (documentId, data) {
                        if (callback) callback();
                    },
                    "onPostPublish": function () {
                        if(onPostPublish)onPostPublish();
                    },
                    "onAfterPublish": function () {
                        if(onAfterPublish)onAfterPublish();
                    }
                });
                starter.load();
            })
        },

        /**　启动一个流程实例。
         * @method startProcess
         * @static
         * @methodOf module:queryView
         * @see module:form.startProcess
         */
        "startProcess": function (app, process, data, identity, callback, target, latest) {

            if (arguments.length > 2) {
                for (var i = 2; i < arguments.length; i++) {
                    if (typeOf(arguments[i]) == "boolean") {
                        target = arguments[i];
                        break;
                    }
                }
            }

            if (target) {
                if (layout.app && layout.app.inBrowser) {
                    //layout.app.content.empty();
                    layout.app.$openWithSelf = true;
                }
            }
            var action = MWF.Actions.get("x_processplatform_assemble_surface").getProcessByName(process, app, function (json) {
                if (json.data) {
                    MWF.xDesktop.requireApp("process.TaskCenter", "ProcessStarter", function () {
                        var starter = new MWF.xApplication.process.TaskCenter.ProcessStarter(json.data, _form.app, {
                            "workData": data,
                            "identity": identity,
                            "latest": latest,
                            "onStarted": function (data, title, processName) {
                                if (data.work){
                                    var work = data.work;
                                    var options = {"draft": work, "appId": "process.Work"+(new o2.widget.UUID).toString(), "desktopReload": false};
                                    layout.desktop.openApplication(null, "process.Work", options);
                                }else{
                                    var currentTask = [];
                                    data.each(function(work){
                                        if (work.currentTaskIndex != -1) currentTask.push(work.taskList[work.currentTaskIndex].work);
                                    }.bind(this));

                                    if (currentTask.length==1){
                                        var options = {"workId": currentTask[0], "appId": currentTask[0]};
                                        layout.desktop.openApplication(null, "process.Work", options);
                                    }else{}
                                }

                                // var currentTask = [];
                                // data.each(function (work) {
                                //     if (work.currentTaskIndex != -1) currentTask.push(work.taskList[work.currentTaskIndex].work);
                                // }.bind(this));
                                //
                                // if (currentTask.length == 1) {
                                //     var options = { "workId": currentTask[0], "appId": currentTask[0] };
                                //     layout.desktop.openApplication(null, "process.Work", options);
                                // } else { }

                                if (callback) callback(data);
                            }.bind(this)
                        });
                        starter.load();
                    }.bind(this));
                }
            });
        }
        //"app": _form.app
    };
    // this.form.currentRouteName = _form.json.currentRouteName;
    // this.form.opinion = _form.json.opinion;

    this.target = ev.target;
    this.event = ev.event;
    this.status = ev.status;

    /**
     * 在前端脚本中，可以通过this.session.user来获取当前用户信息。<br/>
     * @module session
     * @example
     * //获取当前用户信息
     * var user = this.session.user
     * @return {Object} 当前用户信息，内容和格式如下：
     * <pre><code class='language-js'>{
     *    "id": "267a7bcc-f27a-49c8-8364-f1c12061085a",       //人员ID
     *    "genderType": "m",                                  //性别
     *    "icon": "...",                                      //头像
     *    "signature": "",                                    //个人签名
     *    "name": "胡起",                                     //姓名
     *    "employee": "huqi",                                 //员工号
     *    "unique": "huqi",                                   //唯一标识
     *    "distinguishedName": "xx@huqi@P",                   //人员全称
     *    "superior": "",                                     //上级人员id
     *    "changePasswordTime": "2017-03-13",                 //修改密码时间
     *    "lastLoginTime": "2019-01-02",                      //最后登录时间
     *    "mail": "huqi@zoneland.net",                        //邮件地址
     *    "weixin": "",                                       //微信号
     *    "qq": "",                                           //QQ
     *    "mobile": "18057190078",                            //手机号码
     *    "officePhone": "",                                  //办公电话
     *    "createTime": "2017-03-13 12:27:04",                //人员创建时间
     *    "updateTime": "2019-01-02 13:00:04",                //人员修改时间
     *    "token": "...",                         //当前用户token
     *    "roleList": [                                       //人员角色
     *      "ProcessPlatformCreator@ProcessPlatformCreatorSystemRole@R",
     *      "ProcessPlatformManager@ProcessPlatformManagerSystemRole@R",
     *      "Manager@ManagerSystemRole@R"
     *   ],
     *    "identityList": [                                   //人员身份列表
     *      {
     *        "id": "709328c8-44a0-4f5d-a3fa-3c31208232d5",                       //身份ID
     *        "name": "xx",                                                       //身份名称
     *        "unique": "709328c8-44a0-4f5d-a3fa-3c31208232d5",                   //身份唯一标识
     *        "distinguishedName": "xx@709328c8-44a0-4f5d-a3fa-3c31208232d5@I",   //身份全称
     *        "person": "267a7bcc-f27a-49c8-8364-f1c12061085a",                   //人员ID
     *        "unit": "d5356fd4-6675-45ad-9a00-5eff20b83dfa",                     //所属组织ID
     *        "unitName": "开发部",                                               //所属组织名称
     *        "unitLevel": 2,                                                     //所属组织层级
     *        "unitLevelName": "兰德纵横/开发部",                                 //所属组织层次名
     *        "major": true                                                       //是否是主身份
     *      },
     *      {
     *        "id": "343510af-57c2-4a55-a1f2-f30d7af6d284",
     *        "description": "",
     *        "name": "xx",
     *        "unique": "343510af-57c2-4a55-a1f2-f30d7af6d284",
     *        "distinguishedName": "xx@343510af-57c2-4a55-a1f2-f30d7af6d284@I",
     *        "person": "267a7bcc-f27a-49c8-8364-f1c12061085a",
     *        "unit": "108b1b7c-cc78-49ab-9ab1-e67073bd6541",
     *        "unitName": "开发部",
     *        "unitLevel": 2,
     *        "unitLevelName": "浙江兰德纵横/开发部",
     *        "major": false
     *      }
     *    ]
     *  }
     * </pre></code>
     */
    this.session = layout.desktop.session;



    /**
     * 本文档说明如何在前台脚本中使用Actions调用平台的RESTful服务。<br/>
     * 通过访问以下地址来查询服务列表：http://server:20030/x_program_center/jest/list.html
     * @module Actions
     * @example
     * //获取Actions
     * this.Actions
     * //或者
     * o2.Actions
     */

    /**
     * 您可以使用this.Actions.getHost来获取服务根的host。
     * @method getHost
     * @methodOf module:Actions
     * @static
     * @param {String} root 平台RESTful服务根，具体服务列表参见:http://server:20030/x_program_center/jest/list.html。
     *如:<pre><code class='language-js'>
     *  "x_processplatform_assemble_surface" //流程平台相关服务根
     * </pre></code>
     * @return {String} 对应服务根的host。如：http://127.0.0.1:20020
     * @example
     * var actions = this.Actions.getHost( root );
     */

    /**
     * 平台预置了Actions对象用于调用平台提供的服务，您可以使用this.Actions.load来获取这些方法。
     * @method load
     * @methodOf module:Actions
     * @static
     * @param {String} root 平台RESTful服务根，具体服务列表参见:http://server:20030/x_program_center/jest/list.html。
     * 如:
     *<pre><code class='language-js'>
     *  "x_processplatform_assemble_surface" //流程平台相关服务根
     * </pre></code>
     * @return {Object} 返回action对象，用于后续服务调用
     * @example
     * var actions = o2.Actions.load( root );
     * //或
     * var actions = this.Actions.load( root );
     * @example
     * //获取流程平台服务对象。
     * var processAction = this.Actions.load("x_processplatform_assemble_surface");
     * @example
     * <caption>
     *     通过this.Actions.load(root)方法得到的action对象，就可以访问此服务下的方法了。<br/>
     *     访问方法的规则如下：
     *  </caption>
     *  this.Actions.load( root )[actionName][methodName]( arguements );
     *
     *  root : 平台服务根
     *
     *  actionName : 服务下的Action分类名称，如 TaskAction
     *
     *  methodName : Action分类的服务名称，如 get
     *
     *  arguements : 需调用的RESTful服务的相关参数。这些参数需要按照先后顺序传入。根据实际情况可以省略某些参数。参数序列分别是:
     *
     *      uri的参数, data/formData(Post, Put方法), file(附件), success, failure, async。
     *
     *      uri参数：如果有uri有多个参数，需要按先后顺序传入。
     *
     *      data（formData）参数：提交到后台的数据，如果是上传附件，传入formData。POST 和 PUT 方法需要传入，GET方法和DELETE方法省略。
     *
     *      file参数：POST 或者 PUT方法中有效，当需要上传附件时传入,否则可以省略。
     *
     *      success参数：服务执行成功时的回调方法，形如 function(json){
     *          json为后台服务传回的数据
     *      }。
     *
     *      failure 参数：服务执行失败时的回调方法，形如 function(xhr){
     *          xhr XmlHttpRequest对象，服务器请求失败时有值
     *       }
     *      此参数可以省略，如果省略，系统会自动弹出错误信息。
     *
     *      async : 方法同步或者异步执行，默认为true。
     *  @example
     * <caption>
     *     <b>样例1:</b>
     *     根据x_processplatform_assemble_surface服务获取当前用户的待办列表：<br/>
     *     可以通过对应服务的查询页面，http://server:20020/x_processplatform_assemble_surface/jest/index.html<br/>
     *     可以看到以下界面：<img src="img/module/Actions/Actions.png"/>
     *     我们可以找到TaskAction的V2ListPaging服务是列式当前用户待办的服务。<br/>
     *     该服务有以下信息：<br/>
     *     1、actionName是：TaskAction<br/>
     *     2、methodName是：V2ListPaging<br/>
     *     2、有两个url参数，分别是 page(分页), size(每页数量)<br/>
     *     3、有一系列的body参数<br/>
     *     4、该服务方法类型是POST<br/>
     *     根据这些信息我们可以组织出下面的方法：
     * </caption>
     * var processAction = this.Actions.load("x_processplatform_assemble_surface"); //获取action
     * var method = processAction.TaskAction.V2ListPaging; //获取列式方法
     * method(
     *  1,  //uri 第1个参数，如果无uri参数，可以省略
     *  20, //uri 第2个参数，如果无uri参数，可以省略，如果还有其他uri参数，可以用逗号, 分隔
     *  {   //body 参数，对POST和PUT请求，该参数必须传，可以为空对象
     *      processList : [xxx] //具体参数
     *  },
     *  function(json){ //正确调用的回调
     *       //json.data得到服务返回数据
     *  },
     *  function(xhr){ //可选，错误调用的回调
     *      //xhr为XmlHttpRequest对象，服务器请求失败时有值
     *      var responseJSON = JSON.parse( xhr.responseText ) //xhr.responseText {String}是后台返回的出错信息
     *      //responseJSON见下面的说明
     *
     *      var message = responseJSON.message; //message为错误提示文本
     *  },
     *  true //可选，true为异步调用，false为同步调用，默认为true
     * );
     * @example
     * <caption>出错信息responseJSON的格式</caption>
     * {
     *       "type": "error", //类型为错误
     *       "message": "标识为:343434 的 Task 对象不存在.", //提示文本
     *       "date": "2020-12-29 17:02:13", //出错时间
     *       "prompt": "com.x.base.core.project.exception.ExceptionEntityNotExist" //后台错误类
     *}
     * @example
     * <caption>
     *     <b>样例2:</b>
     *      已知流程实例的workid，在脚本中获取数据，修改后进行保存。
     * </caption>
     * //查询服务列表找到获取data数据服务为DataAction的getWithWork方法
     * //查询服务列表找到更新data数据服务为DataAction的updateWithWork方法
     *
     * var workid = "cce8bc22-225a-4f85-8132-7374d546886e";
     * var data;
     * this.Actions.load("x_processplatform_assemble_surface").DataAction.getWithWork( //平台封装好的方法
     *      workid, //uri的参数
     *      function( json ){ //服务调用成功的回调函数, json为服务传回的数据
     *          data = json.data; //为变量data赋值
     *      }.bind(this),
     *      false //同步执行
     * )
     *
     * data.subject = "新标题"; //修改数据
     * this.Actions.load("x_processplatform_assemble_surface").DataAction.updateWithWork(
     *      workid, //uri的参数
     *      data, //保存的数据
     *      function(){ //服务调用成功的回调函数
     *          o2.xDesktop.notice("success", {"y":"top", "x": "right"}, "保存成功");  //提示，{"y":"top", "x": "right"}指提示框在顶部右边
     *      }.bind(this)
     * );
     */

    /**
     * <b>已过时。</b>平台预置了Action的调用方法，您可以使用o2.Actions.get来获取这些方法。RESTful配置文件在{服务器目录}/webServer/o2_core/o2/xAction/services下。
     * @method get
     * @deprecated
     * @methodOf module:Actions
     * @static
     * @param {String} root 平台RESTful服务根，具体服务列表参见:http://server:20030/x_program_center/jest/list.html。
     *如:<pre><code class='language-js'>
     *  "x_processplatform_assemble_surface" //流程平台相关服务根
     * </pre></code>
     * @return {String} 对应服务根的host。如：http://127.0.0.1:20020
     * @example
     * var actions = o2.Actions.get( root );
     * actions[ methodName ]( arguements );
     *
     * or
     *
     * o2.Actions.get( root )[methodName]( arguements );
     * @example
     * methodName :（string）方法名称。
     * arguements : 见load方法的arguements说明
     * @example
     * <caption><b>样例一:</b>已知流程实例的workid，在脚本中获取数据，修改后进行保存。</caption>
     * //现已知获取数据的方法名称是 getWorkData  uri为： /jaxrs/data/work/{workid}
     * //已知更新数据的方法名称是 saveData  uri为： /jaxrs/data/work/{workid}
     * var workid = "cce8bc22-225a-4f85-8132-7374d546886e";
     * var action = o2.Actions.get("x_processplatform_assemble_surface");
     * var data;
     * action.getWorkData( //平台封装好的方法
     *      workid, //uri的参数
     *      function( json ){ //服务调用成功的回调函数, json为服务传回的数据
     *          data = json.data; //为变量data赋值
     *      }.bind(this),
     *      false //同步执行
     * );

     * data.subject = "新标题"; //修改数据
     * action.saveData(
     *      workid, //uri的参数
     *      data, //保存的数据
     *      function(){ //服务调用成功的回调函数
     *          o2.xDesktop.notice("success", {"y":"top", "x": "right"}, "保存成功");  //提示，{"y":"top", "x": "right"}指提示框在顶部右边
     *      }.bind(this)
     * );
     * @example
     * <caption><b>样例二:</b>已知流程应用的workid，分页列式出流程实例。</caption>
     * //现已知获取数据的方法名称是 listWorkNext  uri为： {"uri": "/jaxrs/work/list/{id}/next/{count}/application/{applicationId}"},
     * var id = "(0)"; //如果是第一页id是(0)，否则传上一页最后一个流程实例的id
     * var count = 10;
     * var applicationId = "dde8bc22-225a-4f85-8132-7374d546886e";
     * o2.Actions.get("x_processplatform_assemble_surface").listWorkNext(
     *      id, //listWorkNext服务有3个uri参数，要按先后顺序列出
     *      count,
     *      applicationId,
     *       function( json ){
     *          //json.data
     *      }.bind(this)
     * );
     */

    this.Actions = o2.Actions;

    this.query = function (option) {
        // options = {
        //      "name": "statementName",
        //      "data": "json data",
        //      "firstResult": 1,
        //      "maxResults": 100,
        //      "success": function(){},
        //      "error": function(){},
        //      "async": true or false, default is true
        // }
        if (option) {
            var json = (option.data) || {};
            if (option.firstResult) json.firstResult = option.firstResult.toInt();
            if (option.maxResults) json.maxResults = option.maxResults.toInt();
            o2.Actions.get("x_query_assemble_surface").executeStatement(option.name, json, success, error, options.async);
        }
    };
    // this.Table = MWF.xScript.createTable();
};


if( !MWF.xScript.dictLoaded )MWF.xScript.dictLoaded = {};

if( !MWF.xScript.createDict ){
    MWF.xScript.addDictToCache = function ( options, path, json ) {
        if( !path )path = "root";
        if( path.indexOf("root") !== 0 )path = "root." + path ;

        var type = options.appType || "process";
        var enableAnonymous = options.enableAnonymous || false;

        var appFlagList = [];
        if( options.application )appFlagList.push( options.application );
        if( options.appId )appFlagList.push( options.appId );
        if( options.appName )appFlagList.push( options.appName );
        if( options.appAlias )appFlagList.push( options.appAlias );

        var dictFlagList = [];
        if( options.id )dictFlagList.push( options.id );
        if( options.name )dictFlagList.push( options.name );
        if( options.alias )dictFlagList.push( options.alias );

        var cache = {};
        cache[path] = json;

        for( var i=0; i<appFlagList.length; i++ ){
            for( var j=0; j<dictFlagList.length; j++ ){
                var k = dictFlagList[j] + type + appFlagList[i] + enableAnonymous;
                if( !MWF.xScript.dictLoaded[k] ){
                    MWF.xScript.dictLoaded[k] = cache; //指向同一个对象
                    // MWF.xScript.dictLoaded[k][path] = json; //指向不同的对象
                }else if( i===0 && j===0 ){
                    MWF.xScript.setDictToCache( k, path ,json );
                    var arr = path.split(/\./g);
                    var p;
                    var cache = MWF.xScript.dictLoaded[k];
                    for( var l=0 ; l<arr.length; l++ ){
                        p = l === 0 ? arr[0] : ( p + "." + arr[l] );
                        if( cache[ p ] )break;
                    }
                    if( p ){
                        var mathP = p+".";
                        Object.keys( cache ).each( function( path, idx){
                            if( path.indexOf( mathP ) === 0 )delete cache[path];
                        })
                    }
                }
            }
        }
    };

    MWF.xScript.getMatchedDict = function(key, path){
        if( !path )path = "root";
        if( path.indexOf("root") !== 0 )path = "root." + path ;

        var arr = path.split(/\./g);
        if( MWF.xScript.dictLoaded[key] ){
            var dicts = MWF.xScript.dictLoaded[key];
            var list = Array.clone(arr);
            var p;
            var dict;
            for( var i=0 ; i<arr.length; i++ ){
                p = i === 0 ? arr[0] : ( p + "." + arr[i] );
                list.shift();
                if( dicts[ p ] ){
                    dict = dicts[ p ];
                    break;
                }
            }
            return {
                dict : dict,
                unmatchedPathList : list
            }
        }
        return {
            dict : null,
            unmatchedPathList : list
        }
    };

    MWF.xScript.insertDictToCache = function(key, path, json){
        if( MWF.xScript.dictLoaded[key] ){
            var matchedDict = MWF.xScript.getMatchedDict( key, path );
            var dict = matchedDict.dict;
            var list = matchedDict.unmatchedPathList;
            if( !dict ){
                MWF.xScript.dictLoaded[key][path] = json;
            }else{
                for( var j=0; j<list.length-1; j++ ){
                    if( !dict[ list[j] ] ){
                        dict[ list[j] ] = {};
                    }
                    dict = dict[ list[j] ];
                }
                var lastPath = list[list.length-1];
                if( !dict[lastPath] ){
                    dict[lastPath] = json;
                }else if( typeOf( dict[lastPath] ) === "array" ){
                    dict[lastPath].push( json );
                }
            }
        }else{
            MWF.xScript.dictLoaded[key] = {};
            MWF.xScript.dictLoaded[key][path] = json;
        }
    };


    MWF.xScript.setDictToCache = function(key, path, json){
        if( MWF.xScript.dictLoaded[key] ){
            var matchedDict = MWF.xScript.getMatchedDict( key, path );
            var dict = matchedDict.dict;
            var list = matchedDict.unmatchedPathList;
            if( !dict ){
                MWF.xScript.dictLoaded[key][path] = json;
            }else{
                for( var j=0; j<list.length-1; j++ ){
                    if( !dict[ list[j] ] ){
                        dict[ list[j] ] = {};
                    }
                    dict = dict[ list[j] ];
                }
                dict[list[list.length-1]] = json;
            }
        }else{
            MWF.xScript.dictLoaded[key] = {};
            MWF.xScript.dictLoaded[key][path] = json;
        }
    };

    MWF.xScript.getDictFromCache = function( key, path ){
        var matchedDict = MWF.xScript.getMatchedDict( key, path );
        var dict = matchedDict.dict;
        var list = matchedDict.unmatchedPathList;
        if( dict ){
            for( var j=0; j<list.length; j++ ){
                dict = dict[ list[j] ];
                if( !dict )return null;
            }
            return dict;
        }
        return null;
    };

    MWF.xScript.deleteDictToCache = function(key, path){
        var matchedDict = MWF.xScript.getMatchedDict( key, path );
        var dict = matchedDict.dict;
        var list = matchedDict.unmatchedPathList;

        if( dict){
            for( var j=0; j<list.length-1; j++ ){
                dict = dict[ list[j] ];
                if( !dict )return;
            }
            delete dict[list[list.length-1]];
        }
    };


    MWF.xScript.createDict = function(application){
        //optionsOrName : {
        //  type : "", //默认为process, 可以为  process  cms
        //  application : "", //流程/CMS的名称/别名/id, 默认为当前应用
        //  name : "", // 数据字典名称/别名/id
        //  enableAnonymous : false //允许在未登录的情况下读取CMS的数据字典
        //}
        //或者name: "" // 数据字典名称/别名/id
        return function(optionsOrName){
            var options = optionsOrName;
            if( typeOf( options ) == "string" ){
                options = { name : options };
            }
            var name = this.name = options.name;
            var type = ( options.type && options.application ) ?  options.type : "process";
            var applicationId = options.application || application;
            var enableAnonymous = options.enableAnonymous || false;

            var opt = {
                "appType" : type,
                "name" : name,
                "appId" : applicationId,
                "enableAnonymous" : enableAnonymous
            };

            var key = name+type+applicationId+enableAnonymous;
            // if (!dictLoaded[key]) dictLoaded[key] = {};
            // this.dictData = dictLoaded[key];

            //MWF.require("MWF.xScript.Actions.DictActions", null, false);
            if( type == "cms" ){
                var action = MWF.Actions.get("x_cms_assemble_control");
            }else{
                var action = MWF.Actions.get("x_processplatform_assemble_surface");
            }

            var encodePath = function( path ){
                var arr = path.split(/\./g);
                var ar = arr.map(function(v){
                    return encodeURIComponent(v);
                });
                return ar.join("/");
            };

            this.get = function(path, success, failure, async, refresh){
                var value = null;
                if (!refresh ){
                    var data = MWF.xScript.getDictFromCache( key, path );
                    if( data ){
                        if (success && o2.typeOf(success)=="function") success( data );
                        return data;
                    }
                }

                if (success===true) async=true;
                if (failure===true) async=true;

                // var cb = function(json){
                //     value = json.data;
                //     MWF.xScript.addDictToCache(opt, path, value);
                //     if (success && o2.typeOf(success)=="function") value = success(json.data);
                //     return value;
                // }.ag().catch(function(xhr, text, error){ if (failure && o2.typeOf(failure)=="function") return failure(xhr, text, error); });

                var cb = function(json){
                    value = json.data;
                    MWF.xScript.addDictToCache(opt, path, value);
                    if (success && o2.typeOf(success)=="function") value = success(json.data);
                    return value;
                };

                var promise;
                if (path){
                    var p = encodePath( path );
                    //var p = path.replace(/\./g, "/");
                    promise = action[ ( (enableAnonymous && type == "cms") ? "getDictDataAnonymous" : "getDictData" ) ](encodeURIComponent(this.name), applicationId, p, cb, null, !!async, false);
                }else{
                    promise = action[ ( (enableAnonymous && type == "cms") ? "getDictRootAnonymous" : "getDictRoot" ) ](this.name, applicationId, cb, null, !!async, false);
                }
                return (!!async) ? promise : value;

                // if (path){
                //     var p = encodePath( path );
                //     //var p = path.replace(/\./g, "/");
                //     action[ ( (enableAnonymous && type == "cms") ? "getDictDataAnonymous" : "getDictData" ) ](encodeURIComponent(this.name), applicationId, p, function(json){
                //         value = json.data;
                //         // this.dictData[path] = value;
                //         MWF.xScript.addDictToCache(opt, path, value);
                //         if (success) success(json.data);
                //     }.bind(this), function(xhr, text, error){
                //         if (failure) failure(xhr, text, error);
                //     }, !!async);
                // }else{
                //     action[ ( (enableAnonymous && type == "cms") ? "getDictRootAnonymous" : "getDictRoot" ) ](this.name, applicationId, function(json){
                //         value = json.data;
                //         // this.dictData["root"] = value;
                //         MWF.xScript.addDictToCache(opt, path, value);
                //         if (success) success(json.data);
                //     }.bind(this), function(xhr, text, error){
                //         if (failure) failure(xhr, text, error);
                //     }, !!async);
                // }

                //return value;
            };

            this.set = function(path, value, success, failure){
                var p = encodePath( path );
                //var p = path.replace(/\./g, "/");
                return action.setDictData(encodeURIComponent(this.name), applicationId, p, value, function(json){
                    MWF.xScript.setDictToCache(key, path, value);
                    if (success) return success(json.data);
                }, function(xhr, text, error){
                    if (failure) return failure(xhr, text, error);
                }, false, false);
            };
            this.add = function(path, value, success, failure){
                var p = encodePath( path );
                //var p = path.replace(/\./g, "/");
                return action.addDictData(encodeURIComponent(this.name), applicationId, p, value, function(json){
                    MWF.xScript.insertDictToCache(key, path, value);
                    if (success) return success(json.data);
                }, function(xhr, text, error){
                    if (failure) return failure(xhr, text, error);
                }, false, false);
            };
            this["delete"] = function(path, success, failure){
                var p = encodePath( path );
                //var p = path.replace(/\./g, "/");
                return action.deleteDictData(encodeURIComponent(this.name), applicationId, p, function(json){
                    MWF.xScript.deleteDictToCache(key, path);
                    if (success) return success(json.data);
                }, function(xhr, text, error){
                    if (failure) return failure(xhr, text, error);
                }, false, false);
            };
            this.destory = this["delete"];
        }
    };
}


