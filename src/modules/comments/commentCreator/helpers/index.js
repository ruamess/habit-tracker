import store from "@/modules/store"
import { toast } from 'sonner'
import i18n from "i18next"

const createComment = () => {
	const text = store.commentText
	const t = i18n.t.bind(i18n);

	if (text.trim() == '') {
		toast.error(t("commentCannotBeEmpty"))
	}
	else {
		store.habitList[store.habitIndex].days.push({ text: text })
		store.updateCommentText('')
	}
}


const inputChange = (event) => {
	store.updateCommentText(event.target.value)
}


const onPressEnter = (event) => {
	if (event.key === 'Enter') {
		createComment()
	}
}


export {
	createComment,
	inputChange,
	onPressEnter
}
