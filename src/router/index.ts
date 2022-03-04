import { mainView } from "../config/bookmark"

class Router {
    private main: string
    constructor(main: string) {
        this.main = main
    }
    getPath() {
        return window.location.pathname.replace('/', '')
    }
    changePath(path: string) {
        // eslint-disable-next-line no-restricted-globals
        history.pushState(null, '', path)
    }
}

export default new Router(mainView)