const loadedMap = [];
const waiters = [];
function reqjs(name, dependencies, module) {
    loadedMap[name] = module;
    for (let i = 0; i <= dependencies.length; i++) {
        if(!loadedMap[dependencies[i]]) {
            waiters[name] //TODO
        }
    }
}

reqjs()