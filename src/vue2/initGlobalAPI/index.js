const LIFECYCLE_HOOKS = [
    'beforeCreate',
    'create',
    'beforeMount',
    'mounted'
]
let strats = {}
LIFECYCLE_HOOKS.forEach(item => {
    strats[item] = mergeHooks()
})
function mergeHooks (parentVal, childVal) {
    if(childVal) {
        if(parentVal) {
            return parentVal.concat(childVal)
        }else{
            return [childVal]
        }
    }else{
        return parentVal
    }
}
function initGlobalAPI(Vue) {
    Vue.options = {}
    Vue.mixin = function (mixin) {
        this.options = mergeOptions(this.options, mixin)
    }
    Vue.mixin({
        a: 1,
        beforeCreate(){

        }
    })
    Vue.mixin({
        b: 2,
        beforeCreate(){
            
        }
    })
    // console.log(Vue.options)
}

function mergeOptions (parent, child) {
    const options = {}
    for(let key in parent) {
        mergeField(key)
    }
    for(let key in child) {
        if(!parent.hasOwnProperty(key)) {
            mergeField(key)
        }
    }

    function mergeField (key) {
        if(typeof parent[key] == 'object' && typeof child[key] == 'object') {
            options[key] = {
                ...parent[key],
                ...child[key]
            }
        }else if(child[key] == null) {
            options[key] = parent[key]
        } else {
            options[key] = child[key]
        }
    }
    return options
}