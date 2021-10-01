import render from "../../utils/render";
import user from "../../utils/authentication"
import page from './index.html'

export default function homePage() {
    Alpine.data('user', user)
    return render(page)
}
